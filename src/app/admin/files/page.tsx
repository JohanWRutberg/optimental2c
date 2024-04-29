"use client";

import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL, deleteObject, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Progress, Spinner } from "@nextui-org/react";

export default function Files() {
  const [fileList, setFileList] = useState<{ name: string; url: string }[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      const fileListRef = ref(storage, "files/");
      try {
        const res = await listAll(fileListRef);
        const filesList = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return { name: itemRef.name, url };
          })
        );
        setFileList(filesList);
        setIsLoading(false); // Update loading state after fetching files
      } catch (error) {
        console.error("Error fetching files: ", error);
      }
    };
    fetchFiles();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const fileRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading file: ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileList((prev) => [...prev, { name: file.name, url: downloadURL }]);
          setFile(null);
          setUploadProgress(null);
        });
      }
    );
  };

  const handleDownload = async () => {
    // Ensure that there are selected files to download
    if (selectedFiles.length === 0) return;

    // Iterate over each selected file
    for (const fileName of selectedFiles) {
      // Find the corresponding file object by name
      const file = fileList.find((item) => item.name === fileName);

      // If the file is found and has a URL
      if (file && file.url) {
        // Open the file URL in a new tab/window
        const newWindow = window.open(file.url, "_blank");

        // Focus the new window (optional)
        if (newWindow) {
          newWindow.focus();
        }
      }
    }
    // Clear selected files after initiating the download
    setSelectedFiles([]);
  };

  const handleDeleteSelected = () => {
    if (selectedFiles.length === 0) return;

    const confirmDelete = window.confirm("Är du säker på att du vill radera den här filen?");
    if (!confirmDelete) return;

    const deletionPromises = selectedFiles.map(async (fileName) => {
      const fileRef = ref(storage, `files/${fileName}`);
      try {
        await deleteObject(fileRef);
        toast.success(`Filen '${fileName}' raderades!`);
        setFileList((prev) => prev.filter((file) => file.name !== fileName));
      } catch (error) {
        console.error(`Det gick inte att radera filen '${fileName}':`, error);
        toast.error(`Det gick inte att radera filen '${fileName}'`);
      }
    });

    Promise.all(deletionPromises).then(() => {
      setSelectedFiles([]);
    });
  };

  const toggleFileSelection = (fileName: string) => {
    setSelectedFiles((prevSelected) =>
      prevSelected.includes(fileName) ? prevSelected.filter((name) => name !== fileName) : [...prevSelected, fileName]
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center items-center justify-center">
      <section className="flex flex-col py-4 px-8 min-w-96 max-w-md bg-white bg-opacity-5 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <h1 className="text-3xl font-bold mb-4 p-4">Ladda upp, Ladda ner och Radera filer</h1>
        {isLoading ? ( // Show spinner while loading
          <Spinner label="Loading files..." color="warning" labelColor="warning" />
        ) : (
          <div className="flex flex-col justify-center mb-8">
            <input type="file" onChange={handleFileChange} />

            <Button
              color="primary"
              variant="ghost"
              onClick={handleUpload}
              disabled={!file || uploadProgress !== null}
              className="text-white px-4 py-2 mt-2 rounded cursor-pointer"
            >
              Ladda upp
            </Button>
          </div>
        )}
        {uploadProgress !== null && (
          <Progress
            aria-label="Downloading..."
            size="md"
            value={value}
            color="success"
            showValueLabel={true}
            className="max-w-md"
          />
        )}

        {fileList.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Uppladdade filer</h2>
            <ul>
              {fileList.map((file) => (
                <li key={file.name}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedFiles.includes(file.name)}
                      onChange={() => toggleFileSelection(file.name)}
                    />
                    {file.name}
                  </label>
                </li>
              ))}
            </ul>
            <Button
              color="primary"
              variant="solid"
              onClick={handleDownload}
              disabled={selectedFiles.length === 0}
              className="bg-green-800 text-white px-4 py-2 mt-4 mr-2 rounded cursor-pointer"
            >
              Hämta vald fil/filer
            </Button>
            <Button
              color="primary"
              variant="solid"
              onClick={handleDeleteSelected}
              disabled={selectedFiles.length === 0}
              className="bg-red-800 text-white px-4 py-2 mt-2 ml-2 rounded cursor-pointer"
            >
              Radera vald fil/filer
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

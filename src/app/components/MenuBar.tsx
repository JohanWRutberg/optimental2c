"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SigninButton from "./SigninButton";
import Image from "next/image";
import Logo from "../../../public/LoggaText.svg";

const MenuBar = () => {
  const [nav, setNav] = useState(false);
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setTextColor("#ffffff");
      } else {
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="hidden lg:flex md:text-white">
        <ul className="flex flex-row align-middle items-center justify-center">
          {/* <li className="p-3 hover:text-[#EA5709]">
            <Link href="/">Hem</Link>
          </li> */}
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="#">Länk</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/admin">Admin</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/about">Om mig</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
        {/* <div className="flex flex-col align-middle items-center justify-right">
          <li className="p-2">
            <SigninButton />
          </li>
        </div> */}
      </div>
      <div onClick={handleNav} className="block lg:hidden z-50 absolute top-0 right-0 p-5 cursor-pointer">
        {nav ? <div></div> : <AiOutlineMenu size={35} style={{ color: `${textColor}` }} />}
      </div>

      <div
        className={
          nav
            ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300 backdrop-filter backdrop-blur bg-opacity-30 z-10"
            : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300 backdrop-filter backdrop-blur bg-opacity-30 z-10"
        }
      >
        <div onClick={handleNav} className="block lg:hidden z-50 absolute top-0 right-0 p-5 cursor-pointer">
          <AiOutlineClose size={35} style={{ color: `${textColor}` }} />
        </div>

        <ul className="flex flex-col mb-10 justify-center items-center p-2 text-4xl">
          <li className="p-4">
            <Image className="mb-20" src={Logo} width={200} height={200} alt="" />
          </li>
          {/* <li className="p-3 hover:text-[#EA5709]">
            <Link href="/">Hem</Link>
          </li> */}
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/profile">Profil</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/admin">Admin</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/about">Om mig</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709]">
            <Link href="/contact">Kontakt</Link>
          </li>
          <li className="mt-10 text-xl">
            <SigninButton />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;

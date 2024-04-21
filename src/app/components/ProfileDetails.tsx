import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import defaultPicture from "../../../public/transparent-avatar-user-profile3.png";
import { Button, Input, Textarea } from "@nextui-org/react";

const ProfileDetails = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const hasValidImage = user?.image && user.image !== "";

  return (
    <div className="flex justify-center items-center mt-36">
      <div className="py-4 px-8 min-w-96 max-w-md bg-white bg-opacity-5 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
        <h1 className="text-3xl font-extrabold text-center text-gray-300 mb-5">Din Profil</h1>

        <div className="flex justify-center py-4 items-center rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5">
          {hasValidImage ? (
            <Image height={100} width={100} src={user?.image ?? ""} alt={"Profile picture"} className="rounded-full" />
          ) : (
            <Image height={100} width={100} src={defaultPicture} alt={"Profile picture"} className="rounded-full" />
          )}
        </div>

        <p className="text-lg text-center text-gray-300 mt-4 mb-4">Roll: {session?.user?.role}</p>
        <form className="flex flex-col">
          <div className="gap-3 mb-5">
            <Input
              type="text"
              label="Namn"
              placeholder="Namn"
              defaultValue={
                session?.user?.firstName && session?.user?.lastName
                  ? `${session.user.firstName} ${session.user.lastName}`
                  : session?.user?.name
              }
              className="text-gray-300 font-semibold mb-2"
              color="primary"
            ></Input>
          </div>
          <div className="mb-5">
            <Input
              type="email"
              label="E-post"
              placeholder="E-post"
              defaultValue={session?.user?.email}
              className="text-gray-300 font-semibold mb-2"
              color="primary"
            ></Input>
          </div>
          <div className="mb-5">
            <Textarea
              type="text"
              label="Journal"
              placeholder="Journal"
              defaultValue={session?.user?.journal}
              className="text-gray-300 font-semibold mb-2"
              color="primary"
            ></Textarea>
          </div>
          <Button
            color="primary"
            variant="solid"
            className=" text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5"
            type="submit"
          >
            Uppdatera
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;

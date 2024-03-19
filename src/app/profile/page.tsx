import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "../components/Card";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  // Use middleware to protect instead
  /* if (!session || !session.user) redirect("/auth/signin"); */

  console.log(session?.user.image);
  return (
    <div className="flex items-center justify-center mt-[20vh]">
      <div className="flex bg-sky-700 max-w-4xl w-4xl justify-center items-center p-8">
        <Image
          height={100}
          width={100}
          src={user?.image ?? ""}
          alt={"|;-)"}
          /* {user?.firstName ?? ""} */ className="rounded-full"
        />
        <div className="bg-sky-700 text-slate-100 p-2 rounded shadow grid grid-cols-2 max-w-4xl w-4xl">
          {/* <Image height={80} width={80} src={user?.image ?? ""} alt={user?.firstName ?? ""} className="rounded-full" /> */}
          <p>Namn:</p>
          <p>
            {session?.user.firstName} {session?.user.lastName} {session?.user.name}
          </p>
          <p>Roll:</p>
          <p>{session?.user.role}</p>
          <p>E-post:</p>
          <p>{session?.user.email}</p>
          <p>Journal:</p>
          <p>{session?.user.journal}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

{
  /* <div className="bg-style bg-center bg-cover h-screen flex justify-center flex-col items-center">
      <div className="border max-w-4xl w-4xl">
        <Image height={80} width={80} src={user?.image ?? ""} alt={user?.firstName ?? ""} className="rounded-full" />
        <div className="grid grid-cols-4 gap-y-4 border">
          <p>Roll:</p> <p className="col-span-3">{user?.role}</p>
          <p>Namn:</p>{" "}
          <p className="col-span-3">
            {user?.firstName} {user?.lastName} {user?.name}
          </p>
          <p>Telefon:</p> <p className="col-span-3">{user?.phone}</p>
          <p>E-post:</p> <p className="col-span-3">{user?.email}</p>
          <p>Journal:</p> <p className="col-span-3">{user?.journal}</p>
        </div>
      </div>
    </div> */
}

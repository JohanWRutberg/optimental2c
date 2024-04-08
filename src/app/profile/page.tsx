import { getServerSession } from "next-auth/next";
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

  /* console.log(session?.user.image); */
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
            {session?.user?.firstName} {session?.user?.lastName} {session?.user?.name}
          </p>
          <p>Roll:</p>
          <p>{session?.user?.role}</p>
          <p>E-post:</p>
          <p>{session?.user?.email}</p>
          <p>Journal:</p>
          <p>{session?.user?.journal}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

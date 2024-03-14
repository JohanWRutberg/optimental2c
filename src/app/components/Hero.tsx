"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface HeroProps {
  message?: string;
}

const Hero: React.FC<HeroProps> = ({ message }) => {
  const { data: session } = useSession();
  return (
    <>
      <div className="absolute flex items-center justify-center h-screen w-screen bottom-20">
        <div className="p-5 text-white  w-[450px]">
          <q className="py-5 text-2xl italic font-bold text-bold">{message}</q>
        </div>
      </div>
      <div className="flex flex-row items-end h-screen w-screen p-5 gap-4">
        {!session ? (
          <Button
            className="flex-grow h-16 text-xl"
            color="primary"
            onClick={() => signIn()}
          >
            Logga In
          </Button>
        ) : (
          <Button
            className="flex-grow h-16 text-xl"
            color="primary"
            onClick={() => signOut()}
          >
            Logga ut
          </Button>
        )}
        <Button className="flex-grow h-16 text-xl" color="primary">
          <Link className="flex-grow" href="/contact">
            Kontakta oss!
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Hero;

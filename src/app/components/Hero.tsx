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
    <div className="absolute flex flex-col items-center justify-center h-screen w-screen bottom-20">
      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0" /> */}
      <div className="p-5 text-white mt-[-10rem] w-[450px]">
        <q className="py-5 text-2xl italic font-bold text-bold">{message}</q>
      </div>
      <div className="flex gap-8">
        <Link href="/contact">
          <Button color="primary">Kontakta oss!</Button>
        </Link>
        {!session ? (
          <Button color="primary" onClick={() => signIn()}>
            Logga In
          </Button>
        ) : (
          <Button color="primary" onClick={() => signOut()}>
            Logga ut
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;

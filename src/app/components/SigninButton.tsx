"use client";

import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";

const SigninButton = () => {
  const { data: session } = useSession();
  /* console.log(session); */
  return (
    <div className="flex-col p-4">
      {session?.user.firstName && (
        <div className="flex flex-row gap-3 items-center">
          <span className="relative flex h-3 w-3 justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0097ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0097ff]"></span>
          </span>
          <Link href={"/profile"}>
            <span className="text-[#EA5709] hover:text-sky-300">
              {`${session.user.firstName}`} {`${session.user.lastName}`}
            </span>
          </Link>

          <Link className="text-[#0097ff] hover:text-sky-300 transition-colors" href={"/api/auth/signout"}>
            <LuLogOut className="text-2xl" />
          </Link>
        </div>
      )}
      {!session && (
        <div className="flex flex-row gap-2">
          <Button color="primary" variant="ghost" onClick={() => signIn()}>
            Logga In
          </Button>
          <Button color="primary" variant="ghost" as={Link} href={"/auth/signup"}>
            Registrera
          </Button>
        </div>
      )}
      {session?.user.image && (
        <div className="flex flex-row items-center gap-4">
          <div>
            <span className="relative flex h-3 w-3 justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0097ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0097ff]"></span>
            </span>
          </div>
          <div>
            <Link href="/profile">
              <Image
                src={session.user?.image!}
                width={500}
                height={500}
                alt="Profile pic"
                className="h-10 w-10 rounded-full cursor-pointer mx-auto hoover:opacity-50"
              />
            </Link>
          </div>
          <div>
            <Link className="text-[#0097ff] hover:text-sky-300 transition-colors" href={"/api/auth/signout"}>
              <LuLogOut className="text-2xl" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SigninButton;

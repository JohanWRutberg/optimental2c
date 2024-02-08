"use client";

import Link from "next/link";
import logo from "../../../public/Logga.svg";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        <div className="flex items-center">
          <Image src={logo} width={80} height={80} alt="" />
          <h1 className="font-bold text-2xl uppercase ml-4">
            <span className="text-[#EA5709]">Opti</span>
            <span className="text-[#0097ff]">mental</span>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;

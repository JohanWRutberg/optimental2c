"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import logo from "../../../public/Logga.svg";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Login from "./Login";

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const { data: session } = useSession();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor("#002444");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div style={{ backgroundColor: `${color}` }} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        <Link href="/">
          <div className="flex items-center">
            <Image src={logo} width={80} height={80} alt="" />
            {/* <h1
              style={{ color: `${textColor}` }}
              className="font-bold text-2xl uppercase ml-4"
            >
              <span className="text-[#EA5709]">Opti</span>
              <span className="text-[#0097ff]">mental</span>
            </h1> */}
          </div>
        </Link>

        <ul style={{ color: `${textColor}` }} className="hidden lg:flex text cursor-pointer">
          <li className="p-4 hover:text-[#EA5709] trans-hover">
            <Link href="/">Hem</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709] trans-hover">
            <Link href="/#gallery">Bildspel</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709] trans-hover">
            <Link href="/about">Om mig</Link>
          </li>
          <li className="p-4 hover:text-[#EA5709] trans-hover">
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
        {/*  */}
        {!session ? (
          <Login />
        ) : (
          <>
            <div className="text p-4 flex flex-row items-center space-x-5">
              {/* <Image
                src={session?.user?.image!}
                alt="Profile pic"
                className="h-12 w-12 rounded-full cursor-pointer mx-auto hover:opacity-50"
              /> */}
              <LuLogOut
                onClick={() => signOut()}
                className="text-4xl hover:text-[#EA5709] cursor-pointer animate-pulse trans-hover"
              />
            </div>
          </>
        )}

        <div onClick={handleNav} className="block lg:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        <div
          className={
            nav
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300 backdrop-filter backdrop-blur bg-opacity-30"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-center ease-in duration-300 backdrop-filter backdrop-blur bg-opacity-30"
          }
        >
          <ul className="flex flex-col justify-center">
            <Image className="" src={logo} width={200} height={200} alt="" />
            <li className="p-4 text-4xl hover:text-[#EA5709]">
              <Link href="/">Hem</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EA5709]">
              <Link href="/#gallery">Bildspel</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EA5709]">
              <Link href="/portfolio">Om mig</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EA5709]">
              <Link href="/contact">Kontakt</Link>
            </li>
            <li className="p-4 text-4xl hover:text-[#EA5709] flex justify-center items-center">
              <Link href="/login">
                <LuLogIn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

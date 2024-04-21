"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SigninButton from "./SigninButton";
import Image from "next/image";
import Logo from "../../../public/LoggaText.svg";
import React from "react";
import { NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, User } from "@nextui-org/react";
import { FaUsers, FaChevronDown, FaAppleWhole, FaChartBar } from "react-icons/fa6";
import { MdPsychology } from "react-icons/md";
/* import { ChevronDownIcon, LockOpenIcon, ScaleIcon, ServerIcon, UserIcon } from "@heroicons/react/20/solid"; */
import { BsActivity } from "react-icons/bs";
import { FcFlashAuto } from "react-icons/fc";

const MenuBar = () => {
  const { data: session } = useSession();
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

  const icons = {
    chevron: <FaChevronDown fill="currentColor" fontSize={16} />,
    users: <FaUsers className="text-danger" fill="currentColor" fontSize={30} />,
    psychology: <MdPsychology className="text-primary" fill="currentColor" fontSize={30} />,
    server: <FaAppleWhole className="text-success" fill="currentColor" fontSize={30} />,
    user: <FaChartBar className="text-warning" fill="currentColor" fontSize={30} />
  };

  return (
    <>
      <div className="hidden lg:flex md:text-white">
        <ul className="flex flex-row align-middle items-center justify-center">
          <li className="p-4 hover:underline">
            <Link href="/">Hem</Link>
          </li>
          {session?.user && session?.user.role === "ADMIN" && (
            <Dropdown className="bg-primary-blue bg-opacity-5 shadow-lg backdrop-blur-xl backdrop-filter">
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:underline"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                    size="lg"
                  >
                    Admin
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label="ACME features"
                className="w-[320px]"
                itemClasses={{
                  base: "gap-4"
                }}
              >
                <DropdownItem
                  key="users"
                  description="Ladda in alla registrerade användare"
                  startContent={icons.users}
                  href="/admin/users"
                >
                  Användare
                </DropdownItem>

                <DropdownItem
                  key="usage_metrics"
                  description="Uppladdade filer"
                  startContent={icons.psychology}
                  href="/admin/files"
                >
                  Dokument
                </DropdownItem>

                <DropdownItem
                  key="99_uptime"
                  description="Text text text text text text text."
                  startContent={icons.server}
                  href="/"
                >
                  Länk
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Text text text text text text text text text."
                  startContent={icons.user}
                  href="/"
                >
                  Länk
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
          {/* <li className="p-4 hover:text-[#EA5709]">
            <Link href="/admin">Admin</Link>
          </li> */}
          <li className="p-4 hover:underline">
            <Link href="/about">Om mig</Link>
          </li>
          <li className="p-4 hover:underline">
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
          <li className="p-4 hover:underline">
            <Link href="/">Hem</Link>
          </li>
          {session?.user && session?.user.role === "ADMIN" && (
            <Dropdown className="bg-primary-blue">
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:underline text-4xl"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Admin
                  </Button>
                </DropdownTrigger>
              </NavbarItem>

              <DropdownMenu
                aria-label="ACME features"
                className="w-[320px]"
                itemClasses={{
                  base: "gap-4"
                }}
              >
                <DropdownItem
                  key="users"
                  description="Ladda in alla registrerade användare"
                  startContent={icons.users}
                  href="/profile"
                >
                  <Link href="/profile">Användare</Link>
                </DropdownItem>

                <DropdownItem key="usage_metrics" description="Vad är psykologi?" startContent={icons.psychology}>
                  <Link href="/">Psykologi</Link>
                </DropdownItem>

                <DropdownItem
                  key="99_uptime"
                  description="Text text text text text text text text text text text text text text text text text text text text text text."
                  startContent={icons.server}
                >
                  <Link href="/">Länk</Link>
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Text text text text text text text text text text text text text text text text text text text text text text."
                  startContent={icons.user}
                >
                  <Link href="/">Länk</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
          {/* <li className="p-4 hover:underline">
            <Link href="/admin">Admin</Link>
          </li> */}
          <li className="p-4 hover:underline">
            <Link href="/about">Om mig</Link>
          </li>
          <li className="p-4 hover:underline">
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

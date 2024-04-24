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
import { IoDocuments, IoCalendarNumber } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";

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
    doc: <IoDocuments className="text-success" fill="currentColor" fontSize={30} />,
    user: <FaChartBar className="text-warning" fill="currentColor" fontSize={30} />,
    calendar: <IoCalendarNumber className="text-warning" fill="currentColor" fontSize={30} />,
    brain: <GiBrain className="text-danger" fill="currentColor" fontSize={30} />
  };

  return (
    <>
      <div className="hidden lg:flex md:text-white">
        <ul className="flex flex-row align-middle items-center justify-center">
          <li className="p-4 hover:underline">
            <Link href="/">Hem</Link>
          </li>
          <li>
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
                  aria-label="Admin menu"
                  className="w-[320px]"
                  itemClasses={{
                    base: "gap-4"
                  }}
                >
                  <DropdownItem
                    key="users"
                    description="Visa alla registrerade användare"
                    startContent={icons.users}
                    href="/admin/users"
                  >
                    Användare
                  </DropdownItem>

                  <DropdownItem
                    key="---"
                    description="Uppladdade filer. Ladda upp, Ladda ner och Ta bort filer."
                    startContent={icons.doc}
                    href="/admin/files"
                  >
                    Dokument
                  </DropdownItem>

                  <DropdownItem
                    key="---"
                    description="Text text text text text text text."
                    startContent={icons.psychology}
                    href="/admin"
                  >
                    Länk
                  </DropdownItem>
                  <DropdownItem
                    key="---"
                    description="Text text text text text text text text text."
                    startContent={icons.user}
                    href="/admin"
                  >
                    Länk
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </li>
          <li>
            {session?.user && session?.user.role === "USER" && (
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
                      User
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>

                <DropdownMenu
                  aria-label="User menu"
                  className="w-[320px]"
                  itemClasses={{
                    base: "gap-4"
                  }}
                >
                  <DropdownItem key="---" description="Mina dokument" startContent={icons.doc} href="/user/files">
                    Dokument
                  </DropdownItem>
                  <DropdownItem
                    key="users"
                    description="Visa min kalender"
                    startContent={icons.calendar}
                    href="/user/users"
                  >
                    Kalender
                  </DropdownItem>

                  <DropdownItem
                    key="---"
                    description="Text text text text text text text."
                    startContent={icons.psychology}
                    href="/user"
                  >
                    Länk
                  </DropdownItem>
                  <DropdownItem
                    key="---"
                    description="Text text text text text text text text text."
                    startContent={icons.brain}
                    href="/user"
                  >
                    Länk
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </li>
          <li className="p-4 hover:underline">
            <Link href="/about">Om mig</Link>
          </li>

          <li className="p-4 hover:underline">
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className="block lg:hidden z-50 absolute top-0 right-0 p-5 cursor-pointer">
        {nav ? <div></div> : <AiOutlineMenu size={35} style={{ color: `${textColor}` }} />}
      </div>

      <div
        className={
          nav
            ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300 backdrop-filter backdrop-blur bg-opacity-10 z-10"
            : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300 backdrop-filter backdrop-blur bg-opacity-10 z-10"
        }
      >
        <div onClick={handleNav} className="block lg:hidden z-50 absolute top-0 right-0 p-5 cursor-pointer">
          <AiOutlineClose size={35} style={{ color: `${textColor}` }} />
        </div>

        <ul className="flex flex-col mb-10 justify-center items-center p-2 text-4xl">
          <li className="">
            <Image className="mb-20" src={Logo} width={200} height={200} alt="" />
          </li>

          <li className="p-4 hover:underline">
            <Link href="/">Hem</Link>
          </li>

          <li>
            {session?.user && session?.user.role === "ADMIN" && (
              <Dropdown className="bg-primary-blue bg-opacity-5 shadow-lg backdrop-blur-xl backdrop-filter">
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
                  aria-label="Admin menu"
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

                  <DropdownItem key="---" description="Vad är psykologi?" startContent={icons.psychology}>
                    <Link href="/">Psykologi</Link>
                  </DropdownItem>

                  <DropdownItem
                    key="---"
                    description="Text text text text text text text text text text text text text text text text text text text text text text."
                    startContent={icons.doc}
                  >
                    <Link href="/">Länk</Link>
                  </DropdownItem>
                  <DropdownItem
                    key="---"
                    description="Text text text text text text text text text text text text text text text text text text text text text text."
                    startContent={icons.user}
                  >
                    <Link href="/">Länk</Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </li>
          <li>
            {session?.user && session?.user.role === "USER" && (
              <Dropdown className="bg-primary-blue bg-opacity-5 shadow-lg backdrop-blur-xl backdrop-filter">
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:underline text-4xl"
                      endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                      size="lg"
                    >
                      User
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>

                <DropdownMenu
                  aria-label="User menu"
                  className="w-[320px]"
                  itemClasses={{
                    base: "gap-4"
                  }}
                >
                  <DropdownItem key="---" description="Mina dokument" startContent={icons.doc} href="/user/files">
                    Dokument
                  </DropdownItem>
                  <DropdownItem
                    key="users"
                    description="Visa min kalender"
                    startContent={icons.calendar}
                    href="/user/users"
                  >
                    Kalender
                  </DropdownItem>

                  <DropdownItem
                    key="---"
                    description="Text text text text text text text."
                    startContent={icons.psychology}
                    href="/user"
                  >
                    Länk
                  </DropdownItem>
                  <DropdownItem
                    key="---"
                    description="Text text text text text text text text text."
                    startContent={icons.brain}
                    href="/user"
                  >
                    Länk
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </li>
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

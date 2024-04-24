"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaChevronDown, FaAppleWhole, FaChartBar } from "react-icons/fa6";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  User
} from "@nextui-org/react";
import { IoLogOut } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SigninButton = () => {
  const { data: session } = useSession();

  const icons = {
    chevron: <FaChevronDown fill="currentColor" fontSize={16} />,
    users: <FaUsers className="text-primary" fill="currentColor" fontSize={30} />,
    logout: <IoLogOut className="text-danger" fill="currentColor" fontSize={30} />,
    profile: <CgProfile className="text-success" fill="currentColor" fontSize={30} />,
    user: <FaChartBar className="text-warning" fill="currentColor" fontSize={30} />
  };
  return (
    <div className="flex-col p-4">
      {session?.user.firstName && (
        <div className="flex flex-row gap-3 items-center">
          <span className="relative flex h-3 w-3 justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA5709]"></span>
          </span>

          <Dropdown className="bg-primary-blue bg-opacity-5 shadow-lg backdrop-blur-xl backdrop-filter">
            <NavbarItem>
              <DropdownTrigger>
                <span className="text-[#ffffff] hover:text-sky-300 cursor-pointer">
                  {`${session.user.firstName}`} {`${session.user.lastName}`}
                </span>

                {/* </Button> */}
              </DropdownTrigger>
            </NavbarItem>

            <DropdownMenu
              aria-label="Profile"
              className="w-[220px]"
              itemClasses={{
                base: "gap-4"
              }}
            >
              <DropdownItem
                key="users"
                description={`(${session.user.role})`}
                startContent={icons.profile}
                href="/profile"
              >
                <Link href="/profile">Profil</Link>
              </DropdownItem>
              <DropdownItem key="logout" description="" startContent={icons.logout} href="/api/auth/signout">
                <Link href="/api/auth/signout" className="text-[#ffffff] transition-colors">
                  Logga ut
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
      {!session && (
        <div className="flex flex-row gap-2">
          <Button color="primary" variant="solid" onClick={() => signIn()}>
            Logga In
          </Button>
          <Button color="primary" variant="solid" as={Link} href={"/auth/signup"}>
            Registrera
          </Button>
        </div>
      )}
      {session?.user.image && (
        <div className="flex flex-row items-center gap-4">
          <span className="relative flex h-3 w-3 justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA5709]"></span>
          </span>
          <Dropdown className="bg-primary-blue bg-opacity-5 shadow-lg backdrop-blur-xl backdrop-filter">
            <NavbarItem>
              <DropdownTrigger>
                <Image
                  src={session.user?.image!}
                  width={500}
                  height={500}
                  alt="Profile pic"
                  className="h-10 w-10 rounded-full cursor-pointer mx-auto hoover:opacity-50"
                />
              </DropdownTrigger>
            </NavbarItem>

            <DropdownMenu
              aria-label="Profile"
              className="w-[220px]"
              itemClasses={{
                base: "gap-4"
              }}
            >
              <DropdownItem key="users" description="Din användar profil" startContent={icons.profile} href="/profile">
                <Link href="/profile">Profil</Link>
              </DropdownItem>
              <DropdownItem key="logout" description="" startContent={icons.logout} href="/api/auth/signout">
                <Link href="/api/auth/signout" className="text-[#ffffff] transition-colors">
                  Logga ut
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default SigninButton;

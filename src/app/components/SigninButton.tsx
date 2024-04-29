"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FaUsers, FaChevronDown, FaChartBar } from "react-icons/fa6";
import { Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, User, Avatar } from "@nextui-org/react";
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
          {/* <span className="relative flex h-3 w-3 justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA5709]"></span>
          </span> */}

          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    radius: "lg",
                    color: "primary",
                    src: session.user?.image!
                  }}
                  className="transition-transform"
                  description=""
                  name={icons.chevron}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat" className="text-[#ffffff] bg-primary-blue">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">
                    {session.user.firstName} {session.user.lastName}
                  </p>
                  <p className="font-bold">{session.user.role}</p>
                </DropdownItem>
                <DropdownItem key="users" color="success" startContent={icons.profile} href="/profile">
                  <Link href="/profile" className="text-[#ffffff] transition-colors">
                    Profil
                  </Link>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  description=""
                  startContent={icons.logout}
                  href="/api/auth/signout"
                >
                  <Link href="/api/auth/signout" className="text-[#ffffff] transition-colors">
                    Logga ut
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
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
          {/* <span className="relative flex h-3 w-3 justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffffff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#EA5709]"></span>
          </span> */}

          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    radius: "lg",
                    color: "primary",
                    src: session.user?.image!
                  }}
                  className="transition-transform animate-drip-expand"
                  description=""
                  name={icons.chevron}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Inloggad som</p>
                  <p className="font-bold">{session.user.role}</p>
                </DropdownItem>
                <DropdownItem key="users" color="success" startContent={icons.profile} href="/profile">
                  <Link href="/profile">Profil</Link>
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  description=""
                  startContent={icons.logout}
                  href="/api/auth/signout"
                >
                  <Link href="/api/auth/signout" className="text-[#ffffff] transition-colors">
                    Logga ut
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default SigninButton;

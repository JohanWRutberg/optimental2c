"use client";
import { useEffect, useState } from "react";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import SigninButton from "./SigninButton";

const Appbar = () => {
  /* const [color, setColor] = useState("transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor("transparent");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []); */

  return (
    <Navbar className=" fixed left-0 top-0 h-20 bg-transparent" style={{ backgroundColor: `${color}` }}>
      <div className=" w-full z-5 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-0 text-white">
          <NavbarContent justify="start">
            <NavbarItem>
              <Logo />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="center">
            <NavbarItem>
              <MenuBar />
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden md:flex justify-end">
              <SigninButton />
            </NavbarItem>
          </NavbarContent>
        </div>
      </div>
    </Navbar>
  );
};

export default Appbar;

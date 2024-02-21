import React from "react";
import AboutHero from "../components/about/AboutHero";
import Mid from "../components/about/Mid";
import { BsChevronDoubleDown } from "react-icons/bs";
import DArrowDown from "../components/DArrowDown";

const page = () => {
  return (
    <>
      <div className="bg-style bg-center bg-cover h-4/6 md:h-screen flex justify-center flex-col items-center   ">
        <AboutHero />
        <DArrowDown />
      </div>

      <div className="flex items-center justify-center bg-secondary-blue">
        <Mid />
      </div>
    </>
  );
};

export default page;

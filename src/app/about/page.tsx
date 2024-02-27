import React from "react";
import AboutHero from "../components/about/AboutHero";
import Mid from "../components/about/Mid";
import { BsChevronDoubleDown } from "react-icons/bs";
import DArrowDown from "../components/DArrowDown";

const page = () => {
  return (
    <>
      <div className="bg-style bg-center bg-cover h-4/6 md:h-screen flex justify-center flex-col items-center -mt-[20%] md:-mt-[7%] ">
        <AboutHero />
        {/* <DArrowDown /> */}
      </div>

      <div className="flex items-center justify-center bg-[url('/img/wave10.svg')]  bg-cover min-[1393px]:bg-contain bg-center p-4 -mt-[7%]">
        <Mid />
      </div>
      <div className="h-screen w-auto bg-primary-blue"></div>
    </>
  );
};

export default page;

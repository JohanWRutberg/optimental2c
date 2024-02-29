import React from "react";
import AboutHero from "../components/about/AboutHero";
import Mid from "../components/about/Mid";
import { BsChevronDoubleDown } from "react-icons/bs";
import DArrowDown from "../components/DArrowDown";
import Reveal from "../components/Reveal";

const page = () => {
  return (
    <>
      <Reveal>
        <div className="bg-style bg-center bg-cover md:h-screen flex justify-center flex-col items-center -mt-[20%] md:-mt-[7%] ">
          <AboutHero />
        </div>

        <div className="hidden md:flex items-center  justify-center bg-primary-blue md:-mt-[10%] pb-[200px]">
          <DArrowDown />
        </div>
        <Reveal>
          <div className="flex items-center justify-center bg-[url('/img/cbg.svg')]  bg-cover  bg-center p-4 ">
            <Mid />
          </div>
        </Reveal>
        <div className="h-screen w-auto bg-primary-blue"></div>
      </Reveal>
    </>
  );
};

export default page;
// -mt-[20%] md:-mt-[7%]

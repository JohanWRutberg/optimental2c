import React from "react";
import AboutHero from "../components/about/AboutHero";
import Mid from "../components/about/Mid";

const page = () => {
  return (
    <>
      <div className="bg-style bg-center bg-cover h-4/6 md:h-svh flex justify-center flex-col items-center -mb-40">
        <AboutHero />
      </div>
      <Mid />
    </>
  );
};

export default page;

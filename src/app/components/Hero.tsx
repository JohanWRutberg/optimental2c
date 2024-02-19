"use client";

import React from "react";

interface HeroProps {
  message?: string;
}

const Hero: React.FC<HeroProps> = ({ message }) => {
  return (
    <div className="absolute flex items-center h-screen w-screen left-24 bottom-20">
      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 right-0 bottom-0" /> */}
      <div className="p-5 text-white mt-[-10rem] w-[450px]">
        <q className="py-5 text-2xl italic font-bold text-bold">{message}</q>
      </div>
    </div>
  );
};

export default Hero;

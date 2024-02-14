"use client";

import React from "react";

interface HeroProps {
  heading?: string;
  message?: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">En knappjävel</button>
      </div>
    </div>
  );
};

export default Hero;

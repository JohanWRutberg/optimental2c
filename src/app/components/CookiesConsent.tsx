"use client";
import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
import Image from "next/image";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookies = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000] ">
      <div className="fixed bottom-0 left-0 flex flex-col lg:flex-row items-center lg:justify-between  px-4 py-8 bg-secondary-blue text-white w-screen  gap-10">
        {" "}
        <Image
          alt="logo"
          src={"/img/logo001.png"}
          height={200}
          width={200}
          className="lg:ml-16"
        />
        <div className="flex flex-col gap-10 md:p-10 items-center">
          <span className="text-dark text-2xl text-center md:mr-16 md:ml-16 mr-4 ml-4">
            Vi använder cookies för att förbättra din upplevelse på vår
            webbplats. Genom att fortsätta använda vår webbplats godkänner du
            användningen av cookies i enlighet med vår cookie-policy.{" "}
            <Link href={"#"} className="font-bold font">
              Läs Mer här.
            </Link>
          </span>
          <button
            className="bg-primary-blue py-2 px-10 rounded text-white w-[300px] text-2xl hover:scale-110 focus:scale-95 hover:text-primary-orange transition-transform-colors-opacity"
            onClick={() => acceptCookies()}
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;

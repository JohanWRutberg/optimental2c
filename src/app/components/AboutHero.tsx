"use client";
import React from "react";
import Profile from "./Profile";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div className="max-w-screen-2xl flex justify-center items-center gap-10 p-10 flex-col-reverse mt-40 lg:mt-0 lg:flex-row">
      <div>
        <motion.div
          className="text-lg uppercase font-semibold  tracking-[4px] text-primary-orange"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Psykolog
        </motion.div>
        <motion.div
          className="h-[2px] mb-8 bg-gray-200 border-0 dark:bg-primary-orange max-w-[680px]"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        ></motion.div>
        <motion.h1
          className="text-6xl xl:text-[72px] xl:leading-[80px] mb-4 tracking-[-2px] font-bold text-white"
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Marcus Engström
        </motion.h1>
        <motion.p
          className="subtitle max-w-[690px] mx-auto xl:mx-0 text-gray-400"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
        <div className="flex my-5 gap-4">
          <button className="button-34">Kontakta mig</button>
          <button className="button-35">Kontakta mig</button>
        </div>
      </div>
      <div id="right" className="">
        <Profile />
      </div>
    </div>
  );
};

export default AboutHero;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="p-6 ">
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <Image
          width={450}
          height={400}
          src={"/img/hero/shape-1.svg"}
          alt="bg-orange"
        />

        <div className="absolute top-3">
          <Image
            width={450}
            height={400}
            src={"/img/about/shape-light.svg"}
            alt="bg-light"
          />
        </div>
        <div className="absolute top-3">
          <Image
            width={450}
            height={400}
            src={"/img/about/profile_about.png"}
            alt="mackan"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;

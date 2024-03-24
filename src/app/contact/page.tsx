"use client";

import React from "react";
import Form from "../components/Form";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <div className="bg-style bg-center bg-cover  flex flex-col items-center  md:pt-60 py-52 md:h-full">
        <div>
          <title>Contact</title>
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-white text-5xl ">
              {" "}
              <span className="text-9xl text-primary-orange bg-primary-blue">K</span>
              ontakta mig
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="h-full"
        >
          <Form />
        </motion.div>
      </div>
    </>
  );
};

export default page;

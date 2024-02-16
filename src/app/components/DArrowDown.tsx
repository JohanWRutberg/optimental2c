"use client";
import React from "react";
import { motion } from "framer-motion";
import { BsChevronDoubleDown } from "react-icons/bs";

const DArrowDown = () => {
  return (
    <motion.div
      className="mt-10 lg:mt-24 animate-bounce"
      initial={{ opacity: 0, y: 600 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.6 }}
    >
      <button>
        {" "}
        <BsChevronDoubleDown size={70} />
      </button>
    </motion.div>
  );
};

export default DArrowDown;

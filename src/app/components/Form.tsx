"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserFormWithAddress } from "../models/User";
import { BasicUserSchema } from "../models/User";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

import ReCaptcha from "./reCaptcha";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<UserFormWithAddress>({
    resolver: zodResolver(BasicUserSchema),
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<UserFormWithAddress> = (data) => {
    // sendEmail(data);
    console.log("data sent", data);
    setIsSubmitted(true);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(false);

  useEffect(() => {
    if (token.length) {
      setSubmitEnabled(true);
    }
  }, [token]);
  const handleToken = (token: string) => {
    setToken(token);
  };

  return (
    <div className="h-full">
      {isSubmitted ? (
        <div className="p-6 md:p-0 flex flex-col items-center h-full">
          <div className="">
            <h1 className="text-white text-3xl p-56">Ditt medelande är skickat</h1>
          </div>
          <div>
            <button className="button-34">Hem</button>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <motion.h1
            className="text-white p-6 text-center text-2xl mb-32 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Var god fyll i formuläret nedan så återkommer jag så snabbt jag kan
          </motion.h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-w-3xl gap-2 backdrop-blur-sm bg-black/10  p-3 rounded-md"
          >
            <div className="xl:flex gap-10  justify-center items-center">
              <div className=" flex flex-col xl:inline-block xl:w-full mb-2 xl:mb-0">
                <label htmlFor="firstName" className="text-xl text-white">
                  Förnamn
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName")}
                  className="form-style mt-1"
                  placeholder="Kjell"
                />
                <div className="flex">
                  {errors.firstName && (
                    <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start  flex ">
                      {errors.firstName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="inline-block w-full">
                <label htmlFor="lastName" className="text-xl text-white">
                  Efternamn
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName")}
                  className="form-style mt-1"
                  placeholder="Kriminell"
                />
                <div className="flex">
                  {errors.lastName && (
                    <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start ">
                      {errors.lastName?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <label htmlFor="email" className="text-xl text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="form-style -mt-1"
              placeholder="kenta.kofot@hotmail.com"
            />
            {errors.email && (
              <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start -mt-4">{errors.email?.message}</p>
            )}

            <label htmlFor="city" className="text-xl text-white">
              Stad
            </label>
            <input id="city" type="text" {...register("city")} className="form-style -mt-1" placeholder="Stockholm" />
            {errors?.city && (
              <div className="relaive">
                <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start  -mt-4">
                  {errors.city?.message}
                </p>
              </div>
            )}

            <label htmlFor="message" className="text-xl text-white">
              Meddelande
            </label>
            <textarea
              id="message"
              {...register("message")}
              className="form-style h-[150px] resize-none -mt-1"
              placeholder="Berätta vad ni behöver hjälp med..."
            />
            {errors?.message && (
              <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start -mt-4">
                {errors.message?.message}
              </p>
            )}
            <div className="flex item-center">
              <ReCaptcha siteKey={"6LeLz2wpAAAAAMPCOuyYkAk7HZ2ykeARljDDGir0"} callback={handleToken} />
            </div>
            <button
              disabled={!isValid}
              type="submit"
              className={`${
                isValid && submitEnabled ? "bg-[#ea580c] hover:scale-110  " : "bg-gray-500 cursor-not-allowed"
              }group text-2xl  text-color-[#002444] p-2 rounded-md w-auto mt-5 flex items-center justify-center gap-5 transition-all  focus:scale-105`}
            >
              Skicka Meddelande
              <FaPaperPlane className="text-md opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

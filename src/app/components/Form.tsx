"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserFormWithAddress } from "../models/User";
import { BasicUserSchema } from "../models/User";

import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";

import ReCaptcha from "./reCaptcha";
import { useEffect, useState } from "react";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormWithAddress>({
    resolver: zodResolver(BasicUserSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserFormWithAddress> = (data) => {
    sendEmail(data);
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
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:max-w-3xl gap-2 mx-auto max-w-xs"
      >
        <div className="md:flex gap-10">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="firstName" className="text-xl text-white">
              Förnamn
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className="form-style"
              placeholder="Kjell"
            />
            {errors.firstName && (
              <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start -mt-4 ">
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-xl text-white">
              Efternamn
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className="form-style"
              placeholder="Kriminell"
            />
            {errors.lastName && (
              <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start -mt-4">
                {errors.lastName?.message}
              </p>
            )}
          </div>
        </div>

        <label htmlFor="email" className="text-xl text-white">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="form-style"
          placeholder="kenta.kofot@hotmail.com"
        />
        {errors.email && (
          <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start -mt-4">
            {errors.email?.message}
          </p>
        )}

        <label htmlFor="city" className="text-xl text-white">
          Stad
        </label>
        <input
          id="city"
          type="text"
          {...register("city")}
          className="form-style"
          placeholder="Stockholm"
        />
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
          className="form-style h-[150px] resize-none"
          placeholder="Berätta vad ni behöver hjälp med..."
        />
        {errors?.message && (
          <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start -mt-4">
            {errors.message?.message}
          </p>
        )}
        <div className="flex item-center">
          <ReCaptcha
            siteKey={"6LeLz2wpAAAAAMPCOuyYkAk7HZ2ykeARljDDGir0"}
            callback={handleToken}
          />
        </div>
        <button
          disabled={!submitEnabled}
          type="submit"
          className={`${
            submitEnabled
              ? "bg-[#ea580c] hover:scale-110 active:scale-105"
              : "bg-gray-500 cursor-not-allowed"
          }group text-2xl  text-color-[#002444] p-2 rounded-md w-auto mt-5 flex items-center justify-center gap-5   transition-all`}
        >
          Skicka Meddelande
          <FaPaperPlane className="text-md opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </div>
  );
}

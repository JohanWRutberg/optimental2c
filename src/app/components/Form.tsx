"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UserFormWithAddress } from "../models/User";
import { BasicUserSchema } from "../models/User";
import { Toaster, toast } from "sonner";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Form() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserFormWithAddress>({
    resolver: zodResolver(BasicUserSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<UserFormWithAddress> = (data) => {
    console.log(data);
    toast.success("Meddelandet har skickats", {
      duration: 5000,
      icon: <MagnifyingGlassIcon />,
    });
  };

  return (
    <div className="relative">
      <Toaster richColors className="absolute top-0 " />;
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
              className="rounded-md text-xl p-2"
              placeholder="Kjell"
            />
            {errors.firstName && (
              <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start">
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
              className="rounded-md text-xl p-2 bg-blue-800"
              placeholder="Kriminell"
            />
            {errors.lastName && (
              <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start">
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
          className="rounded-md text-xl p-2"
          placeholder="kenta.kofot@hotmail.com"
        />
        {errors.email && (
          <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start">
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
          className="rounded-md text-xl p-2"
          placeholder="Stockholm"
        />
        {errors?.city && (
          <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start">
            {errors.city?.message}
          </p>
        )}

        <label htmlFor="message" className="text-xl text-white">
          Meddelande
        </label>
        <textarea
          id="message"
          {...register("message")}
          className="rounded-md text-xl p-2 h-[150px] resize-none"
          placeholder="Berätta vad ni behöver hjälp med..."
        />
        {errors?.message && (
          <p className="bg-[#002444] text-[#ea580c] italic  rounded-md self-start">
            {errors.message?.message}
          </p>
        )}

        <button
          type="submit"
          className="text-2xl bg-[#ea580c] text-color-[#002444] p-2 rounded-md w-auto mt-5"
        >
          Skicka Meddelande
        </button>
      </form>
    </div>
  );
}

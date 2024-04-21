"use client";
import { forgotPassword } from "@/lib/actions/authActions";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email("Vänligen ange en giltig e-post adress!")
});

type InputType = z.infer<typeof FormSchema>;

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema)
  });

  const submitRequest: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await forgotPassword(data.email);
      if (result) toast.success("Länk för att återställa lösenord har skickats till din registrerade e-post adress.");
      reset();
    } catch (e) {
      console.log(e);
      toast.error("Någonting gick fel. E-post adressen finns inte registrerad!");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-[url('/img/bg.jpg')] bg-cover h-screen bg-center justify-center">
      <form
        className="flex flex-col gap-2 border w-[80%] border-orange-600 rounded-md shadow place-self-center bg-white bg-opacity-5 backdrop-blur-xl backdrop-filter"
        onSubmit={handleSubmit(submitRequest)}
      >
        <div className="bg-gradient-to-b from-white to-slate-200 dark:from-slate-700 dark:to-slate-900 p-2 text-center">
          Ange din E-post adress för återställning av lösenord.
        </div>
        <Input
          color="primary"
          label="E-post"
          className="p-2"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
          errorMessage={errors.email?.message}
        />
        <Button isLoading={isSubmitting} type="submit" disabled={isSubmitting} color="primary" variant="solid">
          {isSubmitting ? "Vänligen vänta..." : "Skicka"}
        </Button>
      </form>
      <Image
        src={"/forgotPass.png"}
        alt="Glömt Lösenord"
        width={500}
        height={500}
        className="col-span-1 place-self-center"
      />
    </div>
  );
};

export default ForgotPasswordPage;

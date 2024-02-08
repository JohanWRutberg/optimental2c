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
  email: z.string().email("Vänligen ange en giltig e-postadress!")
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
      if (result) toast.success("Länk för att Återställa lösenord har skickats till din registrerade e-postadress.");
      reset();
    } catch (e) {
      console.log(e);
      toast.error("Någonting gick fel... Ingen e-postadress hittades!");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-[5%] max-w-[1240px] m-auto">
      <form
        className="flex flex-col gap-2 p-4 border w-[80%] border-orange-600 m-2 rounded-md shadow place-self-center"
        onSubmit={handleSubmit(submitRequest)}
      >
        <div className="text-center p-2">Ange din E-postadress för återställning av lösenord.</div>
        <Input
          label="E-post"
          {...register("email")}
          startContent={<EnvelopeIcon className="w-4" />}
          errorMessage={errors.email?.message}
        />
        <Button isLoading={isSubmitting} type="submit" disabled={isSubmitting} color="primary">
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

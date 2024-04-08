"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import NextAuthProviders from "./NextAuthProviders";

interface Props {
  callbackUrl?: string;
}

const FormSchema = z.object({
  email: z.string().email("Ange en korrekt e-post adress"),
  password: z.string({
    required_error: "Ange ditt lösenord"
  })
});

type InputType = z.infer<typeof FormSchema>;

const SignInForm = (props: Props) => {
  const router = useRouter();
  const [visiblePass, setVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema)
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password
    });
    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }
    toast.success("Välkommen till Optimental.");
    router.push(props.callbackUrl ? props.callbackUrl : "/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 border border-orange-500 rounded-md shadow overflow-hidden w-[50%]"
    >
      <div className="bg-gradient-to-b from-white to-slate-200 dark:from-slate-700 dark:to-slate-900 p-2 text-center">
        Logga in
      </div>
      <div className="p-2 flex flex-col gap-2">
        <Input color="primary" label="E-post" {...register("email")} errorMessage={errors.email?.message} />
        <Input
          color="primary"
          label="Lösenord"
          {...register("password")}
          type={visiblePass ? "text" : "password"}
          errorMessage={errors.password?.message}
          endContent={
            <button type="button" onClick={() => setVisiblePass((prev) => !prev)}>
              {visiblePass ? <EyeSlashIcon className="w-4" /> : <EyeIcon className="w-4" />}
            </button>
          }
        />
        <div className="flex items-center justify-center gap-2">
          <Button color="primary" variant="ghost" type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
            {isSubmitting ? "Loggar in..." : "Logga in"}
          </Button>
          <Button color="primary" variant="ghost" as={Link} href="/auth/signup">
            Registrera
          </Button>
        </div>
      </div>
      <NextAuthProviders />
    </form>
  );
};

export default SignInForm;

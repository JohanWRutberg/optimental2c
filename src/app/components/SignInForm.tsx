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

interface Props {
  callbackUrl?: string;
}

const FormSchema = z.object({
  email: z.string().email("Ange en korrekt epost adress"),
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
      toast.error("Fel lösen lixom! Försök igen.");
      return;
    }
    toast.success("Välkommen till Optimental. Din hjärnskrynklare i natten!");
    router.push(props.callbackUrl ? props.callbackUrl : "/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 border rounded-md shadow overflow-hidden w-[50%]"
    >
      <div className="bg-gradient-to-b from-white to-slate-200 dark:from-slate-700 dark:to-slate-900 p-2 text-center">
        Logga in formulär
      </div>
      <div className="p-2 flex flex-col gap-2">
        <Input label="Epost" {...register("email")} errorMessage={errors.email?.message} />
        <Input
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
          <Button color="primary" type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
            {isSubmitting ? "Loggar in..." : "Logga in"}
          </Button>
          <Button as={Link} href="/auth/signup">
            Registrera
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;

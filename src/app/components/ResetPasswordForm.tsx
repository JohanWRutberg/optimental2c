"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { passwordStrength } from "check-password-strength";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import PasswordStrength from "./PasswordStrength";
import { resetPassword } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

interface Props {
  jwtUserId: string;
}

const FormSchema = z
  .object({
    password: z
      .string()
      .min(6, "Lösenord måste innehålla minst 6 tecken!")
      .max(52, "Lösenord får inte innehålla mer än 52 tecken!"),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte!",
    path: ["confirmPassword"]
  });

type InputType = z.infer<typeof FormSchema>;

const ResetPasswordForm = ({ jwtUserId }: Props) => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [passStrength, setPassStrength] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema)
  });
  useEffect(() => {
    const passwordValue = watch("password");
    setPassStrength(passwordStrength(passwordValue).id);

    // Cleanup function
    return () => {
      setPassStrength(0); // Reset password strength on component unmount
    };
  }, [watch().password]);

  const resetPass: SubmitHandler<InputType> = async (data) => {
    try {
      const result = await resetPassword(jwtUserId, data.password);
      if (result === "success") toast.success("Ditt lösenord har nu ändrats!");
      reset();
    } catch (err) {
      toast.error("Någonting gick fel!");
      console.error(err);
    }
  };
  return (
    <form
      color="primary"
      onSubmit={handleSubmit(resetPass)}
      className="flex flex-col gap-2 p-5 border border-orange-500 rounded-md shadow overflow-hidden w-[50%] mt-[20vh]"
    >
      <div className="text-center p-2">Återställ ditt lösenord</div>
      <Input
        color="primary"
        type={visiblePass ? "text" : "password"}
        label="Lösenord"
        {...register("password")}
        errorMessage={errors.password?.message}
        endContent={
          <button type="button" onClick={() => setVisiblePass((prev) => !prev)}>
            {visiblePass ? <EyeSlashIcon className="w-4" /> : <EyeIcon className="w-4" />}
          </button>
        }
      />
      <PasswordStrength passStrength={passStrength} />
      <Input
        color="primary"
        type={visiblePass ? "text" : "password"}
        label="Repetera lösenord"
        {...register("confirmPassword")}
        errorMessage={errors.confirmPassword?.message}
      />
      <div className="flex justify-center">
        <Button isLoading={isSubmitting} type="submit" disabled={isSubmitting} color="primary">
          {isSubmitting ? "Vänligen vänta..." : "Skicka"}
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;

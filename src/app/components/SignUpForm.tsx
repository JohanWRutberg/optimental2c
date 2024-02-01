"use client";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, KeyIcon, PhoneIcon, UserIcon } from "@heroicons/react/20/solid";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import validator from "validator";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "./PasswordStrength";
import { registerUser } from "@/lib/actions/authActions";
import { toast } from "react-toastify";

const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Förnamnet måste innehålla minst 2 bokstäver")
      .max(45, "Förnamnet får innehålla max 45 bokstäver")
      .regex(new RegExp("^[a-zA-Z]+$"), "Inga specialtecken är tillåtna!"),
    lastName: z
      .string()
      .min(2, "Efternamnet måste innehålla minst 2 bokstäver")
      .max(45, "Efternamnet får innehålla max 45 bokstäver")
      .regex(new RegExp("^[a-zA-Z]+$"), "Inga specialtecken är tillåtna!"),
    email: z.string().email("Ange en giltig epost adress!"),
    phone: z.string().refine(validator.isMobilePhone, "Ange ett giltigt telefonnummer!"),
    password: z
      .string()
      .min(6, "Lösenordet måste innehålla minst 6 tecken")
      .max(50, "Lösenordet måste innehålla färre än 50 tecken"),
    confirmPassword: z
      .string()
      .min(6, "Lösenordet måste innehålla minst 6 tecken")
      .max(50, "Lösenordet måste innehålla färre än 50 tecken"),
    accepted: z.literal(true, {
      errorMap: () => ({
        message: "Acceptera alla villkor"
      })
    })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte varandra!",
    path: ["confirmPassword"]
  });

type InputType = z.infer<typeof FormSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors }
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema)
  });
  const [passStrength, setPassStrength] = useState(0);
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  useEffect(() => {
    const password = watch().password;
    if (password) {
      setPassStrength(passwordStrength(password).id);
    }
  }, [watch().password]);

  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);

  const saveUser: SubmitHandler<InputType> = async (data) => {
    const { accepted, confirmPassword, ...user } = data;
    try {
      const result = await registerUser(user);
      toast.success("Registrering av användare lyckades");
    } catch (error) {
      toast.error("Någonting gick fel!");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="grid grid-cols-2 gap-3 p-2 place-self-stretch shadow border rounded-md"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName} /* !! Omvandlar till Boolean */
        {...register("firstName")}
        label="Förnamn"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.lastName?.message}
        isInvalid={!!errors.lastName}
        {...register("lastName")}
        label="Efternamn"
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register("email")}
        className="col-span-2"
        label="Epost"
        startContent={<EnvelopeIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.phone?.message}
        isInvalid={!!errors.phone}
        {...register("phone")}
        className="col-span-2"
        label="Telefon"
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        errorMessage={errors?.password?.message}
        isInvalid={!!errors?.password}
        {...register("password")}
        className="col-span-2"
        label="Lösenord"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon className="w-4 curs cursor-pointer" onClick={toggleVisiblePass} />
          ) : (
            <EyeIcon className="w-4 curs cursor-pointer" onClick={toggleVisiblePass} />
          )
        }
      />

      <PasswordStrength passStrength={passStrength} />
      <Input
        errorMessage={errors.confirmPassword?.message}
        isInvalid={!!errors.confirmPassword}
        {...register("confirmPassword")}
        className="col-span-2"
        label="Repetera Lösenord"
        type={isVisiblePass ? "text" : "password"}
        startContent={<KeyIcon className="w-4" />}
      />
      <Controller
        control={control}
        name="accepted"
        render={({ field }) => (
          <Checkbox onChange={field.onChange} onBlur={field.onBlur} className="col-span-2">
            Jag godkänner <Link href="/terms">Villkoren</Link>
          </Checkbox>
        )}
      />
      {!!errors.accepted && <p className="text-red-500">{errors.accepted.message}</p>}
      <div className="flex justify-center col-span-2">
        <Button className="w-48" color="primary" type="submit">
          Registrera
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;

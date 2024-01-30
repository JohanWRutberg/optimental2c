import { z } from "zod";

export const BasicUserSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "Förnamnet måste vara minst två bokstäver" }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "Efternamn måste vara minst två bokstäver" }),
  email: z.string().email().trim().toLowerCase(),
  city: z
    .string()
    .trim()
    .min(2, { message: "Stadens måste vara minst två bokstäver" }),
  // phone: z
  //   .string()
  //   .min(10, { message: "Phone numbers are a minimum of 10 digits" }),
  // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
  // .length(10, { message: "Ten numbers are required" })
  // .transform(val => `${val.slice(0, 3)}-${val.slice(3, 6)}-${val.slice(6)}`),
  message: z.string().min(1, { message: "Var god fyll i erat meddelande här" }),
});

export type UserFormWithAddress = z.infer<typeof BasicUserSchema>;

export interface UserProps {
  userData: (data: z.infer<typeof BasicUserSchema>) => void;
}

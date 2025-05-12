import { z } from "zod";

export const registerValidate = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(255, { message: "Username must be at most 255 characters" }),

  firstname: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(3, { message: "First name must be at least 3 characters" })
    .max(255, { message: "First name must be at most 255 characters" }),

  lastname: z
    .string({ required_error: "Last name is required" })
    .trim()
    .min(3, { message: "Last name must be at least 3 characters" })
    .max(255, { message: "Last name must be at most 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(12, { message: "Password must be at most 12 characters" }),
});

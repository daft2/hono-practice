import { z } from "zod";

export const createUserBodySchema = z.object({
  name: z.string().min(2, "Must be 2 or more characters.."),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be consist of minimum 8 characters")
    .max(52, "Maximum characters for password is 52"),
});

const additionalField = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type User = z.infer<typeof createUserBodySchema> &
  z.infer<typeof additionalField>;

export const Users: User[] = [];

"use server";

import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { createUser, getuserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existUser = await getuserByEmail(email);

  if (existUser) {
    return { error: "User already exists" };
  }

  await createUser(email, hashedPassword, name);

  return { success: "Email Send!" };
};

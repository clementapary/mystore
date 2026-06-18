"use server";
import { prisma } from "@/lib/prisma";
import { UserSchema } from "@/lib/validationSchema";
import { redirect } from "next/navigation";

// type FormState = {
//   message: string;
//   errors?: "";
// };

export async function getUser(userId: string) {
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: parseInt(userId) },
  });
  return user;
}

export async function createUser(prevState: unknown, formData: FormData) {
  const row = Object.fromEntries(formData);
  const result = UserSchema.safeParse(row);
  if (!result.success) {
    return {
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }
  // console.log(result.data);
  await prisma.user.create({ data: result.data });
  redirect("/users");
  // return { message: "Success!" };
}
export async function updateUser(prevState: unknown, formData: FormData) {
  const row = Object.fromEntries(formData);
  const result = UserSchema.safeParse(row);
  if (!result.success) {
    return {
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
    };
  }
  // console.log(result.data);
  await prisma.user.update({
    where: { id: parseInt(formData.get("id") as string) },
    data: result.data,
  });
  redirect("/users");
  // return { message: "Success!" };
}

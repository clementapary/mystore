"use server";

import { prisma } from "@/lib/prisma";
import { ProductSchema } from "@/lib/validationSchema";

export async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}
export async function createProduct(formState: unknown, formData: FormData) {
  const result = await ProductSchema.safeParseAsync(
    Object.fromEntries(formData),
  );
  if (!result.success) {
    return {
      message: "Validation failed",
      errors: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  //   const product = await prisma.product.create({
  //     data: result,
  //   });
  //   return product;

  return { message: "Product created successfully", success: true };
}

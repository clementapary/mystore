import { z } from "zod";

export const UserSchema = z.object({
  id: z.coerce.number(),
  name: z
    .string()
    .min(3, { message: "You must enter a user name (3-100 characters)" }),
  email: z.string().email({ message: "You must enter a valid email address" }),
});

export type UserSchemaT = z.infer<typeof UserSchema>;

export const ProductSchema = z.object({
  id: z.coerce.string().optional(),
  name: z
    .string()
    .min(3, { message: "You must enter a product name (3-100 characters)" }),
  price: z.coerce
    .number()
    .min(1, { message: "Price must be a positive number" }),
});

export type ProductSchemaT = z.infer<typeof ProductSchema>;

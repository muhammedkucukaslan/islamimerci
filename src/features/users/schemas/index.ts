import { z } from "zod";

export const userResponseSchema = z.array(
  z.object({
    id: z.string(),
    full_name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
  })
);

export const userDetailResponseSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  full_name: z.string(),
  is_email_verified: z.boolean(),
  phone: z.string().min(10).max(15),
  donations: z.array(
    z.object({
      id: z.string(),
      amount: z.number().min(0),
      created_at: z.string(),
      currency: z.enum(["TRY", "USD", "EUR"]),
      title: z.string(),
    })
  ),
});

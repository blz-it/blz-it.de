import { z } from "zod";

export const addressSchema = z.object({
  street: z.string().min(1).max(255),
  zip: z.coerce.number().int().min(10000).max(99999),
  city: z.string().min(1).max(255),
});

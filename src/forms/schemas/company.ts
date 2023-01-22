import { z } from "zod";
import { addressSchema } from "./address";

export const companySchema = z.object({
  name: z.string().min(1).max(255),
  address: addressSchema,
});

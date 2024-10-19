import { z } from "zod";
import { addressSchema } from "./address";
import { companySchema } from "./company";
import { fixOptional } from "./utils";

export const participantSchema = z.object({
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
  birthday: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
  email: z.string().email(),
  occupation: z.enum(["APPRENTICE", "PUPIL", "STUDENT", "EMPLOYEE", "OTHER"]),
  company: z.preprocess(fixOptional, companySchema.optional()),
  state: z.enum([
    "BADEN_WUERTTEMBERG",
    "BAVARIA",
    "BERLIN",
    "BRANDENBURG",
    "BREMEN",
    "HAMBURG",
    "HESSE",
    "MECKLENBURG_WESTERN_POMERANIA",
    "LOWER_SAXONY",
    "NORTH_RHINE_WESTPHALIA",
    "RHINELAND_PALATINATE",
    "SAARLAND",
    "SAXONY",
    "SAXONY_ANHALT",
    "SCHLESWIG_HOLSTEIN",
    "THURINGIA",
  ]),
  address: z.preprocess(fixOptional, addressSchema.optional()),
  phone: z.preprocess(fixOptional, z.string().min(1).max(255).optional()),
});

// Extract type for typing form
export type Participant = z.infer<typeof participantSchema>;

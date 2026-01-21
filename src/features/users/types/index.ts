import { z } from "zod";
import { userResponseSchema } from "../schemas";

export type User = z.infer<typeof userResponseSchema.element>;

import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  intent: z.enum(["Business inquiry", "Recruitment", "Agency collaboration", "General message"]),
  budget: z.string().optional(),
  message: z.string().min(20, "Share a little context so Samuel can respond well.")
});

export type ContactPayload = z.infer<typeof contactSchema>;

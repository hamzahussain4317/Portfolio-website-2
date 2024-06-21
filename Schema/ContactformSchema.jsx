import { z } from 'zod';
export const ContactformSchema = z.object({
    name: z.string().min(2).max(20).transform((value) => value.trim()),
    email: z.string().email().transform((value) => value.trim()),
    phoneNumber: z.string().regex(/^\d{11}$/).transform((value) => value.trim()),
    subject: z.string().min(2).transform((value) => value.trim()),
    message: z.string().min(5).transform((value) => value.trim()),
});
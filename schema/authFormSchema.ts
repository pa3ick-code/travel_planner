import { z } from 'zod';

export const FormSchema = z.object({
  email: z.string().email('Please enter a valid email').includes('@').min(6),
  password: z.string().min(6, {message:  'Your password should be minimum of 6'}),
  fullname: z.string().min(3),
  phone: z.string().min(10),
});

export type FormField = z.infer<typeof FormSchema>;
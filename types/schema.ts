import { pattern } from '@/constants/patterns';
import { z } from 'zod'

const email = z.string().min(4).email('Enter a valid email').transform(str => str.toLowerCase());

const firstName = z.string().min(1, 'First name is required').trim().regex(pattern.name, 'Invalid first name').max(50, 'First name is too long');

const lastName = z.string().min(1, 'First name is required').trim().regex(pattern.name, 'Invalid first name').max(50, 'First name is too long');

const password = z.string().min(8).regex(pattern.password, 'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character');

const confirmPassword = z.string().min(8, "Confirm password must be at least 8 characters long");

export const registerSchema = z.object({
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
    confirmPassword: confirmPassword
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"], // Attach error to confirmPassword field
});

export const loginSchema = z.object({
    email: email,
    password: password
})

export type signInSchema = z.infer< typeof loginSchema>
export type signUpSchema = z.infer< typeof registerSchema>
import { z } from "zod";

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." })
        .max(50, { message: "Name must not exceed 50 characters." }),
    email: z
        .string()
        .email({ message: "Please enter a valid email address." }),
    phone: z
        .string()
        .optional()
        .refine((val) => !val || /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(val), {
            message: "Please enter a valid phone number.",
        }),
    subject: z
        .string()
        .min(5, { message: "Subject must be at least 5 characters." })
        .max(100, { message: "Subject must not exceed 100 characters." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." })
        .max(1000, { message: "Message must not exceed 1000 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

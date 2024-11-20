import {z} from 'zod';

export const todoSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string(),
    isCompleted: z.boolean().default(false),
})

export type Todo = z.infer<typeof todoSchema>
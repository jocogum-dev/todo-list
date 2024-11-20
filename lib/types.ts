import {z} from 'zod';

export const todoSchema = z.object({
    title: z.string(),
    description: z.string(),
    isCompleted: z.boolean()
})

export type Todo = z.infer<typeof todoSchema>
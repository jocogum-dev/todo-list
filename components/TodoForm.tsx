'use client'

import { Todo } from "@/lib/types"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"


export default function TodoForm() {
    const {register, handleSubmit} = useForm<Todo>()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const onSubmitTodo: SubmitHandler<Todo> = async (data: Todo) => {
        setIsSubmitting(true);
        try{
            const response = await fetch('api/todos', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
        } finally {
            setIsSubmitting(false);
            mutate("api/todos");
        }
    }
    
    if(isSubmitting){
        return <div>Submitting...</div>
    }

    return (
        <form className="border py-2" onSubmit={handleSubmit(onSubmitTodo)}>
            <div className="flex align-middlen- gap-5">
                <label>Title</label>
                <input className="border rounded-xl" {...register('title')} />
            </div>
            <div className="flex align-middlen- gap-5">
                <label>Description</label>
                <input className="border rounded-xl" type="text" {...register('description')} />
            </div>
            <div className="flex align-middlen- gap-5">
                <input type="checkbox" {...register('isCompleted')} />
                <label>Completed</label>
            </div>
            <button className="border rounded-xl px-4 py-2">Submit</button>
        </form>
    )
}

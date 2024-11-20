'use client'

import { Todo } from "@/lib/types"
import { SubmitHandler, useForm } from "react-hook-form"

export default function TodoForm() {
    const {register, handleSubmit} = useForm<Todo>()
    const onSubmitTodo: SubmitHandler<Todo> = (data) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmitTodo)}>
            <div>
                <label>Title</label>
                <input {...register('title')} />
            </div>
            <div>
                <label>Description</label>
                <input type="text" {...register('description')} />
            </div>
            <div>
                <input type="checkbox" {...register('isCompleted')} />
                <label>Completed</label>
            </div>
        <button>Submit</button>
        </form>
    )
}

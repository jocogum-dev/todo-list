'use client'

import { Todo } from "@/lib/types"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { mutate } from "swr"


export default function TodoForm() {
    const {register, handleSubmit, reset, formState: {isSubmitSuccessful, isSubmitting}} = useForm<Todo>()
    const onSubmitTodo: SubmitHandler<Todo> = async (data) => {
        const response = await fetch('api/todos', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        reset();
        mutate("api/todos");
    }, [isSubmitSuccessful]);

    return (
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-slate-200">

            <form onSubmit={handleSubmit(onSubmitTodo)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="title" className="sr-only">Title</label>
                    <div className="relative">
                        <input
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Title"
                        {...register('title')} 
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="sr-only">Descrption</label>
                    <div className="relative">
                        <input
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter description"
                        {...register('description')} 
                        />
                    </div>
                </div>

                <fieldset>
                    <legend className="sr-only">Checkboxes</legend>
                    <div className="space-y-2">
                        <label htmlFor="Option1" className="flex cursor-pointer items-start gap-4">
                            <div className="flex items-center">
                                &#8203;
                                <input {...register('isCompleted')} type="checkbox" className="size-4 rounded border-gray-300" id="isCompleted" />
                            </div>
                            <div>
                                <p className="text-sm shadow-sm"> Completed </p>
                            </div>
                        </label>
                    </div>
                </fieldset>


                <div className="flex items-center justify-between">
                    <button
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

'use client'
import CreateTodo from "@/components/CreateTodo"
import { Todo } from "@prisma/client"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function Home() {
  const { data: todos, error, isLoading } = useSWR<Todo[]>('/api/todos', fetcher)
  const todoList = todos || [];
  return (
    <div>
      <ul className="mx-4 my-2">
        {todoList.map((todo: Todo)=>(
          <li key={todo.id}>
            {todo.title} - {todo.description} - {new Date(todo.createdAt).toLocaleString()}
          </li>
        ))}
      </ul>
      <CreateTodo />
    </div>
    
    
  )
}

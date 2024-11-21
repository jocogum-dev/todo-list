"use client";

import TodoForm from "@/components/TodoForm";
import TodoTable from "@/components/TodoTable";
import { Todo } from "@prisma/client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const {
    data: todos,
    error,
    isLoading
  } = useSWR<Todo[]>("/api/todos", fetcher);

  const todoList = todos || [];

  if(error){
    return <div>Something went wrong...</div>
  }
  if(isLoading){
    return <div>Loading...</div>
  }
  
  return (
    <div className="container mx-auto">
          <div className="overflow-x-auto mb-5">
            <TodoTable todoList={todoList} />
          </div>

      <TodoForm />
    </div>
  );
}

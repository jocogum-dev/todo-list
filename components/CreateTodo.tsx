// import { Todo } from "@prisma/client"
import { Todo } from "@/lib/types";
import { useState } from "react";


export default function CreateTodo() {
  const [data, useData] = useState("");

  const handleClick = async (data: Todo) => {
    const response = await fetch('api/todos', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })

    const responseData = await response.json();

    useData(responseData);
  }

  const testData: Todo = {
    title: "test",
    description: "test description123",
    isCompleted: false,
  }

  console.log(data);
  return (
    <button onClick={()=>handleClick(testData)} className="border rounded-lg px-4 py-2 mx-4">CreateTodo</button>
  )
}

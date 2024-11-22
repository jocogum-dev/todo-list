import { Todo } from "@prisma/client";
import DeleteTodoButton from "./DeleteTodoButton";
import EditTodoButton from "./EditTodoButton";

export default function TodoTable({ todoList } : {todoList: Todo[]}) {
    return (

    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
            <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Title
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Description
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Is Completed
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date Updated
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Actions
                </th>
            </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
            {todoList.map((todo: Todo) => (
            <tr key={todo.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {todo.title}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {todo.description}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {todo.isCompleted ? "complete" : "not completed"}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {new Date(todo.updatedAt).toDateString()}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                        <EditTodoButton />
                        <DeleteTodoButton todoId={todo.id} />
                    </span>
                </td>
            </tr>
            ))}
        </tbody>
    </table>

    );
}

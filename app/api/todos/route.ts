import prisma from "@/lib/db";

export async function GET(request:Request) {
    const todos = await prisma.todo.findMany();
    return Response.json(todos);
}
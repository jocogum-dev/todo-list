import prisma from "@/lib/db";
import { Todo } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
}

export async function POST(request: NextRequest){
    const body: Todo = await request.json();

    const newTodo = await prisma.todo.create({
        data: {
            title: body.title,
            description: body.description,
            isCompleted: body.isCompleted,
        },
    })
    return NextResponse.json({message: `POST - ${newTodo}`}, {status: 200});
}

export async function DELETE(request: NextRequest) {
    try{
        const id: number = Number(request.nextUrl.searchParams.get('id'));
        if (!id) {
            return NextResponse.json({ message: 'Todo ID is required' }, { status: 400 });
        }
        const deletedTodo = await prisma.todo.delete({
            where: { id },
        });

        return NextResponse.json({message: `DELETE ${deletedTodo}`}, {status: 200});
    }
    catch(error) {
        return NextResponse.json({message: "Something went wrong"}, {status: 404});
    }
}
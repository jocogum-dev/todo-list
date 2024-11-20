import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    const todos = await prisma.todo.findMany();
    return NextResponse.json(todos);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    // const resultData = await JSON.parse(body)

    const newTodo = await prisma.todo.create({
        data: {
            id: body.id,
            title: body.title,
            description: body.description,
            isCompleted: body.isCompleted,
            createdAt: body.createdAt,
            updatedAt: body.updatedAt
        },
    })
    return NextResponse.json({message: `POST - ${newTodo}`}, {status: 200});
}

export async function DELETE(request: NextRequest) {
    return NextResponse.json({message: "DELETE"}, {status: 200});
}
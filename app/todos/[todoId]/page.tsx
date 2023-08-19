import { notFound } from "next/navigation";
import React from "react";
import { Todo } from "../typings";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );
  const todo: Todo = await res.json();
  return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId);

  if (!todo.id) {
    return notFound();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{todo.title}</CardTitle>
        <CardDescription>#{todo.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      </CardContent>
      <CardFooter className="text-xs">
        <p>Created by {todo.userId}</p>
      </CardFooter>
    </Card>
  );
}

export default TodoPage;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return todos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}

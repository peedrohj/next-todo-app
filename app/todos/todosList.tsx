import Link from "next/link";
import React from "react";
import { Todo } from "./typings";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map((todo) => (
        <Link key={todo.id} href={`/todos/${todo.id}`}>
          <div className="m-2 p-2 flex flex-row items-center bg-indigo-100 rounded">
            <div className="basis-3/4">
              <h1 className="text-sm text-start">TODO #{todo.id}</h1>
              <h1 className="text-sm text-start">
                {todo.completed ? "Yes" : "No"}
              </h1>
            </div>
            <div className="flex w-full justify-end basis-1/4">
              <Avatar>
                <AvatarImage src="" alt="avatar" />
                <AvatarFallback>U{todo.userId}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default TodosList;

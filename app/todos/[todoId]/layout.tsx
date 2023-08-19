import React from "react";
import TodosList from "../todosList";

export default function RootLayoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex m-5">
      <div>
        <TodosList />
      </div>

      <div className="flex-1">{children}</div>
    </main>
  );
}

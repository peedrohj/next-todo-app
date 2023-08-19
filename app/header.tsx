import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="p-5 bg-slate-800">
      <div className="flex flex-row items-center">
        <div className="font-bold basis-3/4 ">
          <h1>Header</h1>
        </div>
        <div className="basis-1/4 flex space-x-4">
          <Link href="/" className="font-bold bg-indigo-500 p-2 rounded">
            Home
          </Link>
          <Link href="/todos" className="font-bold bg-indigo-500 p-2 rounded">
            Todo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

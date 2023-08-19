import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Header() {
  return (
    <header className="p-5 h-18 drop-shadow border-b ">
      <div className="flex flex-row items-center h-full">
        <div className="font-bold basis-3/4 ">
          <h1>Header</h1>
        </div>
        <div className="basis-1/4 flex space-x-4 items-center h-full">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Separator className="h-12" orientation="vertical" />
          <Link href="/todos">
            <Button>Todo</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

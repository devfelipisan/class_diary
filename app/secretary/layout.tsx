"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function NestedLayout(props: Props) {
  const router = useRouter();
  return (
    <React.Fragment>
      <div className="flex p-1 m-2">
        <button
          className="bg-indigo-100 rounded-md px-4 py-1 hover:bg-gradient-to-t from-indigo-200"
          type="button"
          onClick={() => router.push("/")}
        >
          Dashboard
        </button>
      </div>
      <div className="flex first-letter:flex-row h-full-screen m-5 justify-center items-center">
        <div className="p-20 flex rounded-md border-b-4">{props.children}</div>
      </div>
    </React.Fragment>
  );
}

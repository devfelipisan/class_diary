"use client";

import React from "react";

interface Props {
  id: any;
}

async function deleteStudent(userId: string) {
  await fetch(`${process.env.API_STUDENTS}/api/students`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: userId }),
  });
}

export default function BtnDelete(props: Props) {
  const handleOnClick = async (e: any) => {
    console.log(`Deletar ${props.id}`);
    await deleteStudent(props.id || "");
  };

  return (
    <button id="btn_delete" name="btn_delete" onClick={handleOnClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
  );
}
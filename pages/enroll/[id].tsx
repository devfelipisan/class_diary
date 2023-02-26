import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function HandlerPage() {
  const route = useRouter();

  const { id } = route.query;

  return (
    <>
      <span>{id}</span>
      <h1 className="text-3xl font-bold underline">
        <Link href={"/"}>Dashboard</Link>
      </h1>
    </>
  );
}

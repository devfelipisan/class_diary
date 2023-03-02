"use client";

import React, { Fragment, useState } from "react";

export default function ClientComponent() {
  const [name, setName] = useState<string>();
  const [birthday, setBirthday] = useState<string>();

  const handleNameChange = (e: any) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleBirthdayChange = (e: any) => {
    console.log(new Date(e.target.value).toISOString());
    setBirthday(new Date(e.target.value).toISOString());
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, birthday }),
      redirect: "follow",
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <Fragment>
      <div className="flex-col m-3 max-h-50%">
        <div className="flex justify-center">
          <h1>Matrícula de aluno</h1>
        </div>
        <form onSubmit={(e: any) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">Nome: </label>
            <input
              name="name"
              required
              id="name"
              type="text"
              className="border-spacing-5 m-2 rounded-md p-2 border-b-2 hover:bg-gradient-to-t from-indigo-50"
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label>Data de aniversário: </label>
            <input
              type="date"
              className="border-spacing-5 m-2 p-2 rounded-md border-b-2"
              onChange={handleBirthdayChange}
            />
          </div>
          <button
            className="bg-indigo-100 rounded-md px-4 py-1 hover:bg-gradient-to-t from-indigo-200"
            type="submit"
            onClick={(e: any) => handleSubmit(e)}
          >
            Matricular
          </button>
        </form>
      </div>
    </Fragment>
  );
}

"use client";

import { Fragment } from "react";

interface dataBody {
  name: string;
  birthday: Date;
}

export function Page() {
  const handleSubmit = (e: any) => {
    console.log(e);
  };
  return (
    <Fragment>
      <div className="flex-col">
        <div className="flex justify-center">
          <h1>Matrícula de aluno</h1>
        </div>
        <form action="/api/students" method="post">
          <div>
            <label htmlFor="name">Nome: </label>
            <input
              name="name"
              required
              id="name"
              type="text"
              className="border-spacing-5 m-2 rounded-md p-2 border-b-2 hover:bg-gradient-to-t from-indigo-50"
            />
          </div>
          <div>
            <label>Data de aniversário: </label>
            <input
              type="date"
              className="border-spacing-5 m-2 p-2 rounded-md border-b-2"
            />
          </div>
          <button
            className="bg-indigo-100 rounded-md px-4 py-1 hover:bg-gradient-to-t from-indigo-200"
            type="button"
            onClick={(e) => handleSubmit(e)}
          >
            Matricular
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default Page;

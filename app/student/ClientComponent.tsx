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
      <div>
        <form className="flex justify-center mt-10">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h1 className="text-center mb-4">Novo aluno</h1>
            <div className="flex-col space-x-2 p-2 bg-white rounded-md">
              <input
                //value={description}
                //onChange={(e) => setDescription(e.currentTarget.value)}
                name="name"
                required
                onChange={handleNameChange}
                type="text"
                placeholder="Nome Completo"
                className="w-full outline-none"
              />

              <div>
                <input
                  type="date"
                  className="px-2 py-1 mx-2 my-1 rounded-md"
                  onChange={handleBirthdayChange}
                />
                <button
                  className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold"
                  onClick={(e) => handleSubmit(e)}
                >
                  Matricular
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

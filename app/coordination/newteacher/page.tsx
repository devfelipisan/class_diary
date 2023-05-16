"use client";
import Modal from "@/app/components/modal";
import SlideOver from "@/app/components/slideOver";
import TeachersListBox from "@/app/components/teacherListBox";
import TeachersList from "@/hooks/teacherList";
import { Prisma } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [openSlideOver, setOpenSlideOver] = useState(false);

  const [listTeachers, setListTeachers] = useState<
    Array<
      Prisma.teachersGetPayload<{
        select: { id: true; name: true; email: true };
      }>
    >
  >([]);

  function handleSubmit(e: React.BaseSyntheticEvent) {
    fetch("/api/teachers/create", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target["name"].value,
        email: e.target["email"].value,
      }),
    });
    setOpen(true);
  }

  const load = useCallback(async () => {
    setListTeachers(await TeachersList());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        title={"Cadastrado com Sucesso"}
        type="INFO"
      />
      <SlideOver
        open={openSlideOver}
        setOpen={setOpenSlideOver}
        title="Listagem das salas criadas"
      >
        <TeachersListBox data={listTeachers} />
      </SlideOver>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Cadastre aqui um novo professor
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome do professor
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
              />
            </div>
          </div>

          <div className="sm:grid-cols-1">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              E-mail
            </label>
            <div className="relative mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="family-email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cadastrar novo professor
            </button>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => setOpenSlideOver(true)}
            >
              Listar professores cadastrados
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

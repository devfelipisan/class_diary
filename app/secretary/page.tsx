"use client";
import ClassList from "@/hooks/classList";
import StudentsList, { StudentsCreate } from "@/hooks/studentsList";
import { Prisma } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "../components/modal";
import SelectClassList from "../components/selectClassList";
import SlideOver from "../components/slideOver";
import StudentsListBox from "../components/studentsListBox";

export default function Page() {
  const [openModal, setOpenModal] = useState(false);
  const [openSlideOver, setOpenSlideOver] = useState(false);

  const [onSelected, setOnSelected] = useState<
    Prisma.graduating_classGetPayload<{
      select: { id: true; school_series: true; teacher_id: true };
    }>
  >({ id: "", school_series: "00", teacher_id: "" });

  const [listClass, setListClass] = useState<
    Array<
      Prisma.graduating_classGetPayload<{
        select: { id: true; school_series: true; teacher_id: true };
      }>
    >
  >();

  const [listStudents, setListStudents] = useState<
    Array<
      Prisma.studentsGetPayload<{
        select: {
          id: true;
          name: true;
        };
      }>
    >
  >();

  const load = useCallback(async () => {
    setListClass(await ClassList());
    setListStudents(await StudentsList());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function handleSubmit(e: React.BaseSyntheticEvent) {
    StudentsCreate(
      JSON.stringify({
        name: e.target["name"].value,
        birthday: new Date(e.target["birthday"].value).toISOString(),
        graduating_class_id: onSelected.id,
      })
    );
    setOpenModal(true);
  }

  return (
    <>
      <SlideOver
        open={openSlideOver}
        setOpen={setOpenSlideOver}
        title="Listagem dos alunos matriculados"
      >
        <StudentsListBox data={listStudents} />
      </SlideOver>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={"Cadastrado com Sucesso"}
      />
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome completo
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2.5">
            <label
              htmlFor="birthday"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Data de nascimento
            </label>
            <div className="relative mt-2.5">
              <input
                type="date"
                name="birthday"
                id="birthday"
                autoComplete="birthday"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2.5">
            <label
              htmlFor="graduating-class"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Escolha a turma?
            </label>
            <div className="relative mt-2.5">
              <SelectClassList data={listClass} onSelected={setOnSelected} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Matricular estudante
            </button>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => setOpenSlideOver(true)}
            >
              Listar alunos cadastrados
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

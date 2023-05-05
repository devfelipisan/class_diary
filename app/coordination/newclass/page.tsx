"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Prisma } from "@prisma/client";
import SelectMenu from "@/app/components/selectTeachersList";
import Modal from "@/app/components/modal";
import ClassList from "@/hooks/classList";
import TeachersList from "@/hooks/teacherList";
import SlideOver from "@/app/components/slideOver";
import ClassListBox from "@/app/components/classListBox";

export default function Page() {
  const [classData, setClassData] = useState<
    Array<
      Prisma.graduating_classGetPayload<{
        select: {
          id: true;
          teacher_id: true;
          teacher: {
            select: {
              name: true;
              email: true;
            };
          };
          school_series: true;
          school_year: true;
        };
      }>
    >
  >();

  const [listTeachers, setListTeachers] = useState<
    Array<
      Prisma.teachersGetPayload<{
        select: { id: true; name: true; email: true };
      }>
    >
  >();

  const [onSelected, setOnSelected] = useState<
    Prisma.teachersGetPayload<{
      select: {
        id: true;
        name: true;
        email: true;
      };
    }>
  >({ id: "00", name: "Selecione...", email: "" });

  const [openModal, setOpenModal] = useState(false);
  const [openSlideOver, setOpenSlideOver] = useState(false);

  const load = useCallback(async () => {
    setClassData(await ClassList());
    setListTeachers(await TeachersList());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function handleSubmit(e: React.BaseSyntheticEvent) {
    fetch("/api/graduating_class", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        school_year: parseInt(e.target["school_year"].value),
        school_series: e.target["school_series"].value,
        teacher_id: onSelected.id,
      }),
    });

    setOpenModal(true);
  }

  return (
    <>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={"Cadastrado com Sucesso"}
      />
      <SlideOver
        open={openSlideOver}
        setOpen={setOpenSlideOver}
        title="Listagem das salas criadas"
      >
        <ClassListBox data={classData} />
      </SlideOver>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Cadastre aqui uma nova turma
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Selecione o professor titular
            </label>
            <SelectMenu data={listTeachers} onSelected={setOnSelected} />
          </div>

          <div className="sm:col-span-2 mt-2.5">
            <label
              htmlFor="school_year"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Ano escolar
            </label>
            <div className=" sm:col-span-1 mt-2.5">
              <input
                type="number"
                name="school_year"
                id="school_year"
                autoComplete="school_year"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2.5">
            <label
              htmlFor="school_series"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Série escolar
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="school_series"
                id="school_series"
                autoComplete="school_series"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              Criar
            </button>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              onClick={() => setOpenSlideOver(true)}
            >
              Listar turmas criadas
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

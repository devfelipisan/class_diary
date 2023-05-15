"use client";
import ClassList from "@/hooks/classList";
import PresenseList, { PostPresences } from "@/hooks/presenceRequests";
import StudentsList from "@/hooks/studentsList";
import { Prisma } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import Modal from "../components/modal";
import SelectStudentsList from "../components/selectStudentsList";

export default function Page() {
  const [birthday, setBirthday] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [percentualPresence, setPercentualPresence] = useState<string>("0.00%");
  const [classSeries, SetClassSeries] = useState("...");
  const [openModal, setOpenModal] = useState(false);
  const [listStudents, setListStudents] = useState<
    Array<
      Prisma.studentsGetPayload<{
        select: {
          id: true;
          name: true;
          graduating_class_id: true;
        };
      }>
    >
  >();

  const [onSelected, setOnSelected] = useState<
    Prisma.studentsGetPayload<{
      select: {
        id: true;
        name: true;
        birthday: true;
        graduating_class_id: true;
      };
    }>
  >({
    id: "00",
    name: "Selecione...",
    birthday: new Date(),
    graduating_class_id: "",
  });

  async function FindClass(id: string) {
    const classFounded: Prisma.graduating_classGetPayload<{
      select: { school_series: true };
    }> = await ClassList(id).then((result) => result);
    return SetClassSeries(classFounded.school_series);
  }

  async function FindPresences(id: string) {
    const presencesFounded: Array<
      Prisma.presencesGetPayload<{
        select: { id: true; created: true };
      }>
    > = await PresenseList(id).then((result) => result);
    setPercentualPresence(
      `${((presencesFounded.length / 30) * 100).toFixed(2)}%`
    );
  }

  useEffect(() => {
    if (onSelected.birthday) {
      setBirthday(new Date(onSelected.birthday).toISOString().slice(0, 10));
    }

    if (onSelected.graduating_class_id) {
      FindClass(onSelected.graduating_class_id);
    }

    FindPresences(onSelected.id);
  }, [onSelected]);

  const load = useCallback(async () => {
    setListStudents(await StudentsList());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function handleSubmit(e: React.SyntheticEvent) {
    PostPresences(
      JSON.stringify({
        student_id: onSelected.id,
        presence: true,
      })
    );
    setOpenModal(true);
  }

  return (
    <>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={"Cadastrado com Sucesso"}
        type="INFO"
      />
      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              Nome completo
            </label>
            <SelectStudentsList
              data={listStudents}
              onSelected={setOnSelected}
            />
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
                disabled
                value={birthday}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 bg-gray-200 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2.5">
            <label
              htmlFor="graduating-class"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Turma
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="graduating-class"
                id="graduating-class"
                autoComplete="graduating-class"
                value={classSeries}
                disabled
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-2.5">
            <label
              htmlFor="graduating-class"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Percentual de presença
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="graduating-class"
                id="graduating-class"
                autoComplete="graduating-class"
                value={percentualPresence}
                disabled
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset bg-gray-200 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrar presença
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

"use client";
import ClassList from "@/hooks/classList";
import TeachersList from "@/hooks/teacherList";
import { Prisma } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import AvailableStudentsListBox from "../components/availableStudentsListBox";
import SelectTeachersList from "../components/selectTeachersList";
import SlideOver from "../components/slideOver";

export default function Page() {
  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [classList, setClassList] = useState<
    Array<
      Prisma.graduating_classGetPayload<{
        select: {
          id: true;
          school_year: true;
          school_series: true;
          teacher_id: true;
          teacher: { select: { name: true } };
          student_id: { select: { id: true; name: true; birthday: true } };
        };
      }>
    >
  >();
  const [teacherList, setTeacherList] = useState<
    Array<
      Prisma.teachersGetPayload<{
        select: { id: true; name: true; email: true };
      }>
    >
  >();
  const [onSelectedTeacher, setOnSelectedTeacher] = useState<
    Prisma.teachersGetPayload<{
      select: {
        id: true;
        name: true;
      };
    }>
  >({ id: "00", name: "Selecione..." });

  const [onSelected, setOnSelected] = useState<
    Array<
      Prisma.graduating_classGetPayload<{
        select: {
          id: true;
          school_year: true;
          school_series: true;
          teacher_id: true;
          teacher: { select: { name: true } };
          student_id: { select: { id: true; name: true; birthday: true } };
        };
      }>
    >
  >();

  function handleSelect(id: string) {
    const filterItem = classList?.filter(
      (
        item: Prisma.graduating_classGetPayload<{
          select: {
            id: true;
            school_year: true;
            school_series: true;
            teacher: { select: { name: true } };
            student_id: { select: { id: true; name: true; birthday: true } };
          };
        }>
      ) => item.id == id
    );
    setOnSelected(filterItem);
    setOpenSlideOver(true);
  }

  const RenderConditional = (
    item: Prisma.graduating_classGetPayload<{
      select: {
        id: true;
        school_year: true;
        school_series: true;
        teacher_id: true;
        teacher: { select: { name: true } };
        student_id: { select: { name: true; birthday: true } };
      };
    }>
  ) => {
    return (
      <div className="my-2 rounded-md border-1 shadow-md" key={item.id}>
        <div className="block rounded-md border-1 mx-10 py-2 shadow-sm">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label
                htmlFor="classSerie"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Turma/Série
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="classSerie"
                  id="classSerie"
                  autoComplete="classSerie"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={item.school_series}
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="classYear"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Ano
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="classYear"
                  id="classYear"
                  autoComplete="classYear"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={item.school_year}
                  disabled
                />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <label
                htmlFor="observation"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Resumo
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="observation"
                  id="observation"
                  autoComplete="observation"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div className="sm:col-span-1 relative mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-green-600 px-1 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={() => {
                  handleSelect(item.id);
                }}
              >
                Exibir alunos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const load = useCallback(async () => {
    setClassList(await ClassList());
    setTeacherList(await TeachersList());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <SlideOver
        open={openSlideOver}
        setOpen={setOpenSlideOver}
        title="Listagem dos alunos matriculados"
      >
        <AvailableStudentsListBox data={onSelected} />
      </SlideOver>
      <div className="w-full">
        <label className="flex text-sm font-semibold leading-6 text-gray-900">
          Nome completo
        </label>
        <SelectTeachersList
          data={teacherList}
          onSelected={setOnSelectedTeacher}
        />
      </div>
      {classList?.map(
        (
          item: Prisma.graduating_classGetPayload<{
            select: {
              id: true;
              school_year: true;
              school_series: true;
              teacher_id: true;
              teacher: { select: { name: true } };
              student_id: { select: { name: true; birthday: true } };
            };
          }>
        ) => {
          if (item.teacher_id == onSelectedTeacher.id) {
            return RenderConditional(item);
          }
        }
      )}
    </>
  );
}

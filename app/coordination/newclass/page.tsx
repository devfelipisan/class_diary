"use client";
import React, { useState } from "react";
import { Prisma } from "@prisma/client";
import { GetTeachers } from "@/services/teachers";
import SelectMenu from "@/app/components/selectBox";

export default function Page() {
  const [data, setData] =
    useState<Prisma.teachersGetPayload<{ select: { id: true; name: true } }>>();
  const [onSelected, setOnSelected] = useState<
    Prisma.teachersGetPayload<{
      select: { id: true; name: true; email: true };
    }>
  >({ id: "00", name: "Selecione...", email: "" });

  async function DataList() {
    const data: Prisma.teachersGetPayload<{
      select: { id: true; name: true };
    }> = await GetTeachers("/api/teachers").then((item) => {
      return item;
    });
    let result = data;
    setData(result);
    return result;
  }

  DataList();

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Cadastre aqui uma nova turma
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Selecione o professor titular
            </label>
            <SelectMenu data={data} onSelected={setOnSelected} />
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
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Criar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

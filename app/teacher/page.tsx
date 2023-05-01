"use client";
import TeachersList from "@/hooks/teacherList";
import { Prisma } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<
    Prisma.teachersGetPayload<{ select: { id: true; name: true } }> | any
  >();

  const load = useCallback(async () => {
    setData(await TeachersList());
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  function renderConditional(item: any) {
    return (
      <div className="my-2 rounded-md border-1 shadow-md" key={item.id}>
        <div className="block rounded-md border-1 mx-10 py-2 shadow-sm">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Nome completo
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={item.name}
                  disabled
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Turma
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="graduating-class"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Avaliação
              </label>
              <div className="relative mt-2.5">
                <input
                  type="text"
                  name="graduating-class"
                  id="graduating-class"
                  autoComplete="graduating-class"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-1 relative mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-indigo-600 px-1 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <React.Fragment>
      {data?.map((item: any) => renderConditional(item))}
    </React.Fragment>
  );
}

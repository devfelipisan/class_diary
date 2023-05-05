import { Prisma } from "@prisma/client";
import React, { BaseSyntheticEvent } from "react";

interface listBoxProps {
  data:
    | Array<
        Prisma.graduating_classGetPayload<{
          select: {
            id: true;
            school_year: true;
            school_series: true;
            teacher: { select: { name: true } };
            student_id: { select: { id: true; name: true; birthday: true } };
          };
        }>
      >
    | undefined;
}

export default function AvailableStudentsListBox(props: listBoxProps) {
  function handleSubmit(e: BaseSyntheticEvent) {
    console.log(e.currentTarget);
  }

  return (
    <div className="max-h-50 overflow-auto scroll-smooth rounded-lg mt-6 sm:py-18">
      <ul role="list" className="divide-y divide-gray-100">
        {props?.data?.[0].student_id.map((person) => (
          <li
            id="id"
            key={person.id}
            className="flex justify-between gap-x-6 py-5 px-8 cursor-pointer rounded-lg transition duration-500 hover:bg-green-100 hover:text-green-500 focus:bg-green-100 focus:text-green-500 focus:ring-0 dark:hover:bg-green-600 dark:hover:text-green-200 dark:focus:bg-green-600 dark:focus:text-green-200"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="mt-1 text-xs leading-5 text-gray-500">Aluno</p>
                <p
                  id="name"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {person.name}
                </p>

                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="coefficient"
                      className="block text-sm leading-6 text-gray-900"
                    >
                      Nota:
                    </label>
                    <div className="relative mt-2.5">
                      <input
                        type="text"
                        name="coefficient"
                        id="coefficient"
                        autoComplete="coefficient"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-1 relative mt-10">
                    <button
                      type="button"
                      className="block w-full rounded-md bg-green-600 px-1 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                      onClick={(e: BaseSyntheticEvent) => handleSubmit(e)}
                    >
                      Gravar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Prisma } from "@prisma/client";
import React from "react";

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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

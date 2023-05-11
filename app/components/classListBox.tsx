interface teacherProps {
  name: string;
  email: string;
}

interface itemListBoxProps {
  id: string;
  school_series: string;
  teacher_id: string | null;
  teacher: teacherProps | null;
  school_year: number;
}

interface listBoxProps {
  data: Array<itemListBoxProps> | undefined;
}

export default function ClassListBox(props: listBoxProps) {
  return (
    <div className="max-h-50 overflow-auto scroll-smooth rounded-lg mt-6 sm:py-18">
      <ul role="list" className="divide-y divide-gray-100">
        {props?.data?.map((person) => (
          <li
            onClick={() => console.log(person.teacher_id)}
            key={person.id}
            className="flex justify-between gap-x-6 py-5 px-8 cursor-pointer rounded-lg transition duration-500 hover:bg-green-100 hover:text-green-500 focus:bg-green-100 focus:text-green-500 focus:ring-0 dark:hover:bg-green-600 dark:hover:text-green-200 dark:focus:bg-green-600 dark:focus:text-green-200"
          >
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Professor titular
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.teacher?.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.teacher?.email}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Detalhes da turma
              </p>
              <p className="text-sm leading-6 text-gray-900">
                {`Ano escolar ${person.school_year}`}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                {`Turma ${person.school_series}`}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
  // const [personId, SetPersonId] = useState<string>("");
  // const [value, setValue] = useState<string>("");
  // const [openModal, SetOpenModal] = useState<boolean>(false);

  // function handleSubmit(e: BaseSyntheticEvent) {
  //   e.preventDefault();

  //   // fetch("/api/coefficients/request", {
  //   //   method: "post",
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({
  //   //     "student_id":personId,
  //   //     "teacher_id":"77bb3075-d8bf-4052-b797-8aec6a11f9e6",
  //   //     "competence_id":"GE",
  //   //     "grade":value
  //   //   }),
  //   // });

  //   console.group(personId);
  //   console.log(e.target["coefficient"].value);
  //   console.groupEnd();
  // }

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
            {/* <Modal
              open={openModal}
              setOpen={SetOpenModal}
              title="Avaliação do Aluno"
            >
              <form onSubmit={handleSubmit}>
                <ul role="list" className="divide-y divide-gray-100">
                  <li
                    id="id"
                    key={person.id}
                    className="flex justify-between gap-x-6 py-5 px-8 cursor-pointer rounded-lg transition duration-500 hover:bg-green-100 hover:text-green-500 focus:bg-green-100 focus:text-green-500 focus:ring-0 dark:hover:bg-green-600 dark:hover:text-green-200 dark:focus:bg-green-600 dark:focus:text-green-200"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-2 text-center">
                        <span>{`Disciplina: ${"Lingua portuguesa"}`}</span>
                      </div>
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="coefficient"
                          className="block text-sm leading-6 text-gray-900"
                        >
                          nota:
                        </label>
                        <div className="relative mt-2.5">
                          <input
                            type="text"
                            name="coefficient"
                            id="coefficient"
                            autoComplete="coefficient"
                            max={100}
                            onChange={(e) => {
                              setValue(
                                Number(e.currentTarget.value).toFixed(2)
                              );
                              console.log(
                                Number(e.currentTarget.value).toFixed(2)
                              );
                              SetOpenModal(true);
                            }}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-1 relative mt-10">
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-green-600 px-1 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                          onClick={() => SetPersonId(person.id)}
                        >
                          Gravar
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </form>
            </Modal> */}
            {/* <div className="sm:col-span-1 relative mt-10">
              <button
                type="button"
                className="block w-full rounded-md bg-green-600 px-1 py-1 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={() => SetOpenModal(true)}
              >
                Iniciar avaliação
              </button>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { TeacherDelete } from "@/hooks/teacherList";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Prisma } from "@prisma/client";
import { useState } from "react";
import Modal from "./modal";

interface listBoxProps {
  data:
    | Prisma.teachersGetPayload<{
        select: {
          id: true;
          name: true;
          email: true;
        };
      }>[];
}

export default function TeachersListBox(props: listBoxProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [person, setPerson] = useState<
    Prisma.teachersGetPayload<{
      select: {
        id: true;
        name: true;
        email: true;
      };
    }>
  >();

  function HandleStudentsDelete() {
    if (person) {
      TeacherDelete(person.id);
    }
    setOpenModal(false);
  }

  function HandleConfirmationTeacherDelete(
    person: Prisma.teachersGetPayload<{
      select: {
        id: true;
        name: true;
        email: true;
      };
    }>
  ) {
    setOpenModal(true);
    setPerson(person);
  }

  return (
    <>
      <Modal open={openModal} setOpen={setOpenModal} title="" type="ALERT">
        <div className="w-full justify-center">
          <form onSubmit={HandleStudentsDelete}>
            <div className="text-center py-3 text-lg leading-8 font-semibold text-red-500">
              <p>
                Tem certeza que deseja excluir
                <span className=" px-1 text-lg font-bold text-red-800">
                  {person?.name}
                </span>
              </p>
            </div>
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-red-100 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-50 sm:mt-0 sm:w-auto"
              >
                Sim
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div className="max-h-50 overflow-auto scroll-smooth rounded-lg mt-6 sm:py-18">
        <ul role="list" className="divide-y divide-gray-100">
          {props?.data?.map((person) => (
            <li
              key={person.id}
              className="flex justify-between gap-x-6 py-5 px-8 cursor-pointer rounded-lg transition duration-500 hover:bg-green-100 hover:text-green-500 focus:bg-green-100 focus:text-green-500 focus:ring-0 dark:hover:bg-green-600 dark:hover:text-green-200 dark:focus:bg-green-600 dark:focus:text-green-200"
            >
              <div>
                <div className="flex gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="mt-1 text-xs leading-5 text-gray-500">Nome</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Contato
                    </p>
                  </div>
                </div>
                <div className="sm:flex sm:flex-col flex-auto sm:items-start">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.name}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.email}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="block rounded-md bg-red-600 px-1.5 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                onClick={() => HandleConfirmationTeacherDelete(person)}
              >
                <XMarkIcon className="block h-3 w-3" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

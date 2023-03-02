import { getStudent, StudentDto } from "@/pages/getStudents";
import React from "react";
import ClientComponent from "./ClientComponent";

export default async function Page() {
  const studentList: Array<StudentDto> = await getStudent();
  return (
    <div className="h-screen">
      <ClientComponent />
      <div className="h-30% flex-col my-10 p-2 overflow-y-auto">
        {studentList?.map((item: StudentDto) => (
          <div key={item.id} className="flex justify-center ">
            <div className=" relative justify-center mt-6 ">
              <div className="absolute flex top-0 right-0 p-3 space-x-1">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
              <p className="bg-gray-200 px-12 py-8 rounded-lg w-80">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

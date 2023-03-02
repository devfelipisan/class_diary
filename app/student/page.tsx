import { getStudent, StudentDto } from "@/pages/getStudents";
import React from "react";
import ClientComponent from "./ClientComponent";

export default async function Page() {
  const studentList: Array<StudentDto> = await getStudent();
  return (
    <div>
      <ClientComponent />
      <div className="h-30% flex-col my-10 p-2 overflow-y-auto ">
        <ul className="bg-gray-50">
          {studentList.map((student: StudentDto) => (
            <li
              className="flex-auto border-collapse m-1 p-1 hover:bg-blue-200"
              key={student.id}
            >
              {student.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

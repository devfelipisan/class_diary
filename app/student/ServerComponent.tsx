import { StudentDto, getStudent } from "@/pages/getStudents";
import React, { Fragment, ReactComponentElement } from "react";
import "./page.module.css";

const ServerComponent = async (): Promise<ReactComponentElement<any>> => {
  const studentList: Array<StudentDto> = await getStudent();
  return (
    <Fragment>
      <div className="h-30% flex-col my-10 p-2 overflow-y-auto ">
        <ul className="bg-gray-50">
          {studentList &&
            studentList.map((student: StudentDto) => (
              <li
                className="flex-auto border-collapse m-1 p-1 hover:bg-blue-200"
                key={student.id}
              >
                {student.name}
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ServerComponent;

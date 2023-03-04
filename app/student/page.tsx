import React from "react";
import BtnDelete from "../components/btn_delete";
import BtnEdit from "../components/btn_edit";
import FormEnroll from "./form_enroll";

export interface StudentDto {
  id: string;
  name: string;
  created?: string;
}

async function getStudent(): Promise<Array<StudentDto>> {
  const response = await fetch(`${process.env.API_STUDENTS}/api/students`);
  const data = await response.json();
  return data;
}

export default async function Page() {
  const studentList: Array<StudentDto> = await getStudent();
  return (
    <div className="h-screen">
      <FormEnroll />
      <div className="h-30% flex-col my-10 p-2 overflow-x-hidden overflow-y-auto">
        {studentList?.map((item: StudentDto) => (
          <div key={item?.id} className="flex justify-center ">
            <div className=" relative justify-center mt-6 ">
              <div className="absolute flex top-0 right-0 p-3 space-x-1">
                <BtnEdit id={item?.id} />
                <BtnDelete id={item?.id} />
              </div>
              <p className="bg-gray-200 px-12 py-8 rounded-lg w-80">
                {item?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

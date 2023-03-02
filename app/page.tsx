import Link from "next/link";

interface menuDto {
  id: string;
  name: string;
}

const menu: Array<menuDto> = [
  { id: "student", name: "Estudante" },
  { id: "teacher", name: "Professor" },
  { id: "secretary", name: "Secretaria" },
  { id: "coordination", name: "Coordenação" },
];

export default function Home() {
  return (
    <div className="flex flex-row space-x-4 mt-6 px-5">
      {menu.map((item: menuDto) => (
        <Link
          className="basis-1/4 hover:basis-1/3 justify-self-center"
          href={item.id}
          key={item.id}
        >
          <div className="p-2 text-center bg-indigo-50 hover:bg-indigo-500 rounded-xl">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

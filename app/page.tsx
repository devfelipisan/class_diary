import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

const localList = [
  "BNCC",
  "Estudante",
  "Secretaria",
  "Professor",
  "Coordenação",
];

export default function Home() {
  return (
    <div className="flex flex-row space-x-4 mt-6 px-5">
      {localList.map((item: any) => (
        <Link
          className="basis-1/4 hover:basis-1/3 justify-self-center"
          href={`enroll/${item}`}
          key={item.index}
        >
          <div className="p-2 text-center bg-indigo-50 hover:bg-indigo-500 rounded-xl">
            {item}
          </div>
        </Link>
      ))}
    </div>
  );
}

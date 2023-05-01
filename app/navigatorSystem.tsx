"use client";

import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import DropBox from "./components/dropBox";

const navigation = [
  {
    name: "Início",
    href: "/",
    current: true,
  },
  {
    name: "Estudante",
    href: "/student",
    current: true,
  },
  {
    name: "Professor",
    href: "/teacher",
    current: true,
  },
  {
    name: "Secretaria",
    href: "/secretary",
    current: true,
  },
  {
    name: "Coordenação",
    href: "/",
    current: true,
    option: [
      {
        subLabel: "Cadastrar turma",
        href: "/coordination/newclass",
        current: false,
      },
      {
        subLabel: "Cadastrar professor",
        href: "/coordination/newteacher",
        current: false,
      },
    ],
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigatorSystem() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-[#9189fc] to-transparent"
    >
      <Fragment>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <DropBox
                      key={item.name}
                      name={item.name}
                      href={item.href}
                      current={item.current}
                      option={item.option}
                    />
                    // <a
                    //   key={item.name}
                    //   href={item.href}
                    //   className={classNames(
                    //     item.current
                    //       ? "text-white"
                    //       : "text-gray-200 hover:bg-gray-700 hover:text-white",
                    //     "rounded-md px-3 py-2 text-sm font-medium"
                    //   )}
                    //   aria-current={item.current ? "page" : undefined}
                    // >
                    //   {item.name}
                    // </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Disclosure>
  );
}

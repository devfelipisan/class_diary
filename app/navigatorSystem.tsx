"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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

export default function Page() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-[#9189fc] to-transparent"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <DropBox
                        key={item.name}
                        name={item.name}
                        href={item.href}
                        current={item.current}
                        option={item.option}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-3 text-center pb-3 pt-2 bg-gradient-to-r from-[#9189fc] to-transparent">
              {navigation.map((item) => (
                <DropBox
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  current={item.current}
                  option={item.option}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

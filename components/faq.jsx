import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 pb-20 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex bg-green items-center font-primary justify-between w-full px-4 py-4 text-lg text-left text-white rounded-lg hover:bg-[#1b4023] focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-yellow`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Onde o Instituto se localiza?",
    answer: "Nossa ONG atua atualmente no Brasil todo",
  },
  {
    question: "Como faço para me voluntariar?",
    answer: "Disponibilizamos um formulário no topo do site para entrar em contato, também temos nossas redes sociais.",
  },
  {
    question: "Quem fundou a Instituto?",
    answer:
      "Nome do fundador do Instituto.",
  },
  {
    question: "Nossa história? ",
    answer:
      "História do instituto.",
  },
];

export default Faq;
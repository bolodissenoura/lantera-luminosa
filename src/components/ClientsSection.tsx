import Image from "next/image";
import React from "react";
import { useTranslationContext } from "./TranslationContext";

export function ClientsSection() {
  const { t } = useTranslationContext();
  return (
    <>
      <div className="flex justify-center items-center mb-16">
        <div className="border-b border-gray w-full "></div>
        <h2 className="text-primary-500 text-3xl font-tertiary mx-2">
        {t('clientes')}
        </h2>
        <div className="border-b border-gray w-full "></div>
      </div>
      <div className="w-full flex flex-col xl:flex-row items-center justify-around">
        <div className="flex">
          <Image
          className="mr-12"
            src="/clients/questor.svg"
            width={195}
            height={40}
            alt="Ícone da empresa questor."
          />
          <Image
          className="mr-12"
            src="/clients/pearson.svg"
            width={104}
            height={83}
            alt="Ícone da empresa pearson."
          />
        </div>
        <div className="flex">
          <Image
          className="mr-12"
            src="/clients/wizard.svg"
            width={216}
            height={81}
            alt="Ícone da empresa wizard."
          />
          <Image
          className="mr-12"
            src="/clients/yazigi.svg"
            width={177}
            height={71}
            alt="Ícone da empresa yazigi."
          />
        </div>
        <div className="flex">
          <Image
          className="mr-12"
            src="/clients/cyrela.svg"
            width={199}
            height={52}
            alt="Ícone da empresa cyrela."
          />
          <Image
          className=""
            src="/clients/move.svg"
            width={150}
            height={75}
            alt="Ícone da empresa move."
          />
        </div>
      </div>
    </>
  );
}

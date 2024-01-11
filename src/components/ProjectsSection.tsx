import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslationContext } from "./TranslationContext";

export function ProjectsSection() {
  const { t } = useTranslationContext();
  return (
    <>
      <div className="flex justify-center items-center mb-16 mt-16">
      <div className="border-b border-gray w-full "></div>
        <h2 className="text-badgeText text-6xl font-tertiary mx-14" id="projetos">
        {t('projeto')}
        </h2>
        <div className="border-b border-gray w-full "></div>
      </div>
      <div className="w-full flex flex-col ">
        <div>
          <div className="w-full flex justify-center align-middle p-20 bg-primary-400 px-40 xl:px-0 rounded cursor-pointer">
            <Image
              src="/portifolio/mockup2.png"
              width={300}
              height={300}
              alt="Muckup de tela celular."
            />
            <Image
              src="/portifolio/mockup3.png"
              width={800}
              height={800}
              alt="Muckup de tela desktop."
            />
            <Image
              src="/portifolio/mockup1.png"
              width={300}
              height={300}
              alt="Muckup de tela celular."
            />
          </div>
          <p className="mt-4 font-fourth text-badgeText text-2xl"><strong>{t('cyrela')}</strong></p>
        </div>
        <div className="w-full flex justify-between gap-4 mt-8">
          <div className="w-6/12">
            <Link href={"/franquias-pearson"}>
              <div className="w-full flex max-h-96 justify-center align-middle bg-pallet-blue rounded cursor-pointer ">
                <Image
                  src="/portifolio/mockup4.png"
                  width={500}
                  height={500}
                  alt="Muckup de tela celular."
                />
              </div>
              <p className="mt-4 font-fourth text-badgeText text-2xl"><strong>{t('pearson')}</strong></p>
            </Link>
          </div>
          <div className="w-6/12">
            <div className="w-full flex max-h-96 justify-center align-middle bg-pallet-orange rounded cursor-pointer ">
              <Link href={"/designsystem"}>
              <Image
                src="/portifolio/mockup5.png"
                width={500}
                height={500}
                alt="Muckup de tela celular."
              />
              </Link>
            </div>
            <p className="mt-4 font-fourth text-badgeText text-2xl"><strong>{t('design')}</strong></p>
          </div>
        </div>
        <div>
          <div className="mt-8 w-full flex justify-center align-middle p-20 bg-pallet-gray rounded cursor-pointer">
            <Image
              src="/portifolio/mockup6.png"
              width={800}
              height={800}
              alt="Muckup de tela desktop."
            />
          </div>
          <p className="mt-4 font-fourth text-badgeText text-2xl"><strong>{t('treinos')}</strong></p>
        </div>
      </div>
    </>
  );
}

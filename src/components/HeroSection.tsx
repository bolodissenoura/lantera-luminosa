import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslationContext } from "./TranslationContext";

export function HeroSection() {
  const { t } = useTranslationContext();
  return (
    <div className="w-full flex flex-col xl:flex-row gap-8 items-center justify-around pb-16 xl:items-start mt-32">
        <Image
        className="xl:mr-12"
          src="/henrique.svg"
          width={364}
          height={364}
          alt="Homem com braços cruzados olhando para você."
          priority
        />
        <div>
          <div className="pt-8">
          <h1 className="text-6xl ml-32 xl:ml-0 text-badgeText flex items-center justify-center xl:justify-start font-tertiary mb-4">HENRIQUE VINHOLA ㅤ<img src="/iconbrain.svg" alt="" /></h1>
          <p className="text-primary-500 text-2xl flex justify-center xl:justify-start my-3 font-fourth">{t('produto')}</p>
          </div>
          <div>
          <p className="text-badgeText max-w-[750px] text-center xl:text-left font-fourth text-2xl leading-loose">
          {t('formacao1')}{" "}
            <strong>{t('formacao2')}</strong>{t('formacao3')}{" "}
            <strong>{t('formacao4')}</strong>{t('formacao5')}{" "}
            <strong>{t('formacao6')}</strong>.
          </p>
          </div>
        </div>
      </div>
  );
}

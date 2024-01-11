import Image from "next/image";
import React from "react";
import { useTranslationContext } from "./TranslationContext";

export function FeedbackSection() {
  const { t } = useTranslationContext();
  return (
    <>
      <div className="w-full flex items-center justify-center my-20">
        <div className="border-b border-gray w-full "></div>
        <h2 className="text-primary-500 text-3xl font-tertiary mx-2">
        {t('recomendacao')}
        </h2>
        <div className="border-b border-gray w-full "></div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex xl:flex-row flex-col-reverse gap-4 justify-center mb-16">
          <div className="flex flex-col">
            <h3 className="text-4xl text-badgeText font-tertiary">JOSÉ OTÁVIO</h3>
            <p className="text-2xl text-primary-500 font-fourth my-3">Product designer</p>
            <p className="text-badgeText text-2xl font-fourth">
            {t('feedbackjose')}
            </p>
          </div>
          <Image
          className="mt-12 self-end 2xl:self-start"
            src="/feedbacks/otavio.png"
            width={276}
            height={276}
            alt="Rapaz sorrindo."
          />
        </div>
        <div className="flex xl:flex-row flex-col gap-4 justify-center mb-16">
          <Image
          className="mt-20"
            src="/feedbacks/rafa.png"
            width={276}
            height={276}
            alt="Moça sorrindo."
          />
          <div className="flex flex-col">
            <div className="w-full flex justify-between">
              <div></div>
              <div>
                <h3 className="text-4xl text-badgeText font-tertiary text-right">
                  RAFAELA CARVALHO
                </h3>
                <p className="text-2xl text-primary-500 font-fourth my-3">
                {t('devbackrafaela')}
                </p>
              </div>
            </div>
            <p className="text-badgeText xl:text-right text-2xl font-fourth">
            {t('feedbackrafaela')}
            </p>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col-reverse gap-4 justify-center">
          <div className="flex flex-col">
            <h3 className="text-4xl text-badgeText font-tertiary">DANIEL LIMA</h3>
            <p className="text-2xl text-primary-500 font-fourth my-3">{t('devfrontdani')}</p>
            <p className="text-badgeText text-2xl font-fourth">
            {t('feedbackdani')}
            </p>
          </div>
          <Image
          className="mt-12 self-end 2xl:self-start"
            src="/feedbacks/dani.png"
            width={276}
            height={276}
            alt="Rapaz sorrindo."
          />
        </div>
      </div>
    </>
  );
}

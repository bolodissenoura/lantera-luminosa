import { NavBar } from "@/components/NavBar";
import { useTranslationContext } from "@/components/TranslationContext";

export default function DesignSystem() {
  const { t } = useTranslationContext();

  return (
    <main className="mt-32 h-screen">
      <NavBar />

      <h2 className="text-badgeText text-4xl font-tertiary flex items-center justify-center">
        {t("padronizacao")}
      </h2>
      <div className="flex justify-center py-8">
        <img src="/clients/questor.svg" alt="Ícone da empresa pearson." />
      </div>
      <div className="bg-orange-400 ">
        <div className="flex items-center justify-center space-x-[-80px] ">
          <img
            className="h-auto max-w-[150px] md:max-w-[592px]"
            src="/portifolio/mockup8.svg"
            alt="mockup8"
          />
          <img
            className="h-auto max-w-[200px] md:max-w-[856px]"
            src="/portifolio/mockup7.svg"
            alt="mockup7"
          />
          <img
            className="h-auto max-w-[150px] md:max-w-[558px]"
            src="/portifolio/mockup9.svg"
            alt="mockup9"
          />
        </div>
      </div>
      <div className="text-badgeText flex justify-center p-8">
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">{t("papel")}</p>
          <p className="text-primary-500 text-2xl">
          {t("productdesigner")}
          </p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">{t("tempoprojeto")}</p>
          <p className="text-primary-500 text-2xl">{t("12meses")}</p>
        </div>
      </div>
      <div className="text-badgeText text-center">
        <p className="text-4xl font-tertiary">{t("responsabilidades")}</p>
        <p className="text-primary-500 text-2xl">
        {t("personas")}
        </p>
      </div>
      <div className="border-b border-gray w-1/4 mx-auto pt-8"></div>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="text-badgeText max-w-[720px] py-8">
          <p className="pb-3 pt-16 text-4xl font-tertiary">{t("objetivo")}</p>
          <p className="text-2xl font-fourth leading-loose">
          {t("objetivosection")}
          </p>
        </div>
        <div className="text-badgeText max-w-[720px] text-right pb-8 self-end">
          <p className="pb-3 pt-8 text-4xl font-tertiary">{t("desafio")}</p>
          <p className="text-2xl font-fourth leading-loose">
          {t("desafiosection")}
          </p>
        </div>
        <div className="text-badgeText max-w-[720px] pb-16">
          <p className="pb-3 pt-8 text-4xl font-tertiary">{t("modelo")}</p>
          <p className="text-2xl font-fourth leading-loose">
          {t("modelosection")}
          </p>
        </div>
      </div>
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">{t("personasuppercase")}</p>
          <p className="pb-8 text-2xl text-left font-fourth leading-loose">
          {t("personassection")}
          </p>
        </div>
        <div className="grid grid-cols-2 max-w-[1200px] mx-auto gap-2">
          <img src="/portifolio/photosection1.svg" alt="photosection1" />
          <img src="/portifolio/photosection2.svg" alt="photosection2" />
          <img src="/portifolio/photosection3.svg" alt="photosection3" />
          <img src="/portifolio/photosection4.svg" alt="photosection4" />
          <img src="/portifolio/photosection5.svg" alt="photosection5" />
          <img src="/portifolio/photosection6.svg" alt="photosection6" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16">
        <a href="">
          <div className="bg-[#5A6273] h-[64px] text-3xl text-center font-tertiary text-white rounded-md flex items-center justify-center">
          {t("acessardesign")}
            <img src="/portifolio/buttonpansutti.svg" alt="" />
          </div>
        </a>
      </div>
      <div className="border-b border-gray max-w-[1200px] mx-auto my-4 pt-6"></div>
      <div className="text-[#626365] text-[12px] text-right font-fourth max-w-[1025px] mx-auto">
        <a href="">{t("proximoprojeto")}</a>
      </div>
      <div className="text-[#3C4043] text-4xl text-right font-fourth max-w-[1100px] mx-auto pt-4">
        <a href="">{t("appgestao")} {">"}</a>
      </div>
      <div className="text-[#424248] text-center font-fourth py-16">
        <p>Henrique Vinhola © 2023. Todos os Direitos Reservados</p>
      </div>
    </main>
  );
}

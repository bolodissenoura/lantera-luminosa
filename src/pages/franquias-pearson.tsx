import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { useTranslationContext } from "@/components/TranslationContext";

const columnOneItems = [
  "Cadastro de pessoa",
  "Contrato",
  "Alocação de alunos",
  "Planejamento de aulas",
  "Reposição de aulas",
];

const columnTwoItems = ["Pós vendas", "Acompanhamento", "Desempenho/Boletim", "Plano de ação", "Rematrícula"];

export default function Franquias() {
  const { t } = useTranslationContext();

  return (
    <main className="mt-20 h-screen">
      <NavBar />
      <div className="px-8 md:px-60 mt-20">
        <h2 className="text-badgeText text-4xl font-tertiary flex items-center justify-center">
          {t("titlefranquias")}
        </h2>
        <br />
        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="flex">
            <Image src="/clients/pearson.svg" width={104} height={83} alt="Ícone da empresa wizard." />
            <Image src="/clients/wizard.svg" width={216} height={104} alt="Ícone da empresa wizard." />
            <Image src="/clients/yazigi.svg" width={177} height={104} alt="Ícone da empresa wizard." />
          </div>
        </div>
        <br />
      </div>
      <div className="bg-pallet-blue h-500 w-full">
        <div className="flex items-center justify-center">
          <Image width={666} height={469} src="/portifolio/mockup7.png" alt="pc" />
          <Image width={659} height={465} src="/portifolio/mockup4.png" alt="pc" />
        </div>
      </div>
      <div className="text-badgeText flex justify-center p-8">
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">{t("mypaper")}</p>
          <p className="mt-2 text-primary-500 text-2xl">{t("seniorproduct")}</p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">{t("projecttime")}</p>
          <p className="mt-2 text-primary-500 text-2xl">{t("12meses")}</p>
        </div>
      </div>
      <div className="text-badgeText text-center">
        <p className="text-4xl font-tertiary">{t("responsabilidades")}</p>
        <p className="mt-2 text-primary-500 text-2xl">{t("personas")}</p>
      </div>
      <div className="border-b border-gray w-1/4 mx-auto my-4 pt-6"></div>
      <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">{t("intruduction")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("pearsontext")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("spontetext")}</p>
        </div>
        <div className="w-2/5 flex flex-col items-center justify-center">
          <Image src="/clients/pearson.svg" alt="Imagem 1" width={250} height={250} className="align-middle" />
          <Image src="/clients/sponte.svg" alt="Imagem 1" width={250} height={250} className="align-middle" />
        </div>
      </div>
      <div className="max-w-[1200px] text-right mx-auto flex justify-center items-stretch">
        <div className="w-2/5 flex flex-col items-center justify-center">
          <Image src="/clients/wizard.svg" alt="Imagem 1" width={250} height={250} className="align-middle" />
          <Image src="/clients/yazigi.svg" alt="Imagem 1" width={250} height={250} className="align-middle" />
        </div>
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary text-badgeText">{t("aboutproject")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("aboutprojectText")}</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">{t("theteam")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("theteamtext")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("theteamtext2")}</p>
        </div>
        <div className="max-w-[720px] text-right pb-8 self-end">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">{t("initialchallenges")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("initialchallengestext")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("initialchallengestext2")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("initialchallengestext3")}</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">{t("initialchallengestext4")}</p>
        </div>
      </div>
      <div className="max-w-[1200px] text-left mx-auto flex justify-center items-stretch">
          <div className="max-w-[500px]">
            <p className="pb-4 text-4xl font-tertiary">{t("cultureandmethodology")}</p>
            <p className="text-2xl font-fourth leading-loose">{t("cultureandmethodologytext")}</p>
            <br />
            <p className="text-2xl font-fourth leading-loose">{t("cultureandmethodologytext2")}</p>
          </div>
          <div className="flex">
            <div className="flex ml-[50px] items-center justify-center">
              <Image src="/plain.svg" alt="Imagem 1" width={649} height={426} className="align-middle" />
            </div>
          </div>
        </div>
        <br />
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">{t("discovery")}</p>
        </div>
        <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
          <div className="max-w-[720px] py-8">
            <p className="text-2xl font-fourth text-white leading-loose">{t("discoveryText")}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <Image src="/video-maker.svg" alt="Imagem 1" width={485} height={228} className="h-full" />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center py-8">
          <Image src="/video-maker2.svg" alt="Imagem 1" width={485} height={228} className="h-full" />
          <Image src="/video-maker3.svg" alt="Imagem 1" width={485} height={228} className="h-full" />
        </div>
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-2xl text-left font-fourth leading-loose">{t("discoveryText2")}</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16">
        <div className="text-center max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary text-badgeText">{t("personasuppercase")}</p>
        </div>
        <Image src="/persona.svg" alt="Imagem 1" width={1200} height={719} />
      </div>
      <div className="max-w-[1200px] max-h-[705px] mx-auto flex">
        <div className="w-1/2 mr-[58px] text-2xl font-fourth leading-[43px] font-normal">
          <p className="h-[301px]">{t("persontext")}</p>
          <Image width={500} height={385} src="calender.svg" alt="Imagem" />
        </div>
        <div className="w-1/2 text-2xl leading-[43px] mb-16 font-normal">
          <h2 className="text-primary-500 font-fifth">{t("keyinsights")}</h2>
          <ul className="list-disc font-fourth ">
            <li>{t("pearsonli")}</li>
            <li>{t("pearsonli2")}</li>
            <li>{t("pearsonli3")}</li>
            <li>{t("pearsonli4")}</li>
            <li>{t("pearsonli5")}</li>
            <li>{t("pearsonli6")}</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center text-white max-w-[1200px] mx-auto justify-between">
          <p className="pb-8 text-4xl font-tertiary">{t("validation")}</p>
          <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">{t("validationText")}</p>
          <ul className="list-disc flex justify-between">
            <li className="marker:text-green-400">{t("validationli")}</li>
            <li className="marker:text-pink-400">{t("validationli2")}</li>
            <li className="marker:text-blue-200">{t("validationli3")}</li>
            <li className="marker:text-gray-400">{t("validationli4")}</li>
          </ul>
        </div>
        <Image width={1915} height={345} src="validation.svg" alt="Imagem" />
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16 text-badgeText">
        <div className="text-center max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">{t("projectarchitecture")}</p>
        </div>
        <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          {t("projectarchitecturetext")}
        </p>
        <Image src="/information-arch.svg" alt="Imagem 1" width={1200} height={719} />
        <br />
        <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          {t("projectarchitecturetext2")}
        </p>
        <p className="text-primary-500 pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          {t("Prioritization")}
        </p>
        <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">{t("Prioritization2")}</p>
        <div className="flex justify-center items-center">
          {/* Coluna 1 */}
          <div className="w-1/2 p-2">
            <ol className="list-none">
              {columnOneItems.map((word, index) => {
                const number = (index + 1).toString().padStart(2, "0");
                return (
                  <li key={index} className="flex items-center p-2 my-2" style={{ border: "1px solid #1AC6D9" }}>
                    <span className="flex bg-primary-500 p-1 mr-2 text-white w-8 h-8 justify-center">{number}</span>
                    <div className="flex items-center justify-center flex-1">{word}</div>
                  </li>
                );
              })}
            </ol>
          </div>
          {/* Coluna 2 */}
          <div className="w-1/2 p-2">
            <ol className="list-none pl-0">
              {columnTwoItems.map((word, index) => {
                const number = (index + 7).toString().padStart(2, "0");
                return (
                  <li key={index} className="flex items-center p-2 my-2" style={{ border: "1px solid #1AC6D9" }}>
                    <span className="flex bg-primary-500 p-1 mr-2 text-white w-8 h-8 justify-center">{number}</span>
                    <div className="flex items-center justify-center flex-1">{word}</div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="relative bg-[#5A6273] w-full py-16">
        <div className="text-start text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">{t("personregistration")}</p>
          <p className="pb-8 max-w-[822px] text-[24px] leading-[43px] font-normal text-left font-fourth">
            {t("personregistrationtext")}
          </p>
          {/* <Image
          width={300}
          height={300}
          src="/portifolio/mockup4.png" alt="pc"
          className=""
        /> */}
        </div>
      </div>
      <div className="grid max-w-[1200px] gap-16 mx-auto pb-16 pt-16 text-badgeText">
        <div className="max-w-[1200px] text-right mx-auto flex justify-center items-stretch">
          <div className="flex">
            <div className="flex mr-[30px] items-center justify-center">
              <Image src="/imagem-franquias.svg" alt="Imagem 1" width={520} height={407} className="align-middle" />
            </div>
          </div>
          <div className="max-w-[650px]">
            <p className="pb-4 text-4xl font-tertiary">{t("informationarchitecture")}</p>
            <p className="text-2xl font-fourth leading-loose">{t("informationarchitecturetext")}</p>
            <br />
            <p className="text-2xl font-fourth leading-loose">{t("informationarchitecturetext2")}</p>
          </div>
        </div>
        <div className="max-w-[1200px] text-left mx-auto flex justify-center items-stretch">
          <div className="max-w-[500px]">
            <p className="pb-4 text-4xl font-tertiary">{t("ideation")}</p>
            <p className="text-2xl font-fourth leading-loose">{t("ideationtext")}</p>
            <br />
            <p className="text-2xl font-fourth leading-loose">{t("ideationtext2")}</p>
            <br />
            <p className="text-2xl font-fourth leading-loose">{t("ideationtext3")}</p>
          </div>
          <div className="flex">
            <div className="flex ml-[50px] items-center justify-center">
              <Image src="/imagem-franquias2.svg" alt="Imagem 1" width={649} height={426} className="align-middle" />
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] text-right mx-auto flex justify-center items-stretch">
          <div className="flex">
            <div className="flex mr-[30px] items-center justify-center">
              <Image src="/imagem-franquias3.svg" alt="Imagem 1" width={520} height={407} className="align-middle" />
            </div>
          </div>
          <div className="max-w-[650px]">
            <p className="pb-4 text-4xl font-tertiary">{t("testing")}</p>
            <p className="text-2xl font-fourth leading-loose">{t("testingtext")}</p>
            <br />
            <p className="text-2xl font-fourth leading-loose">{t("testingtext2")}</p>
          </div>
        </div>
        <div className="max-w-[1200px] text-left mx-auto flex justify-center items-stretch">
          <div className="max-w-[565px]">
            <p className="text-2xl font-fourth leading-loose">{t("testingtext3")}</p>
            <br />
            <p className="text-2xl font-fourth leading-loose">{t("testingtext4")}</p>
          </div>
          <div className="flex">
            <div className="flex ml-[50px] items-center justify-center">
              <Image src="/imagem-franquias4.svg" alt="Imagem 1" width={649} height={426} className="align-middle" />
            </div>
          </div>
        </div>
        <div className="text-left">
          <p className="pb-4 text-4xl font-tertiary">{t("testresults")}</p>
          <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">{t("testresultstext")}</p>
          <Image src="/imagem-franquias5.svg" alt="Imagem 1" width={1200} height={719} />
          <Image src="/imagem-franquias6.svg" alt="Imagem 1" width={1200} height={719} />
          <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">{t("testresultstext2")}</p>
        </div>
        <div>
          <div className="border-b border-gray max-w-[1200px] mx-auto my-4 pt-6"></div>
          <div className="text-right font-fourth max-w-[1000px] mx-auto">
            <a href="">{t("proximoprojeto")}</a>
          </div>
          <div className="text-4xl text-right font-fourth max-w-[1100px] mx-auto pt-4">
            <a href="">
              {t("padronizacao")}
              {">"}
            </a>
          </div>
          <div className="text-center font-fourth pt-20 pb-16">
            <p>{t("allrightsreserved")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

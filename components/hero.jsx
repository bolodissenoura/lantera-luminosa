import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.jpg";
import { useTranslationContext } from "./TranslationContext";

const Hero = () => {
  const { t } = useTranslationContext();
  return (
    <div className="bg-gradient-to-br from-[#e78045] to-[#ffc18e]">
    <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl font-bold leading-snug text-center tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:text-left xl:leading-tight dark:text-white">
              Instituto Lanterna Luminosa
            </h1>
            <p className="py-12 text-xl leading-normal text-black lg:text-xl xl:text-2xl xl:leading-relaxed dark:text-gray-300">
            {t('bem-vindo')}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="500"
              height="500"
              className={"object-cover rounded-xl"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      </div>
  );
}

export default Hero;
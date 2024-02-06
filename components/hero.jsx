import Image from "next/image";
import Container from "./container";
import ArrowDown from './ArrowDown';

const Hero = () => {
  return (
    <div className="w-full bg-green pt-12 ">
    <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-3xl xl:pl-40  mb-8">
            <h1 className="text-5xl font-primary leading-snug text-left tracking-tight text-white md:text-left">
            Você não está sozinha.
            </h1>
            <p className="text-[16px] pb-[12px] font-primary text-left leading-normal text-yellow">
            Conheça o Instituto Lanterna Luminosa: a luz que liberta as mulheres.
            </p>
            <ArrowDown />
          </div>
        </div>
        <div className="flex items-center xl:pr-32 justify-end w-full lg:w-1/2">
            <Image
              src="/img/circlewoman.svg"
              width="432"
              height="432"
              className={"object-cover"}
              alt="CircleWoman"
              loading="eager"
            />
        </div>
      </Container>
      </div>
  );
}



export default Hero;
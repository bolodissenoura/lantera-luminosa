import Image from 'next/image';
import Container from './container';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const scrollToSection = () => {
    let pixelsToScroll;

    if (window.innerWidth < 640) {
      pixelsToScroll = 900;
    } else {
      pixelsToScroll = 700;
    }
    const currentPosition = document.documentElement.scrollTop;
    const targetPosition = currentPosition + pixelsToScroll;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };
  return (
    <div className="w-full bg-green pt-4">
      <Container className="flex flex-wrap">
        <div className="flex  w-full lg:w-1/2 justify-center text-center">
          <div className="flex flex-col max-w-3xl xl:pl-40  mb-8 items-center justify-center text-center">
            <h1 className="text-5xl pb-[10px] font-primary font-bold leading-snug tracking-tight text-white">
              Você não está sozinha.
            </h1>
            <p className="text-[16px] pb-[24px] font-normal font-primary leading-normal text-yellow">
              Conheça o Instituto{' '}
              <span className="font-bold">Lanterna Luminosa: </span>a luz que
              liberta as mulheres.
            </p>
            <button
              onClick={scrollToSection}
              className="flex w-48 h-14 font-medium text-lg font-primary gap-2 justify-center items-center text-center text-yellow bg-zinc-900 rounded-lg hover:font-semibold hover:text-white"
            >
              <p>Conheça mais</p>
              <ArrowDownCircleIcon
                width="27"
                height="27"
                className="cursor-pointer font-bold"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center xl:pr-32 justify-center w-full lg:w-1/2 lg:justify-end">
          <Image
            src="/img/circlewoman.svg"
            width="432"
            height="432"
            className={'object-cover'}
            alt="CircleWoman"
            loading="eager"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;

import React from 'react';
import Container from './container';
import SectionTitle from './sectionTitle';
import Image from 'next/image';
import Link from 'next/link';

const eventosRealizados = [
  {
    link: 'https://drive.google.com/file/d/1ts_vcD0ZD5PFXll9WBeePqPaPXonVsun/view?usp=sharing',
    data: 2021,
  },
  {
    link: 'https://drive.google.com/file/d/1NvLi3hJfYg38hm8c0kZQBya--ztIo4R5/view?usp=sharing',
    data: 2022,
  },
  {
    link: 'https://drive.google.com/file/d/1p5bRIYMbv1YpvgR4ranxcFt7c6u75tf6/view?usp=sharing',
    data: 2023,
  },
];

const Events = () => {
  return (
    <Container>
      <SectionTitle title="Eventos Realizados">Eventos</SectionTitle>
      <div className="flex flex-col justify-center items-center pb-5 gap-10 flex-wrap lg:flex-row">
        {eventosRealizados.map((event) => {
          return (
            <Link
              target="_blank"
              className="flex items-center justify-center w-full lg:w-72 gap-5 py-3 text-lg font-primary text-center text-green bg-yellow rounded-lg px-7 lg:px-5 lg:py-3 hover:underline font-bold"
              href={event.link}
            >
              <Image
                className="rounded-md"
                src="/img/ImageLanterna.png"
                width={44}
                height={44}
                alt="Image Icon"
              />
              <p className="text-xl font-primary text-gray-800">
                Evento de {event.data}
              </p>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Events;

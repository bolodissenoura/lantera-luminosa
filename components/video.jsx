import React from 'react';
import Container from './container';
import Link from 'next/link';
import { Instagram } from './icons/Instagram';

const Video = (props) => {
  return (
    <Container>
      <div className="flex gap-5 overflow-x-auto custom-scrollbar-none sm:justify-between sm:gap-0 sm:overflow-visible">
        <iframe
          className="w-[86%] h-[500px] rounded-xl sm:w-[48%]"
          src={props.src}
        ></iframe>
        <iframe
          className="w-[86%] h-[500px] rounded-xl sm:w-[48%]"
          src={props.src2}
        ></iframe>
      </div>

      <div className="flex flex-wrap items-center justify-center max-w-3xl gap-5 mx-auto mt-14 text-white bg-green px-4 py-4 lg:px-8 lg:py-8 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-yellow">
            Assista mais vídeos em:
          </h2>
        </div>
        <div className="font-medium text-white lg:text-base">
          <Link
            href="https://www.instagram.com/emmaresdesereios/"
            target="_blank"
            className="mt-2 mb-4 flex flex-row gap-2 hover:text-zinc-300 transition-colors"
            rel="noopener"
          >
            <span className="sr-only">Instagram</span>
            <Instagram size={24} color={'currentColor'} />
            @emmaresdesereios
          </Link>
          <Link
            href="https://www.instagram.com/institutolanternaluminosa/"
            target="_blank"
            className="mt-2 mb-4 flex flex-row gap-2 hover:text-zinc-300 transition-colors"
            rel="noopener"
          >
            <span className="sr-only">Instagram</span>
            <Instagram size={24} color={'currentColor'} />
            @institutolanternaluminosa
          </Link>
          <Link
            href="https://www.instagram.com/conexoesreaispodcast/"
            target="_blank"
            className="mt-2 flex flex-row gap-2 hover:text-zinc-300 transition-colors"
            rel="noopener"
          >
            <span className="sr-only">Instagram</span>
            <Instagram size={24} color={'currentColor'} />
            @conexoesreaispodcast
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Video;

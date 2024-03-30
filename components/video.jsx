import React from "react";
import Container from "./container";

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
            Assista mais vídeos em 👉🏻
          </h2>
        </div>
        <div className="font-medium text-white lg:text-base">
          <a
            href="https://www.instagram.com/emmaresdesereios/"
            target="_blank"
            className="mt-2 mb-4 flex flex-row gap-2"
            rel="noopener"
          >
            <span className="sr-only">Instagram</span>
            <Instagram /> @emmaresdesereios 
          </a>
          <a
            href="https://www.instagram.com/institutolanternaluminosa/"
            target="_blank"
            className="mt-2 mb-4 flex flex-row gap-2"
            rel="noopener"
          >
            <span className="sr-only">Instagram</span>
            <Instagram /> @institutolanternaluminosa
          </a>
          <a
            href="https://www.instagram.com/conexoesreaispodcast/"
            target="_blank"
            className="mt-2 flex flex-row gap-2"
            rel="noopener"
          >
            <span className="sr-only">Instagram</span>
            <Instagram /> @conexoesreaispodcast
          </a>
        </div>
      </div>
    </Container>
  );
};

const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

export default Video;

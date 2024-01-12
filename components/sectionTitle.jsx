import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center "
      }`}
    >
      {props.title && (
        <h2 className="max-w-2xl pt-16 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.paragraph1 && (
        <p className="max-w-6xl pt-10 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.paragraph1}
        </p>
      )}

      {props.paragraph2 && (
        <p className="max-w-6xl pt-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.paragraph2}
        </p>
      )}

      {props.paragraph3 && (
        <p className="max-w-6xl pt-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.paragraph3}
        </p>
      )}

      {props.paragraph4 && (
        <p className="max-w-6xl pt-4 pb-16 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.paragraph4}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;

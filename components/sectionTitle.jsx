import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
        className={`flex w-full flex-col ${props.align === "left" ? "" : "items-center justify-center text-left font-medium"}`}
      >
        {props.title && (
          <h2 className={`max-w-2xl  text-3xl font-primary leading-snug tracking-tight lg:leading-tight lg:text-4xl ${props.titleClassName}`}>
            {props.title}
          </h2>
        )}

      {props.paragraph1 && (
        <p className="max-w-6xl pt-10 font-primary  text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.paragraph1}
        </p>
      )}

      {props.paragraph2 && (
        <p className="max-w-6xl pt-4 font-primary  text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.paragraph2}
        </p>
      )}

      {props.paragraph3 && (
        <p className="max-w-6xl pt-4 font-primary  text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.paragraph3}
        </p>
      )}

      {props.paragraph4 && (
        <p className="max-w-6xl pt-4 font-primary  pb-16 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {props.paragraph4}
        </p>
      )}
    </Container>
  );
};

export default SectionTitle;

import Image from "next/image";
import React from "react";
import Container from "./container";

const Benefits = (props) => {
  const { data } = props;
  return (
    <Container className="flex flex-wrap lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              src={data.image}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-primary leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg font-primary leading-normal text-gray-500 lg:text-xl xl:text-xl">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props) {
  return (
    <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-green rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-primary text-gray-800">
            {props.title}
          </h4>
          <p className="mt-1 font-primary text-gray-500">
            {props.children}
          </p>
        </div>
      </div>
  );
}

export default Benefits;

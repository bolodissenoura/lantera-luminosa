import React from "react";
import Container from "./container";

const Video = (props) => {
  return (
    <Container>
      <div className="flex gap-5 overflow-x-auto custom-scrollbar-none sm:justify-between sm:gap-0 sm:overflow-visible">
        <iframe className="w-[86%] h-[500px] rounded-xl sm:w-[48%]" src={props.src}></iframe>
        <iframe className="w-[86%] h-[500px] rounded-xl sm:w-[48%]" src={props.src2}></iframe>
      </div>
    </Container>
  );
}

export default Video;
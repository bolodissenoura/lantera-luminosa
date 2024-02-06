import React from "react";
import Container from "./container";

const Video = (props) => {
  return (
    <Container>
      <div className="flex justify-center w-full mx-auto overflow-hidden relative cursor-pointer">
        <iframe className="aspect-video mr-12 w-[800px] h-[500px] rounded-xl " src={props.src}></iframe>
        <iframe className="aspect-video w-[800px] h-[500px] rounded-xl " src={props.src2}></iframe>
      </div>
    </Container>
  );
}

export default Video;
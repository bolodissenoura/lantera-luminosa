import React from 'react';
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const ArrowDown = () => {
  const scrollToSection = () => {
    let pixelsToScroll;

    if (window.innerWidth < 640) {
      pixelsToScroll = 900;  
    } else {
      pixelsToScroll = 700;
    }
    const currentPosition =  document.documentElement.scrollTop;
    const targetPosition = currentPosition + pixelsToScroll;

    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  return (
    <ArrowDownIcon
      width="27"
      height="27"
      className="text-yellow mx-auto cursor-pointer"
      onClick={scrollToSection}
    />
  );
};

export default ArrowDown;
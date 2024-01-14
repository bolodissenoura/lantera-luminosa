import React from 'react';
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const ArrowDown = () => {
  const scrollToSection = () => {
    const pixelsToScroll = 700;
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
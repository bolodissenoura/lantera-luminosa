import React from "react";

const Container = (props) => {
  return (
    <div
      className={`container p-6 mx-auto xl:px-6  ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;
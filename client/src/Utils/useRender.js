import * as React from "react";

export default (name) => {
  const render = React.useRef(0);
  return console.log(`${name}:`, render.current++);
};

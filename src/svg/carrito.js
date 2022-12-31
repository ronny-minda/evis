import * as React from "react";

const Carrito = (props) => (
  <svg
    height="30px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 197.7 166"
    preserveAspectRatio="xMinYMax meet"
    data-hook="svg-icon-2"
    {...props}
  >
    <path d="m197.9 55.9-28 71.5H64.5L27.6 29.8H0l.2-13.1h36.3l36.9 97.6h87.5L183 55.9" />
    <circle cx={143.8} cy={153} r={13} />
    <circle cx={90.8} cy={153} r={13} />
    <text
      data-hook="items-count"
      className="bGBBgJ jDuYHa"
      textAnchor="middle"
      x={116}
      y={35}
      dy=".48em"
      style={{ font: "normal 80px sans-serif" }}
    >
      {"3"}
    </text>
  </svg>
);

export default Carrito;

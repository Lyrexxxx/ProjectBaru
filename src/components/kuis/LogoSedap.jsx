import React from "react";

const LogoSedap = ({ width = 120, height = 32, className = "" }) => {
  return (
    <svg
      viewBox="0 0 120 40"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="28"
        fontFamily="Montserrat, sans-serif"
        fontWeight="900"
        fontSize="28"
        fill="#E63946"
        stroke="#E63946"
        strokeWidth="0.8"
        paintOrder="stroke"
      >
        Sedap
      </text>
    </svg>
  );
};

export default LogoSedap;

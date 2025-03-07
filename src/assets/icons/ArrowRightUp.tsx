import { IconProps } from "@/types";
import React, { FC } from "react";

const ArrowRightUp: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "40"}
      height={props?.height || "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.2492 20.635L25.7505 13.1405L18.256 12.6392"
        stroke={props?.stroke || "#FAFAFA"}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5539 22.9331L25.6387 13.2383"
        stroke={props?.stroke || "#FAFAFA"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightUp;

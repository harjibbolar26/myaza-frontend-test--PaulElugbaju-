import { IconProps } from "@/types";
import React, { FC } from "react";

const ArrowRightDown: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "40"}
      height={props?.height || "40"}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5862 24.9579L26.0809 25.4556L26.5786 17.9608"
        stroke={props?.stroke || "#FAFAFA"}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2822 14.2632L25.9824 25.3433"
        stroke={props?.stroke || "#FAFAFA"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightDown;

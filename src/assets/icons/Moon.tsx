import { IconProps } from "@/types";
import React, { FC } from "react";

const Moon: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "20"}
      height={props?.height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_568)">
        <path
          d="M18.3337 13.2036C17.2392 13.6986 16.0242 13.9741 14.7449 13.9741C9.92974 13.9741 6.02629 10.0707 6.02629 5.25553C6.02629 3.97621 6.30183 2.76125 6.7968 1.66675C3.77179 3.03477 1.66699 6.079 1.66699 9.61482C1.66699 14.43 5.57044 18.3334 10.3856 18.3334C13.9214 18.3334 16.9656 16.2286 18.3337 13.2036Z"
          stroke={props?.stroke || "white"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_568">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Moon;

import { IconProps } from "@/types";
import React, { FC } from "react";

const NGN: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "40"}
      height={props?.height || "30"}
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="39" height="29" rx="14.5" fill="white" />
      <rect x="0.5" y="0.5" width="39" height="29" rx="14.5" stroke="#F6F5FE" />
      <mask
        id="mask0_42_435"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="3"
        width="24"
        height="24"
      >
        <circle cx="20" cy="15" r="12" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_42_435)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.89355 2.48828H36.9361V28.0202H2.89355V2.48828Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.585 2.48828H36.9361V28.0202H25.585V2.48828ZM2.89355 2.48828H14.2393V28.0202H2.89355V2.48828Z"
          fill="#008753"
        />
      </g>
    </svg>
  );
};

export default NGN;

import { IconProps } from "@/types";
import React, { FC } from "react";

const Plus: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "12"}
      height={props?.height || "12"}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1V6M6 6V11M6 6H11M6 6H1"
        stroke={props?.stroke || "#1D1D41"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;

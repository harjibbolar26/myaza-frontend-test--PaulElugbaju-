import { IconProps } from "@/types";
import React, { FC } from "react";

const Wallet: FC<IconProps> = (props) => {
  return (
    <svg
      width={props?.width || "20"}
      height={props?.height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3333 6.66677V3.75065C13.3333 3.05753 13.3333 2.71097 13.1873 2.498C13.0598 2.31192 12.8622 2.18551 12.6398 2.14767C12.3852 2.10435 12.0706 2.24958 11.4413 2.54003L4.04918 5.95176C3.48792 6.2108 3.20729 6.34032 3.00175 6.5412C2.82005 6.71878 2.68135 6.93556 2.59625 7.17496C2.5 7.44576 2.5 7.75483 2.5 8.37299V12.5001M13.75 12.0834H13.7583M2.5 9.33343L2.5 14.8334C2.5 15.7669 2.5 16.2336 2.68166 16.5901C2.84144 16.9037 3.09641 17.1587 3.41002 17.3184C3.76654 17.5001 4.23325 17.5001 5.16667 17.5001H14.8333C15.7668 17.5001 16.2335 17.5001 16.59 17.3184C16.9036 17.1587 17.1586 16.9037 17.3183 16.5901C17.5 16.2336 17.5 15.7669 17.5 14.8334V9.33343C17.5 8.40001 17.5 7.9333 17.3183 7.57678C17.1586 7.26318 16.9036 7.00821 16.59 6.84842C16.2335 6.66677 15.7668 6.66677 14.8333 6.66677L5.16667 6.66677C4.23325 6.66677 3.76654 6.66677 3.41002 6.84842C3.09641 7.00821 2.84144 7.26318 2.68166 7.57678C2.5 7.9333 2.5 8.40001 2.5 9.33343ZM14.1667 12.0834C14.1667 12.3136 13.9801 12.5001 13.75 12.5001C13.5199 12.5001 13.3333 12.3136 13.3333 12.0834C13.3333 11.8533 13.5199 11.6668 13.75 11.6668C13.9801 11.6668 14.1667 11.8533 14.1667 12.0834Z"
        stroke={props?.stroke || "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet;

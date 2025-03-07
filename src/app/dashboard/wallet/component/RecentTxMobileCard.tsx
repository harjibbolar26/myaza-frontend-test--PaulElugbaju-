import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { IRecentTx } from "../../constant";

const RecentTxMobileCard = ({ tx }: { tx: IRecentTx }) => {
  return (
    <div className="font-karla">
      <div className="bg-background p-6 rounded-lg w-full">
        <div className="flex items-center gap-3 py-1 flex-1">
          <div
            className={twMerge(
              "relative w-7 h-7 rounded-full",
              tx.id === "adobe-1" || tx.id === "adobe-2"
                ? "bg-[#EAE5FA]"
                : "bg-[#F2FAE5]"
            )}
          >
            <Image
              src={`/${tx.logo}`}
              alt={tx.name}
              fill
              sizes="(max-width: 768px) 100vw, 60px"
              className="rounded-full object-contain p-1"
            />
          </div>
          <p>Adobe</p>
        </div>
        <p className="text-subdued mt-1">Adobe after Virtual Card top-up</p>
        <div className="flex justify-between items-center w-full my-1">
          <p className="py-1 text-subdued text-sm">{tx.amount}</p>
          <p className="py-1 text-xs">
            {" "}
            <span className="text-[#02B15A] bg-[#193345] w-fit rounded-lg p-1">
              {tx.status}
            </span>
          </p>
        </div>
        <p className="text-subdued text-sm">{tx.date}</p>
      </div>
    </div>
  );
};

export default RecentTxMobileCard;

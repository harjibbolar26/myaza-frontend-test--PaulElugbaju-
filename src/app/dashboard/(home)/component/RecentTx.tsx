"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RecentTtransactions } from "../../constant";

const RecentTx = () => {
  const pathname = usePathname();

  return (
    <div className="my-6">
      <div className="bg-background p-6 rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="lg:text-2xl text-lg font-semibold text-white">
            Recent Transactions
          </p>
          <Link href={"/"} className="text-secondary text-sm hover:underline">
            {pathname === "/dashboard/wallet" ? "See All" : "View All"}
          </Link>
        </div>
        <table className="w-full my-4">
          <thead className="text-secondary text-sm text-left p-2">
            <tr className="p-2">
              <th className="py-2">Name</th>
              <th className="py-2">Date</th>
              {pathname === "/dashboard/wallet" && (
                <th className="py-2">Description</th>
              )}
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {RecentTtransactions.map((tx, index) => (
              <tr
                key={index}
                className="text-white text-sm space-y-2 border-b border-b-[#2D2B4D]"
              >
                <td className="flex items-center gap-3 py-1 flex-1">
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
                      className="rounded-full object-contain p-1"
                      sizes="(max-width: 768px) 100vw, 60px"
                    />
                  </div>
                  <span>{tx.name}</span>
                </td>
                <td className="py-1 ">{tx.date}</td>
                {pathname === "/dashboard/wallet" && (
                  <td className="py-1 ">
                    <span>Adobe after Virtual Card top-up</span>
                  </td>
                )}
                <td className="py-1  flex-1">{tx.amount}</td>
                <td className="py-1  text-xs flex-1">
                  {" "}
                  <span className="text-[#02B15A] bg-[#193345] w-fit rounded-lg p-1">
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTx;

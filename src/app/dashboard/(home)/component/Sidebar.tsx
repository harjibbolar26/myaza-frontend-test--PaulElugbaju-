"use client";

import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface ISidebar {
  className?: string;
  setMenuOpen?: (open: boolean) => void;
}

export const sidebarItem = [
  { label: "Dashboard", icon: ICONS.Dashboard, path: "/dashboard" },
  {
    label: "Analytics",
    icon: ICONS.BarLineChart,
    path: "/dashboard/analytics",
  },
  {
    label: "My Wallet",
    icon: ICONS.Wallet,
    path: "/dashboard/wallet",
  },
  {
    label: "Accounts",
    icon: ICONS.User,
    path: "/dashboard/accounts",
  },
  {
    label: "Settings",
    icon: ICONS.Settings,
    path: "/dashboard/settings",
  },
];

const Sidebar: FC<ISidebar> = ({ className, setMenuOpen }) => {
  const pathname = usePathname();
  return (
    <div
      className={twMerge(
        "bg-[#1D1D41] z-50 w-64 min-h-screen fixed p-6 font-karla",
        className
      )}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <ICONS.Subtract />
          <div className="flex items-start">
            <div className="relative w-[60px] h-[26px]">
              <Image
                src={"/uifry.png"}
                alt="uifry_logo"
                fill
                sizes="(max-width: 768px) 100vw, 60px"
              />
            </div>
            <p className="text-[4px] text-white mt-1 ml-[2px] font-extrabold">
              TM
            </p>
          </div>
        </div>
        <div
          className="lg:hidden block cursor-pointer"
          onClick={() => setMenuOpen && setMenuOpen(false)}
        >
          <ICONS.X stroke="white" />
        </div>
      </div>

      <div className="mt-8">
        {sidebarItem.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            onClick={() => setMenuOpen && setMenuOpen(false)}
            className={`flex items-center gap-4 p-3 rounded-lg mb-3 ${
              pathname === item.path
                ? "bg-buttonMain text-background font-bold"
                : "hover:bg-[#D3D2D3]/10 text-white"
            }`}
          >
            <item.icon stroke={pathname === item.path ? "#1D1D41" : "white"} />
            <p>{item.label}</p>
          </Link>
        ))}
      </div>

      <hr className="bg-[#4B4B99] my-8" />

      <div className="flex flex-col gap-5 px-4 pt-3 text-white">
        <div className="flex gap-3">
          <ICONS.HelpCircle width={24} height={24} />
          <p>Help center</p>
        </div>
        <div className="flex gap-3">
          <ICONS.Moon width={24} height={24} />
          <p>Dark theme</p>
        </div>
      </div>

      <div className="absolute bottom-8">
        <div className="flex gap-3 items-center">
          <div className="relative w-10 h-10">
            <Image
              src={"/AliRiaz.png"}
              alt="AliRiaz"
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex gap-10 items-center">
            <div className="text-white">
              <p className="font-bold text-lg">Ali Riaz</p>
              <p className="text-sm">Web Developer</p>
            </div>
            <ICONS.ArrowDownBold stroke="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

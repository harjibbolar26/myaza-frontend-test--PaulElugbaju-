"use client";

import React, { useState, useEffect } from "react";
import Search from "./component/Search";
import { ICONS } from "@/assets";
import AnalyticsDashboard from "./component/Analytics";
import RecentTx from "./component/RecentTx";
import Activity from "./component/Activity";
import MyCard from "./component/MyCard";
import Sidebar from "./component/Sidebar";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // This ensures window-dependent code only runs on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="font-karla">
      <div className="flex md:flex-row flex-col md:justify-between md:items-center max-md:gap-4">
        <div className="">
          <div className="cursor-pointer lg:hidden block" data-testid="menu-icon">
            <MenuButton onClick={() => setOpenMenu(!openMenu)} />
          </div>
          <p className="lg:text-2xl text-lg font-bold">Welcome Back, Ali</p>
          <p className="lg:text-base text-subdued text-sm">
            Here&apos;s what&apos;s happening with your store today.
          </p>
        </div>
        {isClient && <Search />}
      </div>

      <div className="flex lg:flex-row flex-col items-start gap-6 my-6">
        <div className="lg:w-[60%] w-full">
          <div className="flex md:flex-row flex-col items-center gap-5 mb-6">
            <div className="bg-background rounded-2xl p-4 md:flex-1 w-full">
              <div className="flex items-end justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#64CFF6] h-10 w-10 rounded ">
                    {isClient && <ICONS.ArrowRightDown />}
                  </div>
                  <div>
                    <p className="text-secondary text-sm">Total Income</p>
                    <p className="lg:text-2xl text-lg font-bold">$632.000</p>
                  </div>
                </div>
                <div className="text-[#02B15A] bg-[#193345] px-3 py-1 rounded-3xl text-xs">
                  +1.29%
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-4 md:flex-1 w-full">
              <div className="flex items-end justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <div className="bg-[#6359E9] h-10 w-10 rounded ">
                    {isClient && <ICONS.ArrowRightUp />}
                  </div>
                  <div>
                    <p className="text-secondary text-sm">Total Outcome</p>
                    <p className="lg:text-2xl text-lg font-bold">$632.000</p>
                  </div>
                </div>
                <div className="text-[#E41414] bg-[#3C193B] px-3 py-1 rounded-3xl text-xs">
                  +1.29%
                </div>
              </div>
            </div>
          </div>
          {isClient && <AnalyticsDashboard />}
          {isClient && <RecentTx />}
        </div>
        <div className="rounded-2xl lg:w-[40%] w-full space-y-6">
          <div className="flex gap-6 lg:flex-col md:flex-row flex-col items-start">
            {isClient && <MyCard />}
            {isClient && <Activity />}
          </div>
        </div>
      </div>

      {openMenu && (
        <div className="fixed inset-0 bg-white/10 bg-opacity-10 backdrop-blur-sm z-500">
          <Sidebar className="!bg-primary" setMenuOpen={setOpenMenu} />
        </div>
      )}
    </div>
  );
};

const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <div onClick={onClick} className="cursor-pointer">
    <ICONS.Menu stroke="white" />
  </div>
);

export default Home;
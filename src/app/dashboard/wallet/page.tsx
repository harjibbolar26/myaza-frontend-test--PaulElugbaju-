"use client";

import React, { useState } from "react";
import Search from "../(home)/component/Search";
import WalletHero from "./component/WalletHero";
import RecentTx from "../(home)/component/RecentTx";
import RecentTxMobileCard from "./component/RecentTxMobileCard";
import { RecentTtransactions } from "../constant";
import { ICONS } from "@/assets";
import Sidebar from "../(home)/component/Sidebar";
import Link from "next/link";

const MyWallet = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="flex md:flex-row flex-col md:justify-between md:items-center max-md:gap-4">
        <div className="">
          <div className="cursor-pointer lg:hidden block" data-testid="menu-icon">
            <MenuButton onClick={() => setOpenMenu(!openMenu)} />
          </div>
          <p className="lg:text-2xl text-lg font-bold">My Wallets</p>
          <p className="text-subdued max-lg:text-sm">
            Manage all your wallets from here
          </p>
        </div>
        <Search />
      </div>
      <WalletHero />
      <div className="md:block hidden">
        <RecentTx />
      </div>
      <div className="md:hidden flex items-center justify-between">
        <p className="lg:text-2xl text-lg font-semibold text-white">
          Recent Transactions
        </p>
        <Link href={"#"} className="text-secondary text-sm hover:underline">
          See All
        </Link>
      </div>
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {RecentTtransactions.map((tx) => (
          <RecentTxMobileCard key={tx.id} tx={tx} />
        ))}
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

export default MyWallet;

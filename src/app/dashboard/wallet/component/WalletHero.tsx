import { ICONS } from "@/assets";
import Button from "@/ui-component/Button";
import React from "react";

const WalletHero = () => {
  return (
    <div className="my-6 bg-background rounded-lg p-6 font-karla">
      <p className="font-medium text-subdued max-lg:text-sm">Your consolidated balance</p>
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
        <p className="lg:text-[28px] text-lg font-bold">$34,780,267.08</p>
        <div className="flex items-center max-sm:justify-between gap-5">
          <Button
            variant="primary"
            className="font-bold !text-sm py-2 flex items-center gap-3"
          >
            <ICONS.Plus /> Add New Wallet
          </Button>
          <ICONS.CircleEllipsisHorizontal />
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6">
        <div className="rounded-lg border border-[#8477FF] p-6 my-4">
          <div className="flex items-start gap-3">
            <ICONS.NGN />
            <div className="mt-1">
              <p>NGN Wallet</p>
              <p className="text-subdued font-medium mt-1">
                Balance: 245,800.89
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[#8477FF] p-6 my-4">
          <div className="flex items-start gap-3">
            <ICONS.GBP />
            <div className="mt-1">
              <p>GBP Wallet</p>
              <p className="text-subdued font-medium mt-1">
                Balance: 245,800.89
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-[#8477FF] p-6 my-4">
          <div className="flex items-start gap-3">
            <ICONS.USD />
            <div className="mt-1">
              <p>USD Wallet</p>
              <p className="text-subdued font-medium mt-1">
                Balance: 245,800.89
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHero;

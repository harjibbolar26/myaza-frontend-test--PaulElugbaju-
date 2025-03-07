import Button from "@/ui-component/Button";
import Image from "next/image";
import React from "react";

const MyCard = () => {
  return (
    <div className="bg-background p-6 rounded-xl w-full md:min-h-[460px] font-karla">
      <h2 className="lg:text-2xl text-lg font-bold text-white">My Card</h2>
      <p className="text-secondary mt-1">Card Balance</p>
      <h2 className="lg:text-2xl text-lg font-bold text-white mt-4">$15,595.015</h2>
      <div className="relative sm:w-[390px] w-full h-[197px] my-4 mb-10 mx-auto">
        <Image src={"/card.png"} alt="card" fill className="object-contain" sizes="(max-width: 768px) 100vw, 60px"/>
      </div>
      <div className="flex items-center gap-4 my-3">
        <Button variant="primary" className="w-full p-2 text-sm">
          Manage Cards
        </Button>
        <Button variant="outlined" className="w-full p-2 text-sm">
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default MyCard;

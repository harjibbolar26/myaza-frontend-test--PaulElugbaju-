"use client";

import Button from "@/ui-component/Button";
import Select from "@/ui-component/Select";
import { useState } from "react";

export default function Activity() {
  const [period, setPeriod] = useState("Month");
  return (
    <div className="bg-background p-6 rounded-xl w-full lg:h-auto md:h-auto max-lg:min-h-[460px] max-md:h-auto relative font-karla">
      <div className="flex justify-between items-center mb-4">
        <h2 className="lg:text-2xl text-lg font-bold text-white">Activity</h2>
        <Select
          options={["Month", "Week", "Year"]}
          setState={setPeriod}
          label=""
          value={period}
          stroke="#8C89B4"
        />
      </div>

      <div className="flex justify-center mb-4">
        <div className="relative w-64 h-32">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <path
              d="M 20,100 A 80,80 0 0 1 180,100"
              fill="none"
              stroke="#3A3A5A"
              strokeWidth="20"
              strokeLinecap="butt"
              strokeDasharray="100 100"
              pathLength="100"
              className="transition-all duration-1000"
            />
            <path
              d="M 20,100 A 80,80 0 0 1 180,100"
              fill="none"
              stroke="#6359E9"
              strokeWidth="20"
              strokeLinecap="butt"
              strokeDasharray="55 100"
              pathLength="100"
              className="transition-all duration-1000"
            />
            <path
              d="M 20,100 A 80,80 0 0 1 180,100"
              fill="none"
              stroke="#64CFF6"
              strokeWidth="20"
              strokeLinecap="butt"
              strokeDasharray="30 100"
              strokeDashoffset="-55"
              pathLength="100"
              className="transition-all duration-1000"
            />
          </svg>
          {/* Center percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-white mt-8">75%</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-between items-center gap-4 mb-8">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#6359E9]"></div>
            <div className="">
              <span className="text-white">Daily payment</span>
            </div>
          </div>
          <span className="text-lg font-medium text-white">55%</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#64CFF6]"></div>
            <div className="">
              <span className="text-white">Hobby</span>
            </div>
          </div>
          <span className="text-lg font-medium text-white">20%</span>
        </div>
      </div>

      <div className="max-lg:absolute bottom-10 right-0 w-full max-lg:px-6">
        <Button
          variant="outlined"
          className="w-full bg-transparent text-buttonMain border-buttonMain hover:bg-[#2d2a54] transition-colors p-2"
        >
          See All Activity
        </Button>
      </div>
    </div>
  );
}

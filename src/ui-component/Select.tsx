/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ICONS } from "@/assets";
import { FC, useEffect, useRef, useState } from "react";

type CustomSelectProps = {
  options: string[];
  setState: (value: any) => void;
  value?: string;
  label: string;
  error?: string;
  className?: string;
  stroke?: string;
  valueClassName?: string;
};

const Select: FC<CustomSelectProps> = (props) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.value || "");
  const customSelectRef = useRef<HTMLDivElement>(null);

  const onSelect = (option: string) => {
    setSelectedValue(option);
    props.setState(option);
    setOpenOptions(false);
  };

  useEffect(() => {
    if (props.value) {
      const selectedValue = props.options.find((p) => p === props.value);
      setSelectedValue(selectedValue || "");
    }
  }, [props.value]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      customSelectRef.current &&
      !customSelectRef.current.contains(event.target as Node)
    ) {
      setOpenOptions(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={customSelectRef} className="relative">
      {props.label && (
        <p className="mb-3 text-mainText lg:text-[16px] text-[14px]">
          {props.label}
        </p>
      )}
      <div
        onClick={() => setOpenOptions((prev) => !prev)}
        id="select-container"
        className={`w-full py-1 rounded-[4px] bg-inherit border border-[#8C89B4] flex items-center justify-between gap-1 px-2 ${props?.className}`}
      >
        <p
          className={` flex-1 capitalize text-[#8C89B4] text-xs ${props?.valueClassName}`}
        >
          {selectedValue?.toString()?.toLowerCase()}
        </p>

        <ICONS.ArrowDownBold
          stroke={props?.stroke}
          onClick={() => setOpenOptions((prev) => !prev)}
          className=" ml-4"
        />
      </div>
      {props.error && (
        <p className="text-red-600 mt-1 text-sm">{props.error}</p>
      )}
      {openOptions && (
        <div
          id="select-options"
          className={`absolute  max-h-52 overflow-y-auto left-0 top-[100%] mt-1 z-[1000] w-full  border border-solid border-[#8C89B4] rounded-lg shadow-xl bg-[#8C89B4]  `}
        >
          {props.options?.map((option, index) => (
            <p
              key={index}
              onClick={() => onSelect(option)}
              className={`cursor-pointer px-1 text-mainText text-xs capitalize  border-[.5px] border-solid border-[#8C89B4]  bg-[#8C89B4] py-1 hover:bg-[#CCDBEB66]`}
            >
              {option.toLowerCase()}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

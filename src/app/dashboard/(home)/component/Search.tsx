"use client";

import { ICONS } from "@/assets";
import Input from "@/ui-component/Input";
import React from "react";
import { useForm } from "react-hook-form";

const Search = () => {
  const { control } = useForm({
    defaultValues: {
      searchQuery: "",
    },
  });

//   const query = watch("searchQuery");

  return (
    <div className="font-karla">
      <div className="relative">
        <Input
          control={control}
          name="searchQuery"
          placeholder="Search for anything..."
          className="!text-[#AEABD8] !text-xs"
          containerClass="border-none !bg-background md:!w-[380px]"
        />
        <div className="absolute top-1/4 right-4">
          <ICONS.SearchIcon width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default Search;

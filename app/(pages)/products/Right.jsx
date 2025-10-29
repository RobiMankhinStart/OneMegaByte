import ProCard from "@/app/components/Common/ProCard";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Right = () => {
  return (
    <div className="mainDiv w-[900px]  font-inter">
      <div className="top  flex items-center justify-between">
        <h3 className="text-[#6C6C6C] text-lg font-medium">
          Selected Products :
          <span className="text-black font-medium text-[20px]">85</span>
        </h3>
        <div className="w-[256px] border border-[#D4D4D4] rounded-md flex justify-between py-3 px-4">
          <p className="text-sm">By rating</p>
          <IoIosArrowDown className="text-[24px]" />
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
        <ProCard />
      </div>
    </div>
  );
};

export default Right;

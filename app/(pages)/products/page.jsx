"use client";
import Left from "@/app/components/Products/Left";
import React from "react";
import Right from "./Right";

const page = () => {
  return (
    <div className="">
      <div className="container">
        <div className="mainDiv  mt-6 flex gap-8">
          <div className="left">
            <Left />
          </div>
          <div className="right">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

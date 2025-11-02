import Left from "@/app/components/Products/Left";

import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import ProCard from "@/app/components/Common/ProCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 10 },
  });
  return res.json();
}
export default async function page() {
  const Products = await getProducts();
  console.log(Products);
  return (
    <div className="">
      <div className="container">
        <div className="mainDiv  mt-6 flex gap-8">
          <div className="left">
            <Left />
          </div>
          <div className="right">
            {/* <Right /> */}
            <div className="mainDiv  font-inter">
              <div className="top flex items-center justify-between">
                <h3 className="text-[#6C6C6C] text-lg font-medium">
                  Selected Products :
                  <span className="text-black font-medium text-[20px]">
                    {Products.products.length}
                  </span>
                </h3>
                <div className="w-[256px] border border-[#D4D4D4] rounded-md flex justify-between py-3 px-4">
                  <p className="text-sm">By rating</p>
                  <IoIosArrowDown className="text-[24px]" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                {Products.products?.map((item) => (
                  <ProCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

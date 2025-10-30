import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#211c24]">
      <div className="container">
        <div className=" py-[188px] pl-[160px] bg-contain bg-no-repeat bg-right bg-[url('../public/BannnerIphoneImg.png')]">
          <p className=" text-[#7a777c] text-[25px] font-inter font-semibold">
            Pro.Beyond.
          </p>
          <h1 className="!m-0 my-6 font-thin text-white text-[96px] font-inter">
            IPhone 14 <span className="font-semibold">Pro</span>
          </h1>
          <p className=" mb-6 text-[#909090] text-[18px] font-inter font-medium">
            Created to change everything for the better. For everyone
          </p>
          <Link
            className="text-white inline-block border-white border rounded-md text-[16px] font-medium font-inter w[191px] py-4 px-[56px]"
            href={"/products"}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

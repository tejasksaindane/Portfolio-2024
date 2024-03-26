"use client";

import React from "react";
import { CodeXml } from "lucide-react";
import Link from "next/link";

const PortfolioCard = ({
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  stack,
  site,
}: any) => {
  return (
    <div className="flex w-[320px] h-[400px] md:w-[540px] md:h-[400px]  bg-[#fff] dark:bg-[#151030] m-auto rounded-2xl flex-col shadow-xl p-3">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" w-full h-[230px] md:h-[300px] rounded-2xl bg-cover"
      >
        <div className=" flex justify-end mx-[2px] my-[2px]">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src="./assets/github.png"
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 ">
        <Link href="#">
          <h6 className="dark:text-[#DEDEDE] font-bold text-24px flex w-[150px] mt-[15px] bg-[#915EFF] rounded-full bg-blend-overlay bg-opacity-20">
            <span className="bg-[#915EFF] p-[4px] rounded-full text-white">
              <CodeXml />
            </span>
            <span className="px-[5px] py-[5.5px] text-sm">{name}</span>
          </h6>
        </Link>
        <p className="mt-2 text-secondary text-[12px] dark:text-[#DEDEDE] font-semibold">
          {stack}
        </p>
        <p className="text-xs pt-1">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;

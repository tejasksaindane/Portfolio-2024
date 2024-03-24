"use client";

import Image from "next/image";
import React from "react";
import { ExternalLink } from "lucide-react";
import { CodeXml } from "lucide-react";

const imageStyle = {
  borderRadius: "25px",
  padding: "10px",
  width: "100%",
  height: "100%",
  //   objectFit: "cover",
};

const PortfolioCard = ({
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
}: any) => {
  return (
    <div className="flex w-[320px] h-[400px] md:w-[540px] md:h-[400px]  bg-[#fff] dark:bg-[#151030] m-auto rounded-2xl flex-col shadow-xl -z-50">
      <div className="relative w-full h-[230px] md:h-[300px] rounded-2xl">
        <img
          src={image}
          style={imageStyle}
          alt="Image"
          //   loading="lazy"
          className="object-cover w-full h-full p-[10px]"
        />
        <div className="absolute inset-0 flex justify-end m-3 ">
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

      <div className="p-[20px] mt-[-30px]">
        <h6 className="dark:text-[#DEDEDE] font-bold text-24px flex w-[150px] mt-[15px] bg-[#915EFF] rounded-full bg-blend-overlay bg-opacity-20">
          <span className="bg-[#915EFF] p-[4px] rounded-full text-white">
            <CodeXml />
          </span>
          <span className="px-[5px] py-[5.5px] text-sm">{name}</span>
        </h6>
        <p className="mt-2 text-secondary text-[12px] dark:text-[#DEDEDE]">
          {description}
        </p>
        <a href="#" className="flex ">
          <p className="px-[5px] py-[4px] text-sm">View site</p>
          <ExternalLink />
        </a>
      </div>

      <div className="flex"></div>
    </div>
  );
};

export default PortfolioCard;

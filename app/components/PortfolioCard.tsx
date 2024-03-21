"use client";

import Image from "next/image";
import React from "react";
import onePlus from "../constants/assets/onePlus.png";
import github from "../constants/assets/github.png";
import { Tilt } from "react-tilt";
import { ExternalLink } from "lucide-react";

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
    <div className="flex w-[320px] h-[400px] md:w-[540px] md:h-[400px]  bg-[#fff]  dark:bg-[#151030]  m-auto rounded-2xl flex-col shadow-xl ">
      <div className="relative w-full h-[230px] md:h-[300px] rounded-2xl">
        <Image src={onePlus} style={imageStyle} alt="Image" loading="lazy" />
        <div className="absolute inset-0 flex justify-end m-3 ">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <Image
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="p-[20px] mt-[-30px]">
        <h3 className="dark:text-[#DEDEDE] font-bold text-24px">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] dark:text-[#DEDEDE]">
          {description}
        </p>
        <a href="#">
          <ExternalLink />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;

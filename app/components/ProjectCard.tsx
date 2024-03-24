"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

import React from "react";

const imageStyle = {
  borderRadius: "25px",
  padding: "20px",
  width: "320px",
  height: "220px",
  //   objectFit: "cover",
};

const ProjectCard = ({
  id,
  name,
  description,
  stack,
  image,
  source_code_link,
  site,
}: any) => {
  return (
    <div className="flex w-[320px] h-[400px] bg-[#fff]  dark:bg-[#151030]  m-auto rounded-2xl flex-col shadow-xl -z-50">
      <div className="relative w-full h-[230px] rounded-2xl">
        <img src={image} style={imageStyle} alt="Image" loading="lazy" />
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
        <h3 className="dark:text-[#DEDEDE] font-bold text-24px">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] dark:text-[#DEDEDE]">
          {description}
        </p>
        <p className="mt-2 text-secondary text-[14px] dark:text-[#DEDEDE] px-[10px] py-[5px] bg-[#915EFF]  bg-blend-overlay bg-opacity-20 rounded-md ">
          {stack}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

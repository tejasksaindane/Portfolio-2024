"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

import React from "react";

// const imageStyle = {
//   borderRadius: "25px",
//   padding: "20px",
//   width: "320px",
//   height: "220px",
//   //   objectFit: "cover",
// };

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
    <div className="flex w-[320px] h-[420px] bg-[#fff]  dark:bg-[#151030]  m-auto rounded-2xl flex-col shadow-xl z-auto p-3">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" w-full h-[230px] rounded-2xl bg-cover"
      >
        <div className=" flex justify-end mx-[2px] my-[2px] ">
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
        <div className="w-full mt-[200px]">
          <h3 className="dark:text-[#DEDEDE] font-semibold text-sm tracking-wide">{name}</h3>
          <p className="text-xs tracking-wide dark:text-[#DEDEDE] pt-2">
            {description}
          </p>
          <p className="my-2 text-xs dark:text-[#DEDEDE] px-[10px] py-[5px] bg-[#915EFF]  bg-blend-overlay bg-opacity-20 rounded-md ">
            {stack}
          </p>
          <a href={site} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

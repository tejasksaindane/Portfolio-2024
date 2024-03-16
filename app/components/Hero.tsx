"use client";
import React from "react";

import { Linkedin, Twitter } from "lucide-react";
import { FileText } from "lucide-react";
import { Github } from "lucide-react";
import FloatingBtn from "./FloatingBtn";


const Hero = () => {
  return (
    <>
      <div className="h-full flex justify-center items-center mt-[120px] flex-col tracking-wide md:h-[100%]">
        <p className="mx-[10px] text-[14px]">
          LET'S MAKE YOUR ONLINE PRESENCE SHINE.
        </p>
        <h1 className="text-3xl sm:justify-center lg:text-7xl py-4 font-extrabold dark:text-[#DEDEDE] text-[#18181b]">
          Hi, I'm
          <span className="text-3xl text-[#915eff] lg:text-7xl font-extrabold">
            {" "}
            Tejas Saindane
          </span>
        </h1>
        <h1 className=" px-[30px] text-2xl dark:text-[#DEDEDE] lg:text-5xl font-extrabold text-[#18181b] tracking-wide">
          - A Software Engineer
        </h1>
        <h3 className="px-[20px] pt-[20px] text-center text-[14px] tracking-wide">
          Focusing in full-stack development, I excel in crafting responsive web
          applications
          <br />
          that seamlessly integrate with diverse technologies.
        </h3>
        <div className=" flex m-auto pt-[30px] md:w-[50%] gap-6 justify-center  ">
          <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915eff] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
            <Linkedin className="m-auto" />
          </div>
          <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915eff] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
            <Github className="m-auto" />
          </div>
          <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915eff] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
            <Twitter className="m-auto" />
          </div>
          <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915eff] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
            <FileText className="m-auto" />
          </div>
        </div>
      </div>
      <FloatingBtn />
    </>
  );
};

export default Hero;
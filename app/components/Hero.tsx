"use client";
import React from "react";

import { Linkedin, Twitter } from "lucide-react";
import { FileText } from "lucide-react";
import { Github } from "lucide-react";
import FloatingBtn from "./FloatingBtn";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["- A Fullstack Developer"],
    loop: 5000,
  });

  return (
    <>
      <div className="h-full flex justify-center items-center mt-[100px] flex-col tracking-wide md:h-[100%]">
        <p className="mx-[10px] text-[14px]">
          LET'S MAKE YOUR ONLINE PRESENCE SHINE.
        </p>
        <h1 className="text-3xl sm:justify-center lg:text-7xl py-4 font-bold dark:text-[#DEDEDE] text-[#18181b]">
          Hi, I'm
          <span className="text-3xl text-[#915EFF] lg:text-7xl font-extrabold">
            {" "}
            Tejas Saindane
          </span>
        </h1>
        <h1 className=" px-[30px] text-2xl dark:text-[#DEDEDE] lg:text-5xl font-bold text-[#18181b] tracking-wide -z-[20]">
          {text}
          <Cursor cursorColor="#915EFF" />
          {/* - A Fullstack Developer" */}
        </h1>
        <h3 className="px-[20px] pt-[20px] text-center text-[14px] tracking-wide">
          Focusing in full-stack development, I excel in crafting responsive web
          applications
          <br />
          that seamlessly integrate with diverse technologies.
        </h3>
        <div className=" flex flex-col m-auto mt-[20px] md:w-[50%] gap-6 justify-center  ">
          <div className="flex m-auto justify-center gap-4">
            <a href="https://www.linkedin.com/in/tejas-saindane-xxiv112000/">
              <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915EFF] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
                <Linkedin className="m-auto" />
              </div>
            </a>
            <a href="https://github.com/tejasksaindane">
              <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915EFF] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
                <Github className="m-auto" />
              </div>
            </a>
            <a href="https://x.com/TejasSaindane2?t=JcqwGLQMMgI2DRGm7bdZow&s=09">
              <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915EFF] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500">
                <Twitter className="m-auto" />
              </div>
            </a>
            <div className="flex w-[40px] h-[40px] shadow-xl dark:shadow-none dark:bg-[#915EFF] dark:text-white rounded-full md:w-[60px] md:h-[60px] hover:scale-[1.2] hover:ease-in-out duration-500 cursor-pointer">
              <FileText className="m-auto" />
            </div>
          </div>
          <div className="-z-[10] cursor-pointer">
            <FloatingBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

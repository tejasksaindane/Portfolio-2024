"use client";

import Image from "next/image";
import React from "react";
import javascript from "../constants/assets/javascript.webp";
import ReactImage from "../constants/assets/React.webp";
import Tailwind from "../constants/assets/Tailwind.webp";
import Node from "../constants/assets/node.webp";
import Mongo from "../constants/assets/mongo.webp";
import Nxt from "../constants/assets/Next.webp";
import Typescript from "../constants/assets/Typescript.webp";
import Redux from "../constants/assets/Redux.webp";
import html from "../constants/assets/html.png";
import css from "../constants/assets/css.png";
import Socket from "../constants/assets/SocketIo.webp";

const imageStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "10px",
};

const myskills = () => {
  return (
    <div className="h-screen  md:pt-[50px]">
      <div className="flex flex-col m-auto  h-[80%] w-[80%] rounded-2xl md:my-6 dark:bg-[#1D1836] shadow-xl bg-[#fff] border-xl ">
        <h1 className="text-center py-[20px] text-2xl  md:text-3xl font-bold md:mt-[67px] text-[#18181B] dark:text-[#DEDEDE] tracking-wide">
          MY SKILLS
        </h1>
        <div className="flex m-auto pb-[20px] w-[60%] justify-between flex-wrap md:w-[60%] md:gap-6 ">
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image
              src={javascript}
              style={imageStyle}
              alt="Image"
              loading="lazy"
            />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image
              src={ReactImage}
              style={imageStyle}
              alt="Image"
              loading="lazy"
            />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] md:py-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image
              src={Tailwind}
              style={imageStyle}
              alt="Image"
              loading="lazy"
            />
          </div>
          <div className=" px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={Nxt} style={imageStyle} alt="Image" loading="lazy" />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={Mongo} style={imageStyle} alt="Image" loading="lazy" />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={Node} style={imageStyle} alt="Image" loading="lazy" />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image
              src={Typescript}
              style={imageStyle}
              alt="Image"
              loading="lazy"
            />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={Redux} style={imageStyle} alt="Image" loading="lazy" />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={html} style={imageStyle} alt="Image" loading="lazy" />
          </div>
          {/* <div className="md:px-[10px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={css} style={imageStyle} alt="Image" loading="lazy" />
          </div> */}
          <div className="px-[10px] py-[10px] md:px-[10px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <Image src={Socket} style={imageStyle} alt="Image" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default myskills;

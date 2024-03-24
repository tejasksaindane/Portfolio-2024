"use client";

import Image from "next/image";
import React from "react";;

const imageStyle = {
  width: "60px",
  height: "60px",
  borderRadius: "10px",
};

const myskills = () => {
  return (
    <div className="h-screen  md:pt-[50px]">
      <div className="flex flex-col m-auto  h-[80%] w-[80%] rounded-2xl md:my-6 dark:bg-[#1D1836] shadow-xl bg-[rgb(255,255,255)] border-xl ">
        <p className="text-center py-[20px] text-sm  md:text-sm font-bold  md:mt-[67px] text-[#18181B] dark:text-[#DEDEDE] tracking-wide">
          Tech Stack
        </p>
        {/* <div className="flex m-auto pb-[20px] w-[60%] justify-between flex-wrap md:w-[60%] md:gap-6 ">
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img
              src="./assets/css.png"
              style={imageStyle}
              alt="Image"
              loading="lazy"
             
            />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img
              src="./assets/html.png"
              style={imageStyle}
              alt="Image"
              loading="lazy"
             
            />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] md:py-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img
              src="./assets/Tailwind.webp"
              style={imageStyle}
              alt="Image"
              loading="lazy"
              width={50}
            />
          </div>
          <div className=" px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/Typescript.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/SocketIo.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/React.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img
              src="./assets/Next.webp"
              style={imageStyle}
              alt="Image"
              loading="lazy"
              width={50}
            />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/node.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div>
          <div className="px-[10px] py-[10px] md:px-[15px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/Redux.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div>
          {/* <div className="md:px-[10px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/node.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div> */}
        {/* <div className="px-[10px] py-[10px] md:px-[10px] hover:scale-[1.2] hover:ease-in-out duration-500 ">
            <img src="./assets/mongo.webp" style={imageStyle} alt="Image" loading="lazy"
            width={50} />
          </div>
        </div> */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-4">Marquee Item 1</span>
            <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span>
          </div>

          <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-4">Marquee Item 1</span>
            <span className="text-4xl mx-4">Marquee Item 2</span>
            <span className="text-4xl mx-4">Marquee Item 3</span>
            <span className="text-4xl mx-4">Marquee Item 4</span>
            <span className="text-4xl mx-4">Marquee Item 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default myskills;

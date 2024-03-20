"use client";

import React from "react";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import animationData from "../constants/Lottie/Portfolio.json";
import { SquareArrowUpRight } from "lucide-react";

const about = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const { View } = useLottie(defaultOptions);

  return (
    <div className="flex-1 flex-row w-full h-full lg:flex ">
      <div className="flex-grow-3 flex-wrap  mt-[100px]">
        <div className="w-[250px] h-[300px] m-auto pt-[50px] z-0 lg:mx-[40px]">
          {View}
        </div>
      </div>
      <div className="flex-grow-7 lg:pt-[100px] lg:px-6">
        <h1 className="p-[25px] text-3xl">
          <span className="text-[#915EFF] text-6xl ">H</span>ELLO,
          <br />
          <span className="text-[#915EFF] text-3xl font-bold pl-1">I</span> AM
          TEJAS
        </h1>
        <p className="px-[25px] ">
          As a dedicated software engineer passionate about transforming
          intricate concepts into streamlined solutions, I specialize in
          proficient full-stack development. I excel in seamlessly integrating
          frontend and backend technologies, harnessing the power of React JS,
          Next JS, and Node JS to engineer dynamic and scalable web
          applications. In backend development, I masterfully utilize Express to
          navigate intricate routing, middleware, and functionalities with
          finesse. If you're in search of a strategic and results-oriented
          software engineer with a demonstrated capability to actualize your
          software vision, let's connect! Explore my portfolio and initiate the
          conversation — I'm enthusiastic about collaborating and transforming
          your concepts into reality.
        </p>
        <a
          href="#"
          className="px-[25px] mb-[40px] flex mt-[20px] cursor-pointer gap-2 text-[#915EFF]"
        >
          Click Here <SquareArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default about;

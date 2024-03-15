import React from "react";

import { Linkedin, Twitter } from "lucide-react";
import { FileText } from "lucide-react";
import { Github } from "lucide-react";
import { styles } from "../../Styles";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[100px] flex-col">
        <p>LET'S MAKE YOUR ONLINE PRESENCE SHINE.</p>
        <h1>
          Hi, I'm
          <span className="text-[#915eff] font-extrabold"> Tejas Saindane</span>
        </h1>
        <h1>A Software Engineer</h1>
        <h3 className="text-center">
          Focusing in full-stack development, I excel in crafting responsive web
          applications
          <br />
          that seamlessly integrate with diverse technologies.
        </h3>
      </div>
      <div className="flex justify-center pt-4 gap-6">
        <div className="flex w-[80px] h-[80px] shadow-xl dark:shadow-none dark:bg-[#915eff] dark:text-white rounded-full">
          <Linkedin className="m-auto" />
        </div>
        <div className="flex w-[80px] h-[80px]  shadow-xl rounded-full">
          <Github className="m-auto" />
        </div>
        <div className="flex w-[80px] h-[80px] shadow-xl rounded-full">
          <Twitter className="m-auto" />
        </div>
        <div className="flex w-[80px] h-[80px] shadow-xl rounded-full">
          <FileText className="m-auto" />
        </div>
      </div>
    </>
  );
};

export default Hero;

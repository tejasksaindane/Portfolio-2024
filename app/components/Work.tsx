import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/Switch-theme-duration";

const Work = () => {
 
  return (
    <>
      <div className="h-full mb-[-50px] pt-[80px] lg:mb-[30px] lg:-mt-[30px]">
        <h1 className="dark:text-[#DEDEDE] text-sm font-bold text-center mt-[50px] text-[#18181B] tracking-wide">
          MY PROJECTS
        </h1>
        <div className="flex pt-[50px] gap-4 justify-center h-screen w-full flex-wrap md:px-[80px]">
          {projects.map((project, id) => (
            <ProjectCard key={`experience-${id}`} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;

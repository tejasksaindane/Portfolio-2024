import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants/Switch-theme-duration";

const Work = () => {
  console.log(projects);
  return (
    <>
      <div className="">
        <h1 className="dark:text-[#DEDEDE] text-2xl font-bold text-center mt-[50px] text-[#18181B]">
          My Projects
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

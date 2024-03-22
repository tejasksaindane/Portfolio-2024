import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolios } from "../constants/Switch-theme-duration";

const PortfolioPage = () => {
  return (
    <>
      <div className="h-full lg:mb-[30px] ">
        <h1 className="dark:text-[#DEDEDE]  font-bold text-center mt-[70px] text-[#18181B] tracking-wide text-sm">
          MY PROJECTS
        </h1>
        <div className="flex pt-[50px] gap-4 justify-center h-screen w-full flex-wrap md:px-[80px] md:mb-[20px]">
          {portfolios.map((portfolio, id) => (
            <PortfolioCard key={`experience-${id}`} {...portfolio} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;

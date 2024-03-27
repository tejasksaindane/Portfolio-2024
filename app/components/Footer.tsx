"use client";

import React from "react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full min-h-min flex flex-col dark:bg-[#151030] bg-[#EDEDED] rounded-t-xl md:mt-[100px]">
      {/* ----------Heading Part------------------------ */}
      <div className="w-full flex text-center justify-center">
        <p className="text-sm tracking-wide py-4">GET IN CONTACT</p>
      </div>
      {/* ----------middle  section--------------------- */}
      <div className="flex-1 md:flex lg:flex ">
        <div className=" flex-grow-5  w-full flex justify-center">
          <span className="px-2">
            <Mail size={20} />
          </span>
          <p className="text-sm tracking-wide">tejassaindane4483@gmail.com</p>
        </div>
        <div className="w-full flex flex-grow-5 justify-center py-2">
          <span className="px-2">
            <Phone size={17} />
          </span>
          <p className="text-sm tracking-wide">+91 - 9156403419</p>
        </div>
      </div>
      {/* ------------------Third Section ----------------------------- */}
      <div className="w-full h-[100%] py-4">
        <div className="w-[60%] border-y-[0.1px] dark:border-[#EDEDED]  m-auto "></div>
        <div className="flex justify-center gap-6 py-3 md:py-6 cursor-pointer">
          <span className="">
            <a href="https://www.facebook.com/tejas.saindane.142">
              <FaFacebookF />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/_saindane.tejas_/">
              <AiFillInstagram />
            </a>
          </span>
          <span>
            <a href="https://x.com/TejasSaindane2?t=JcqwGLQMMgI2DRGm7bdZow&s=09">
              <FaXTwitter />
            </a>
          </span>
          <span>
            <a href="https://github.com/tejasksaindane">
              <FaGithubAlt />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/tejas-saindane-xxiv112000/">
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

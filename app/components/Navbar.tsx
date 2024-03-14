"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { switchThemeDuration } from "../constants";

const links = [
  { url: "/", title: "Home" },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-30 border-b ${switchThemeDuration}`}
    >
      {/* Logo */}
      <div className="">
        <Link href="/" className="text-sm">
          <p className="text-[18px] font-bold cursor-pointer flex dark:text-white">
            Tejas Saindane
          </p>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 text-black dark:text-white">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X className="text-white" />
          ) : (
            <Menu className="dark:text-white" />
          )}
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex justify-center items-center flex-col gap-8 text-2xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

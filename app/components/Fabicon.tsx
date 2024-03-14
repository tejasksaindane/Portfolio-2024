"use client";

import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { switchThemeDuration } from "../constants";
import { useTheme } from "next-themes";

const Fabicon = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    // <div className="h-10 w-10 border-2 fixed bottom-10 right-10 cursor-pointer rounded-full">
    <div
      className={`${switchThemeDuration}h-10 w-10  fixed bottom-10 right-10 cursor-pointer text-white bg-blue-500 dark:bg-[#212933] px-2 py-2 rounded-full `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </div>
    // </div>
  );
};

export default Fabicon;

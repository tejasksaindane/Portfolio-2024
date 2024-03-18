"use client";

import { motion } from "framer-motion";

const FloatingBtn = () => {
  return (
    <>
      <div className=" xs:bottom-10 bottom-[10px] w-full flex justify-center items-center mt-[30px] z-0">
        <a href="/about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 dark:border-[#DEDEDE] border-[#18181b] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className=" dark:bg-[#DEDEDE]  w-4 h-3 rounded-full bg-[#18181b] mb-1"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default FloatingBtn;

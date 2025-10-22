"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { GoShieldCheck, GoShieldX } from "react-icons/go";

export default function ClerkPassVault() {
  const [isHovered, setIsHovered] = useState(false);

  const childVariants = {
    open: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
    close: {
      y: 0,
    },
  };

  const parentVariants = {
    open: {},
    close: {},
  };

  const inputVariants = {
    open: {
      y: -7,
      border: "1px solid var(--color-cyan-400)",
      boxShadow: "0 0 10px 1px var(--color-cyan-400)",
      transition: {
        duration: 0.3,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
    close: {
      y: 0,
    },
  };

  const passVariants = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
      },
    },
    close: {
      opacity: 0,
      filter: "blur(10px)",
    },
  };

  const passIconVariants = {
    open: {
      y: -80,
      color: "red",
      transition: {
        delay: 3,
        duration: 0.5,
      },
    },
    close: {
      y: 13,
      color: "white",
    },
  };

  const passIconSwitchVariants = {
    open: {
      y: -16,
      color: "green",
      transition: {
        delay: 3,
        duration: 0.5,
      },
    },
    close: {
      y: 80,
      color: "white",
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={parentVariants}
      animate={isHovered ? "open" : "close"}
      initial={false}
      exit="close"
      className="w-100 h-60 rounded-2xl bg-linear-to-b from-[#212126] relative to-[#141417] border border-neutral-800 flex flex-col p-7 justify-between overflow-clip"
    >
      <div></div>
      <motion.div
        variants={childVariants}
        className="absolute h-52 w-[80%] mx-auto flex justify-center items-center inset-0 mt-10 bg-neutral-400 [clip-path:polygon(10%_0,90%_0,100%_10%,100%_50%,0%_50%,0%_10%)] [mask-image:linear-gradient(to_bottom,black_40%,transparent_50%)]"
      ></motion.div>
      <motion.div
        variants={childVariants}
        className="absolute h-52 w-[79%] mx-auto flex justify-center items-center inset-0 mt-[42px] bg-linear-to-b from-[#212126] to-[#141417] [clip-path:polygon(10%_0,90%_0,100%_10%,100%_50%,0%_50%,0%_10%)] [mask-image:linear-gradient(to_bottom,black_48%,transparent_100%)]"
      ></motion.div>
      <motion.div
        variants={childVariants}
        className="p-1 rounded-full bg-black h-16 w-16 flex items-center justify-center absolute left-[50%] z-20 top-3 -translate-x-1/2  "
      >
        <div className="bg-neutral-700  rounded-full h-full w-full flex flex-col items-center overflow-clip">
          <motion.div variants={passIconVariants}>
            <GoShieldX size={30} />
          </motion.div>
          <motion.div variants={passIconSwitchVariants}>
            <GoShieldCheck size={30} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={inputVariants}
        className="z-20 w-[70%] flex items-center h-7 border mx-auto mt-14 rounded-lg p-0.5  border-black/70 bg-black/40 shadow-xl shadow-black/50 tracking-[10px] pl-3 text-cyan-400"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
          <motion.p key={index} variants={passVariants}>
            •
          </motion.p>
        ))}
      </motion.div>
      <div className="z-30  p-2 w-full">
        <p className="text-neutral-300 font-semibold text-sm">Passwords</p>
        <p className="text-neutral-400 text-xs mt-2 tracking-wide">
          Simple and secure password authentication, complete with breach
          detection and recovery options.
        </p>
      </div>
    </motion.div>
  );
}

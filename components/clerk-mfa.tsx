"use client";

import { motion, scale } from "motion/react";
import { useState } from "react";

export default function ClerkMFA() {
  const [isHovered, setIsHovered] = useState(false);

  const inputVariant = {
    open: {
      opacity: 1,
      filter: "blur(0)",
      border: "1px solid var(--color-teal-500)",
      scale: 1,
    },
    close: {
      opacity: 0,
      filter: "blur(10px)",
      scale: 2,
    },
  };

  const containerVariant = {
    open: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
    close: {},
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-100 h-60 rounded-2xl bg-linear-to-b from-[#212126] to-[#141417] border border-neutral-800 flex flex-col p-10 justify-between"
    >
      <motion.div
        variants={containerVariant}
        animate={isHovered ? "open" : "close"}
        initial={false}
        className="flex items-center justify-center mx-auto gap-2 relative "
      >
        {/* Static inputs */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2 relative">
            <motion.input
              type="text"
              disabled
              className="w-8 h-10 bg-[#141417] rounded border border-neutral-800 shadow-xl shadow-neutral-900 text-center "
            ></motion.input>
            <motion.input
              variants={inputVariant}
              type="text"
              layoutId={`${index}`}
              defaultValue={isHovered ? (Math.random() * 9).toFixed(0) : ""}
              className="w-8 h-10 bg-[#141417] rounded border border-neutral-800 shadow-xl shadow-neutral-900 text-center absolute underline underline-offset-3 decoration-teal-500"
            ></motion.input>
          </div>
        ))}
      </motion.div>

      <div>
        <p className="text-sm text-neutral-300 font-semibold">
          MFA Authentication
        </p>
        <p className="text-xs text-neutral-400 mt-2">
          Each user's self-serve multifactor settings are enforced automatically
          during sign-in.
        </p>
      </div>
    </div>
  );
}

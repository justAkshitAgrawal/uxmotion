"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Hexagon } from "lucide-react";

export default function ClerkSession() {
  const content = [
    {
      title: "Device",
      desc: "MacBook Pro",
    },
    {
      title: "Browser",
      desc: "Chrome",
    },
    {
      title: "Location",
      desc: "New York",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    initial: {},
    hover: {},
  };

  const textContainerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const descVariants = {
    initial: {
      filter: "blur(6px)",
      opacity: 0,
    },
    hover: {
      filter: "blur(0)",
      opacity: 1,
    },
  };

  const titleVariants = {
    initial: {
      x: 80,
    },
    hover: {
      x: 3,
    },
  };

  const signOutButtonVariants = {
    initial: {
      opacity: 0.1,
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 1.7,
      },
    },
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[25rem] h-[30rem] overflow-clip  rounded-2xl bg-gradient-to-b relative from-[#212126] to-[#141417] border border-neutral-800 flex flex-col p-4 justify-between"
    >
      <div className="z-10 relative">
        <p className="text-sm font-semibold">Session Management</p>
        <p className="text-sm text-neutral-400 mt-2">
          Clerk manages the full session lifecycle, including critical security
          functionality like active device monitoring and session revocation.
        </p>
      </div>
      <div className="flex-1 mt-10 z-20">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
          className="flex flex-col w-[15rem] mx-auto items-center h-[17rem] rounded-xl bg-neutral-800/10 border border-neutral-800 p-4 shadow-xl shadow-black/60"
        >
          <div className="relative isolate z-40 mx-auto flex justify-center">
            <Laptop />
          </div>

          {/* Text Container */}
          <motion.div
            variants={textContainerVariants}
            className="flex flex-col gap-2 divide-y mt-10 w-full divide-neutral-600 relative "
          >
            {content.map((item, index) => (
              <motion.div key={index} className="pb-1 flex gap-5">
                <motion.p
                  variants={titleVariants}
                  style={{
                    marginLeft: !isHovered ? `-${index * 2}px` : 0,
                  }}
                  className="text-sm"
                  layoutId={`title-${index}`}
                >
                  {item.title}
                </motion.p>
                <motion.p
                  key={index}
                  variants={descVariants}
                  style={{
                    display: isHovered ? "block" : "none",
                    marginLeft: isHovered
                      ? `${(3 - index) * 8 + index * 2}px`
                      : 0,
                  }}
                  className="text-sm text-neutral-400 inset-0"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={signOutButtonVariants}
            className="mt-10 text-[10px] text-white border-neutral-600 w-full text-center py-1 border rounded-md"
          >
            Sign out device
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

const Laptop = () => {
  const laptopVariants = {
    initial: {
      rotateX: -70,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      rotateX: 10,
      transition: {
        duration: 0.6,
      },
    },
  };

  const hexagonVariants = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };

  return (
    <div className="relative isolate [perspective:1000px] mt-10">
      <motion.div
        variants={laptopVariants}
        transition={{
          ease: "easeInOut",
        }}
        className="[--screen-off-color:theme(colors.gray.900)] [--screen-on-color:theme(colors.gray.600)] absolute bottom-[calc(100%-0.0625rem)] left-1.5 flex h-[4.25rem] w-[6.5rem] origin-bottom items-center justify-center rounded-t border border-gray-600 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [transform-style:preserve-3d] before:absolute before:inset-[-0.0625rem] before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-black/40 before:from-[0.0625rem] before:to-black/80 before:transition-opacity before:duration-1000 before:group-hover:opacity-0 before:group-hover:duration-500 after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:rounded-t-full after:bg-gray-500 after:[transform:rotateX(90deg)_translateY(-1px)] [perspective:60px]"
      />
      <div className="relative h-[0.375rem] w-[7.25rem] rounded-b-md rounded-t-sm bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_1px_0px] shadow-white/10 before:absolute before:left-1/2 before:top-0 before:h-[0.125rem] before:w-[1.25rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_theme(colors.black/50%),inset_-2px_0_1px_-2px_theme(colors.black/50%),0_1px_0_theme(colors.white/10%)]">
        <motion.div
          variants={hexagonVariants}
          className="absolute left-1/2 -translate-x-1/2 bottom-6"
        >
          <Hexagon className="text-neutral-400" />
        </motion.div>
      </div>
    </div>
  );
};

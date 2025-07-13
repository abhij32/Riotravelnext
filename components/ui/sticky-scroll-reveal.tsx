"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => {
      // Adjust breakpoints to be more evenly distributed
      // This will make the last card transition earlier
      return index / (cardLength + 0.5); // Adding 0.5 to create space for the last card
    });

    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(30, 58, 138)", // blue-900
    "rgb(26, 45, 105)", // custom blue-black
    "rgb(22, 33, 72)", // darker blue
    "rgb(18, 21, 39)", // very dark blue
    "rgb(14, 14, 14)", // near black
  ];
  const linearGradients = React.useMemo(
    () => [
      "linear-gradient(to bottom right, rgb(6, 182, 212), rgb(16, 185, 129))", // cyan to emerald
      "linear-gradient(to bottom right, rgb(236, 72, 153), rgb(99, 102, 241))", // pink to indigo
      "linear-gradient(to bottom right, rgb(249, 115, 22), rgb(234, 179, 8))", // orange to yellow
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 scroll-smooth rounded-md p-4 mt-16  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 py-4">
        <div className="max-w-2xl snap-y snap-mandatory">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="my-20 snap-start snap-always"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-36" />
        </div>
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: activeCard === index ? 1 : 0,
              scale: activeCard === index ? 1 : 0.9,
              transition: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            {activeCard === index && item.content}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { Clouds } from "./Clouds";
import { ReverseClouds } from "./ReverseClouds";
import { motion, useAnimation } from "framer-motion";
import "../globals.css";

export function AllClouds() {
  const [scrollY, setScrollY] = useState(0);
  const reverseCloud = useAnimation();
  const cloud = useAnimation();

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleCloud() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight * 0.6) {
        cloud.start({
          x: -100,
          opacity: 0.3,
          transition: { duration: 1.5 },
        });
      } else {
        cloud.start({
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    }
    handleCloud();
    window.addEventListener("scroll", handleCloud);
    return () => {
      window.removeEventListener("scroll", handleCloud);
    };
  }, [cloud]);

  useEffect(() => {
    function handleReverseCloud() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        reverseCloud.start({
          x: 100,
          opacity: 0.3,
          transition: { duration: 1.5 },
        });
      } else {
        reverseCloud.start({
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    }
    handleReverseCloud();
    window.addEventListener("scroll", handleReverseCloud);
    return () => {
      window.removeEventListener("scroll", handleReverseCloud);
    };
  }, [reverseCloud]);

  function adjustBackgroundColor() {
    if (scrollY < 75) {
      return `rgba(49,62,80, ${(75 - scrollY) / 75})`;
    } else {
      return `rgba(173,160,166, ${(scrollY - 75) / 25})`;
    }
  }

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: adjustBackgroundColor(),
        transition: "background-color 2s",
      }}
    >
      <div className="w-full h-[500px]"></div>
      <div className="relative flex flex-wrap w-full h-screen">
        <motion.div
          animate={cloud}
          className="absolute flex justify-center w-1/2 top-10 lg:top-0 left-19 lg:left-14 z-20"
        >
          <Clouds duration={15} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute bottom-4 right-0 flex justify-center w-3/4 z-20"
        >
          <ReverseClouds duration={18} />
        </motion.div>{" "}
        <motion.div
          animate={cloud}
          className="absolute justify-center w-3/5 top-12 lg:top-20 left-14 z-20"
        >
          <Clouds duration={8} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute justify-center w-1/2 top-50 right-28 z-20"
        >
          <ReverseClouds duration={14} />
        </motion.div>
        <motion.div
          animate={cloud}
          className="absolute left-0 justify-center w-2/5 z-20"
        >
          <Clouds duration={11} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute justify-center w-1/3 top-10 right-2 z-20"
        >
          <ReverseClouds duration={12} />
        </motion.div>
        <div
          className="flex items-center justify-center w-full h-screen  text-black"
          style={{ color: "rgba(41,62,80,1)" }}
        >
          <h1 className="text-8xl courier-prime-bold">
            Johan Sangalang
            <div className="relative h-[100px]">
              {" "}
              <h2 className="text-6xl courier-prime-bold absolute bottom-0">
                Software Developer
              </h2>
            </div>
          </h1>
        </div>
      </div>
      <div className="w-full h-[500px]"></div>
    </div>
  );
}

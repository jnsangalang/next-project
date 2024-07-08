"use client";

import { useEffect, useState } from "react";
import { Clouds } from "./Clouds";
import { ReverseClouds } from "./ReverseClouds";
import { motion, useAnimation } from "framer-motion";

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

      if (scrollPosition >= documentHeight * 0.75) {
        cloud.start({
          x: -100,
          opacity: 0.3,
          transition: { duration: 3 },
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

      if (scrollPosition >= documentHeight * 0.75) {
        reverseCloud.start({
          x: 100,
          opacity: 0.3,
          transition: { duration: 3 },
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

  return (
    <div className="w-full ">
      <div className="w-full h-[500px] bg-blue-500"></div>
      <div className="relative flex flex-wrap w-full h-screen bg-red-100 ">
        <motion.div
          animate={cloud}
          className="absolute flex justify-center w-1/2 top-10 lg:top-0 left-19 lg:left-14"
        >
          <Clouds duration={15} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute top-0 right-0 flex justify-center w-3/4"
        >
          <ReverseClouds duration={18} />
        </motion.div>{" "}
        <motion.div
          animate={cloud}
          className="absolute justify-center w-3/5 top-12 lg:top-20 left-14"
        >
          <Clouds duration={8} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute justify-center w-1/2 top-50 right-28"
        >
          <ReverseClouds duration={14} />
        </motion.div>
        <motion.div
          animate={cloud}
          className="absolute left-0 justify-center w-2/5"
        >
          <Clouds duration={11} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute justify-center w-1/3 top-10 right-2"
        >
          <ReverseClouds duration={12} />
        </motion.div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Clouds } from "./Clouds";
import { ReverseClouds } from "./ReverseClouds";
import { motion, useAnimation } from "framer-motion";
import { Aleo, Courier_Prime } from "next/font/google";
import "../globals.css";
import { HomeButtons } from "./HomeButtons";
import { useWindowSize } from "./UseWindowSize";

export const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const aleo = Aleo({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export function AllClouds() {
  const [scrollY, setScrollY] = useState(0);
  const reverseCloud = useAnimation();
  const cloud = useAnimation();

  const { width } = useWindowSize();
  const isMobile = width < 768;

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
    if (typeof window === "undefined") return;
    if (isMobile) return;
    function handleCloud() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight * 0.35) {
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
  }, [cloud, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile) return;
    function handleReverseCloud() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.35) {
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
  }, [reverseCloud, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMobile) return;
    function handleCloud() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= documentHeight * 0.67) {
        cloud.start({
          x: -20,
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
  }, [cloud, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isMobile) return;
    function handleReverseCloud() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.67) {
        reverseCloud.start({
          x: 20,
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
  }, [reverseCloud, isMobile]);

  function adjustBackgroundColor() {
    if (!isMobile) {
      if (scrollY < 75) {
        return `rgba(49,62,80, ${(75 - scrollY) / 75})`;
      } else {
        return `rgba(173,160,166, ${(scrollY - 75) / 25})`;
      }
    } else {
      if (scrollY < 5) {
        return `rgba(49,62,80, ${(5 - scrollY) / 5})`;
      } else {
        return `rgba(173,160,166, ${(scrollY - 5) / 25})`;
      }
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
      <div className="h-[50px] lg:h-[50px]"></div>
      <div className="relative flex flex-wrap w-full h-[35vh] lg:h-[100vh]">
        <motion.div animate={reverseCloud} className="absolute  right-0 w-3/4 ">
          <ReverseClouds duration={18} />
        </motion.div>{" "}
        <motion.div
          animate={cloud}
          className="absolute justify-center w-3/5 top-12 lg:top-20 left-14 "
        >
          <Clouds duration={8} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute justify-center w-1/2 top-0 lg:top-50 right-28 "
        >
          <ReverseClouds duration={14} />
        </motion.div>
        <motion.div
          animate={cloud}
          className="absolute left-0 justify-center w-2/5 "
        >
          <Clouds duration={11} />
        </motion.div>
        <motion.div
          animate={reverseCloud}
          className="absolute justify-center w-1/3 top-0 right-10 "
        >
          <ReverseClouds duration={12} />
        </motion.div>
        <div
          className=" flex items-center justify-center w-full text-black"
          style={{ color: "rgba(41,62,80,1)" }}
        >
          <h1
            className={`text-3xl lg:text-8xl font-bold ${courierPrime.className}`}
          >
            Johan Sangalang
            <div className="h-[25px]">
              {" "}
              <h2 className="text-xl lg:text-6xl ">Software Developer</h2>
            </div>
          </h1>
        </div>
      </div>
      <div className="h-[100px] lg:h-[250px]"></div>
      <HomeButtons />
      <div className="w-full h-[300px] lg:h-[500px]"></div>
    </div>
  );
}

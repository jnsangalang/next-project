import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { courierPrime } from "./AllClouds";
import Link from "next/link";
import { useWindowSize } from "./UseWindowSize";

if (typeof window === "undefined") {
  console.log("undefined window");
}

export function HomeButtons() {
  const [scrollY, setScrollY] = useState(0);
  const leftTopButtonTogether = useAnimation();
  const rightTopButtonTogether = useAnimation();
  const leftBottomButtonTogether = useAnimation();
  const rightBottomButtonTogether = useAnimation();

  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    // if (typeof window === "undefined") return;
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (isMobile) return;
    function handleLeftTopButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        leftTopButtonTogether.start({
          x: 150,
          y: 75,
          transition: { duration: 0.75 },
        });
      } else {
        leftTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleLeftTopButtonTogether();
    window.addEventListener("scroll", handleLeftTopButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleLeftTopButtonTogether);
    };
  }, [leftTopButtonTogether, isMobile]);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (isMobile) return;
    function handleRightTopButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        rightTopButtonTogether.start({
          x: -150,
          y: 75,
          transition: { duration: 0.75 },
        });
      } else {
        rightTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleRightTopButtonTogether();
    window.addEventListener("scroll", handleRightTopButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleRightTopButtonTogether);
    };
  }, [rightTopButtonTogether, isMobile]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMobile) return;
    function handleLeftBottomButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        leftBottomButtonTogether.start({
          x: 150,
          y: -75,
          transition: { duration: 0.75 },
        });
      } else {
        leftBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleLeftBottomButtonTogether();
    window.addEventListener("scroll", handleLeftBottomButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleLeftBottomButtonTogether);
    };
  }, [leftBottomButtonTogether, isMobile]);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (isMobile) return;
    function handleRightBottomButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        rightBottomButtonTogether.start({
          x: -150,
          y: -75,
          transition: { duration: 0.75 },
        });
      } else {
        rightBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleRightBottomButtonTogether();
    window.addEventListener("scroll", handleRightBottomButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleRightBottomButtonTogether);
    };
  }, [rightBottomButtonTogether, isMobile]);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (!isMobile) return;
    function handleLeftTopButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.7) {
        leftTopButtonTogether.start({
          x: 27,
          y: 10,
          transition: { duration: 0.75 },
        });
      } else {
        leftTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleLeftTopButtonTogether();
    window.addEventListener("scroll", handleLeftTopButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleLeftTopButtonTogether);
    };
  }, [leftTopButtonTogether, isMobile]);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (!isMobile) return;
    function handleRightTopButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.7) {
        rightTopButtonTogether.start({
          x: -27,
          y: 10,
          transition: { duration: 0.75 },
        });
      } else {
        rightTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleRightTopButtonTogether();
    window.addEventListener("scroll", handleRightTopButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleRightTopButtonTogether);
    };
  }, [rightTopButtonTogether, isMobile]);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (!isMobile) return;
    function handleLeftBottomButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.7) {
        leftBottomButtonTogether.start({
          x: 27,
          y: -10,
          transition: { duration: 0.75 },
        });
      } else {
        leftBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleLeftBottomButtonTogether();
    window.addEventListener("scroll", handleLeftBottomButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleLeftBottomButtonTogether);
    };
  }, [leftBottomButtonTogether, isMobile]);

  useEffect(() => {
    // if (typeof window === "undefined") return;
    if (!isMobile) return;
    function handleRightBottomButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.7) {
        rightBottomButtonTogether.start({
          x: -27,
          y: -10,
          transition: { duration: 0.75 },
        });
      } else {
        rightBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 1 },
        });
      }
    }
    handleRightBottomButtonTogether();
    window.addEventListener("scroll", handleRightBottomButtonTogether);
    return () => {
      window.removeEventListener("scroll", handleRightBottomButtonTogether);
    };
  }, [rightBottomButtonTogether, isMobile]);

  return (
    <div className="w-full flex flex-wrap">
      <div className="flex flex-wrap w-full items-center justify-around mb-6 lg:mb-20">
        <motion.div
          className="w-1/4 lg:w-1/4 rounded "
          animate={leftTopButtonTogether}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(25,10,10),rgb(249, 221, 231))",
          }}
        >
          <Link href={"/about"}>
            <button
              className={`w-full text-sm lg:text-6xl p-2 lg:p-10 flex justify-center items-center ${courierPrime.className} cursor-pointer`}
            >
              About
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="w-1/4 lg:w-1/4 rounded"
          animate={rightTopButtonTogether}
          style={{
            backgroundImage:
              "linear-gradient(to right,rgb(249, 221, 231), rgb(25,10,10))",
          }}
        >
          <button
            className={`w-full text-sm lg:text-6xl  p-2 lg:p-10 flex justify-center items-center ${courierPrime.className}`}
          >
            Workflow
          </button>
        </motion.div>
      </div>
      <div className="flex flex-wrap w-full justify-around my-4 lg:my-20">
        <motion.div
          className="w-1/4 lg:w-1/4 rounded"
          animate={leftBottomButtonTogether}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(25,10,10),rgb(249, 221, 231))",
          }}
        >
          <button
            className={`w-full text-sm lg:text-6xl p-2 lg:p-10 flex justify-center items-center ${courierPrime.className}`}
          >
            Projects
          </button>
        </motion.div>
        <motion.div
          className="w-1/4 lg:w-1/4  rounded"
          animate={rightBottomButtonTogether}
          style={{
            backgroundImage:
              "linear-gradient(to right,rgb(249, 221, 231), rgb(25,10,10))",
          }}
        >
          <button
            className={`w-full text-sm lg:text-6xl p-2 lg:p-10 flex justify-center items-center ${courierPrime.className}`}
          >
            Contact
          </button>
        </motion.div>
      </div>
    </div>
  );
}

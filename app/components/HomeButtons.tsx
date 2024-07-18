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
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;
    function handleAllButtons() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (
        scrollPosition >= documentHeight * 0.7 &&
        scrollPosition < documentHeight * 0.9
      ) {
        leftTopButtonTogether.start({
          x: 200,
          y: 50,
          transition: { duration: 0.5 },
        });
        rightTopButtonTogether.start({
          x: -200,
          y: 50,
          transition: { duration: 0.5 },
        });
        leftBottomButtonTogether.start({
          x: 200,
          y: -50,
          transition: { duration: 0.5 },
        });
        rightBottomButtonTogether.start({
          x: -200,
          y: -50,
          transition: { duration: 0.5 },
        });
      } else {
        leftTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
        rightTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
        leftBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
        rightBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
    }
    handleAllButtons();
    window.addEventListener("scroll", handleAllButtons);
    return () => {
      window.removeEventListener("scroll", handleAllButtons);
    };
  }, [
    leftTopButtonTogether,
    rightTopButtonTogether,
    leftBottomButtonTogether,
    rightBottomButtonTogether,
    isMobile,
  ]);

  useEffect(() => {
    if (!isMobile) return;
    function handleAllButtons() {
      if (window.scrollY !== 0) {
        leftTopButtonTogether.start({
          x: 32,
          y: 10,
          transition: { duration: 0.5 },
        });
        rightTopButtonTogether.start({
          x: -32,
          y: 10,
          transition: { duration: 0.5 },
        });
        leftBottomButtonTogether.start({
          x: 32,
          y: -10,
          transition: { duration: 0.5 },
        });
        rightBottomButtonTogether.start({
          x: -32,
          y: -10,
          transition: { duration: 0.5 },
        });
      } else {
        leftTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
        rightTopButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
        leftBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
        rightBottomButtonTogether.start({
          x: 0,
          y: 0,
          transition: { duration: 0.5 },
        });
      }
    }
    handleAllButtons();
    window.addEventListener("scroll", handleAllButtons);
    return () => {
      window.removeEventListener("scroll", handleAllButtons);
    };
  }, [
    leftTopButtonTogether,
    rightTopButtonTogether,
    leftBottomButtonTogether,
    rightBottomButtonTogether,
    isMobile,
  ]);

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

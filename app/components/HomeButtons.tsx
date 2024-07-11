import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { courierPrime } from "./AllClouds";
import Link from "next/link";

export function HomeButtons() {
  const [scrollY, setScrollY] = useState(0);
  const leftTopButtonTogether = useAnimation();
  const rightTopButtonTogether = useAnimation();
  const leftBottomButtonTogether = useAnimation();
  const rightBottomButtonTogether = useAnimation();

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
    function handleLeftTopButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        leftTopButtonTogether.start({
          x: 225,
          y: 65,
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
  }, [leftTopButtonTogether]);

  useEffect(() => {
    function handleRightTopButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        rightTopButtonTogether.start({
          x: -225,
          y: 65,
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
  }, [rightTopButtonTogether]);

  useEffect(() => {
    function handleLeftBottomButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        leftBottomButtonTogether.start({
          x: 225,
          y: -65,
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
  }, [leftBottomButtonTogether]);

  useEffect(() => {
    function handleRightBottomButtonTogether() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight * 0.6) {
        rightBottomButtonTogether.start({
          x: -225,
          y: -65,
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
  }, [rightBottomButtonTogether]);

  return (
    <div className="w-full flex flex-wrap">
      <div className="flex flex-wrap w-full items-center justify-around mb-20">
        <motion.div
          className="w-1/4 rounded "
          animate={leftTopButtonTogether}
          style={{ backgroundColor: "rgb(249, 231, 231)" }}
        >
          <button
            className={`w-full text-6xl p-10 ${courierPrime.className} cursor-pointer`}
          >
            Placeholder
          </button>
        </motion.div>
        <motion.div
          className="w-1/4 rounded"
          animate={rightTopButtonTogether}
          style={{ backgroundColor: "rgb(249, 231, 231)" }}
        >
          <Link href={"/about"}>
            <button
              className={`w-full text-6xl p-10 ${courierPrime.className}`}
            >
              About
            </button>
          </Link>
        </motion.div>
      </div>
      <div className="flex flex-wrap w-full justify-around my-20">
        <motion.div
          className="w-1/4 rounded"
          animate={leftBottomButtonTogether}
          style={{ backgroundColor: "rgb(249, 231, 231)" }}
        >
          <button className={`w-full text-6xl p-10 ${courierPrime.className}`}>
            Projects
          </button>
        </motion.div>
        <motion.div
          className="w-1/4 rounded"
          animate={rightBottomButtonTogether}
          style={{ backgroundColor: "rgb(249, 231, 231)" }}
        >
          <button className={`w-full text-6xl p-10 ${courierPrime.className}`}>
            Contact
          </button>
        </motion.div>
      </div>
    </div>
  );
}

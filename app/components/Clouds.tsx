"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type Clouds = {
  duration?: number;
};
export function Clouds({ duration }: Clouds) {
  const controls = useAnimation();
  const mouseControls = useAnimation();

  useEffect(() => {
    mouseControls.start({
      x: [0, -10],
      y: [0, -10],
      transition: {
        duration: 7,
        repeat: Infinity,
        repeatType: "mirror",
      },
    });
  }, [mouseControls]);

  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, duration]);

  function handleMouseEnter() {
    mouseControls.start({
      x: -100,
      opacity: 0,
      transition: { duration: 1 },
    });
  }

  function handleMouseLeave() {
    mouseControls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    });
  }
  return (
    <motion.div animate={mouseControls}>
      <motion.div
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          className="absolute"
          src="/images/cloud.webp"
          alt="cloud"
          width={1200}
          height={100}
        />
      </motion.div>
    </motion.div>
  );
}

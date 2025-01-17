"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type TransitionProps = {
  children: ReactNode;
};
export function Transition({ children }: TransitionProps) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 75,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { aleo } from "./AllClouds";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Header() {
  return (
    <div
      className={`w-full flex flex-wrap items-center h-[75px] ${aleo.className} text-white text-lg lg:text-4xl`}
      style={{ background: "rgba(255, 255, 255, 0.1)" }}
    >
      <div className="w-1/3 flex">
        <button
          className="ml-4 lg:ml-10 p-2 lg:p-4"
          style={{ background: "rgba(255, 255, 255, 0.3)" }}
        >
          <Link href={"/"}>Back</Link>
        </button>
      </div>
      <div className="w-2/3 flex items-center">
        <h1>Johan Sangalang</h1>
        <FaLinkedin className="mx-6" />
        <FaGithub />
      </div>
    </div>
  );
}

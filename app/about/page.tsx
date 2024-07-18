"use client";
import { aleo, courierPrime } from "../components/AllClouds";
import Link from "next/link";
import { Transition } from "../components/Transition";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Header } from "../components/Header";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  // const leftTextGroup = useAnimation();
  // const rightTextGroup = useAnimation();

  // useEffect(()=>{
  //   leftTextGroup.({})
  // })
  return (
    <div>
      <Transition>
        <div
          className="w-full min-h-screen"
          style={{
            backgroundColor: "rgb(49,62,80)",
          }}
        >
          <Header />
          <div className="w-full flex flex-wrap">
            <motion.div className="w-full lg:w-1/2 mt-2 lg:mt-6">
              <h1
                className={`${aleo.className} w-full text-white text-2xl lg:text-4xl flex flex-wrap justify-center`}
              >
                <div className=" ml-4 lg:ml-0 w-full lg:w-3/4 flex justify-center lg:justify-start">
                  Artistic aspirations
                </div>{" "}
                <div className="w-full lg:w-3/4 flex justify-center">
                  {" "}
                  awaken ambition
                </div>
              </h1>
              <p
                className={`w-full flex py-2 lg:py-6 px-10 text-white text-md lg:text-xl ${courierPrime.className}`}
              >
                Hey there! My name is Johan Sangalang, and I&apos;m a software
                developer. I&apos;m currently skilled at Typescript, JavaScript,
                CSS, HTML, React, node.js, postgreSQL, tailwind, and express.js{" "}
              </p>
              <h1
                className={`w-full flex justify-center text-white text-2xl lg:text-4xl underline ${aleo.className}`}
              >
                Background
              </h1>
              <p
                className={`w-full flex py-2 lg:py-6 px-10 text-white text-md lg:text-xl ${courierPrime.className}`}
              >
                I was an Occupation Therapy Assistant, working day to day with
                patients. Over the past few years, that job taught me how to
                foster effective communication, time management, and being
                reliable. I decided to do some self studying and took a prep
                course in coding, and was instantly hooked. I decided to join
                LearningFuze&apos;s Web Development bootcamp, and have been
                coding since!
              </p>
            </motion.div>
            <div className="w-full lg:w-1/2 mt-6">
              <h2
                className={`${aleo.className} w-full underline text-white text-2xl lg:text-4xl flex justify-center mb-2 lg:mb-16`}
              >
                Skills
              </h2>
              <div className="w-full px-10">
                <h1
                  className={`w-full underline mb-4 text-white text-lg lg:text-2xl  ${aleo.className}`}
                >
                  Front-end
                </h1>
                <div className="flex flex-wrap mb-4">
                  <IoLogoHtml5 color="white" className="mr-2 text-6xl" />
                  <FaCss3Alt color="white" className="mx-2 text-6xl" />
                  <SiJavascript color="white" className="mx-2 text-6xl" />
                  <FaReact color="white" className="mx-2 text-6xl" />
                  <BiLogoTypescript color="white" className="mx-2 text-6xl" />
                  <RiTailwindCssFill color="white" className="mx-2 text-6xl" />
                </div>
              </div>
              <div className="w-full px-10 mb-10">
                <h1
                  className={`w-full underline mb-2 text-white text-lg lg:text-2xl ${aleo.className}`}
                >
                  Back-end
                </h1>
                <div className="flex flex-wrap">
                  <DiPostgresql color="white" className="mr-2 text-6xl" />
                  <FaNodeJs color="white" className="mx-2 text-6xl" />
                  <SiExpress color="white" className="mx-2 text-6xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

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

export default function Page() {
  return (
    <div>
      <Transition>
        <div
          className="w-full h-screen"
          style={{
            backgroundColor: "rgb(49,62,80)",
          }}
        >
          <div
            className={`w-full flex flex-wrap items-center h-[75px] ${aleo.className} text-white text-4xl`}
            style={{ background: "rgba(255, 255, 255, 0.1)" }}
          >
            <div className="w-1/3 flex">
              <button
                className="ml-10 p-4"
                style={{ background: "rgba(255, 255, 255, 0.3)" }}
              >
                <Link href={"/"}>Back</Link>
              </button>
            </div>
            <div className="w-2/3 flex">
              <h1>Johan Sangalang</h1>
              <FaLinkedin className="mx-6" />
              <FaGithub />
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-1/2 mt-6">
              <h1
                className={`${aleo.className} w-full text-white text-4xl flex flex-wrap justify-center`}
              >
                <div className="w-3/4">Artistic aspirations</div>{" "}
                <div className="w-3/4 flex justify-center">
                  {" "}
                  awaken ambition
                </div>
              </h1>
              <p
                className={`w-full flex py-6 px-10 text-white ${courierPrime.className}`}
              >
                Hey there! My name is Johan Sangalang, and I&apos;m a software
                developer. I&apos;m currently skilled at Typescript, JavaScript,
                CSS, HTML, React, node.js, postgreSQL, tailwind, and express.js{" "}
              </p>
              <h1
                className={`w-full flex justify-center text-white text-2xl underline ${aleo.className}`}
              >
                Background
              </h1>
              <p
                className={`w-full flex py-6 px-10 text-white ${courierPrime.className}`}
              >
                I was an Occupation Therapy Assistant, working day to day with
                patients. Over the past few years, that job taught me how to
                foster effective communication, time management, and being
                reliable. I decided to do some self studying and took a prep
                course in coding, and was instantly hooked. I decided to join
                LearningFuze&apos;s Web Development bootcamp, and have been
                coding since!
              </p>
            </div>
            <div className="w-1/2 mt-6">
              <h2
                className={`${aleo.className} w-full text-white text-4xl flex justify-center mb-16`}
              >
                Skills
              </h2>
              <div className="w-full">
                <h1
                  className={`w-full underline mb-4 text-white text-2xl  ${aleo.className}`}
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
              <div className="w-full">
                <h1
                  className={`w-full underline mb-2 text-white text-2xl mb-4 ${aleo.className}`}
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

"use client";
import { aleo } from "../components/AllClouds";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Transition } from "../components/Transition";

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
            <button className="w-1/3 flex">
              <Link href={"/"}>Back</Link>
            </button>
            <div className="w-2/3 flex">
              <h1>Johan Sangalang</h1>
              <FaLinkedin className="mx-6" />
              <FaGithub />
            </div>
          </div>
          <div className="w-full flex flex-wrap">
            <div className="w-1/2">
              <h1
                className={`${aleo.className} w-full text-white text-4xl flex justify-center`}
              >
                Artistic aspirations awaken ambition
              </h1>
              <p className="w-full flex py-6 px-10">
                Hey there! My name is Johan Sangalang, and I&apos;m a software
                developer. I&apos;m currently skilled at Typescript, JavaScript,
                CSS, HTML, React, node.js, postgreSQL , tailwind, and express.js{" "}
              </p>
              <h1 className=" w-full flex justify-center">Background</h1>
              <p className="w-full flex py-6 px-10">
                I was an Occupation Therapy Assistant, working day to day with
                patients. Over the past few years, that job taught me how to
                foster effective communication, time management, and being
                reliable. I decided to do some self studying and took a prep
                course in coding, and was instantly hooked. I decided to join
                LearningFuze&apos;s Web Development bootcamp.
              </p>
            </div>
            <div className="w-1/2">
              <h2
                className={`${aleo.className} w-full text-white text-4xl flex justify-center`}
              >
                Skills
              </h2>
              <h1>Front-end</h1>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

"use client";
import { cn } from "@/app/lib/utils";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export function BackgroundBoxesDemo() {
  const words = [
    "Business Protfolio",
    "Web Development",
    "Mobile App",
    "E-commerce Development",
    "Web Hosting",
    "Web Design",
    "DevOps",
    "Web Responsive Design",
    "API Development",
    "Cloud Service",
    "Testing Service",
  ];

  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Hi!, I Am Ganesh
        <br />
        <span className="text-3xl  md:text-4xl lg:text-5xl  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-900 via-violet-500 to-pink-500 py-4">
          Are You Looking Software For Your Business
        </span>
        <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <FlipWords words={words} />
          {/* <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            {" "}
            Developer
          </span> */}
        </div>
        <br />
        {/* <div className="md:px-40 sm:px-20 px-0 ">
          <p className="text-[14px] mt-5 leading-8 md:text-xl p-2 lg:text-2xl leading-relaxed text-center text-gray-800 dark:text-gray-200 tracking-wide">
            Lets bring your ideas to life by offering server solutions,
            including setup and configuration, optimization, and security, as
            well as custom software development and reliable server management,
            to ensure smooth and efficient results.
          </p>
        </div> */}
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

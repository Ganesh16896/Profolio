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
    "Innovative Development",
    "Web Development",
    "Mobile App",
    "E-commerce Development",
    "Web Hosting",
    "Web Design",
    "DevOps",
    "API Development",
    "Cloud Service",
  ];

  const title = ["Transform Your Ideas into Software Solution"];
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight">
        Hi!, I Am Ganesh
        <br />
        <span className="text-3xl  md:text-4xl lg:text-5xl  bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-900 via-violet-500 to-pink-500 py-4">
          Transform Your Ideas into Software Solution
        </span>
        <br />
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <FlipWords words={words} />
        </div>
        <br />
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

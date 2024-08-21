"use client";
import { cn } from "@/app/lib/utils";
import React from "react";
import { FlipWords } from "../ui/flip-words";
import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";

export function BackgroundBoxesDemo() {
  const words = ["Front End", "Back End"];

  return (
    <div className="relative w-full h-screen  overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={cn(
            "bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-transparent",
            "p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12"
          )}
        >
          <div className="">
            <p className="mt-2 text-white">HI!</p>
            <p className="mt-4 text-white">I am Ganesh</p>
            <div className="mt-4 text-white">
              <FlipWords words={words} />
              <span className="text-white">Developer</span>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
}

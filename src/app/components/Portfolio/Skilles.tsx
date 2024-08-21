"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "HTML",
    designation: "Front-End Technology",
    image: "/image/skills/html-1.svg",
  },
  {
    id: 2,
    name: "CSS",
    designation: "Styling Language",
    image: "/image/skills/css-3.svg",
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    designation: "Programming Language",
    image: "/image/skills/logo-javascript.svg",
  },
  {
    id: 4,
    name: "REACT JS",
    designation: "JavaScript Library",
    image: "/image/skills/react-2.svg",
  },
  {
    id: 5,
    name: "GATSBY JS",
    designation: "Static Site Generator",
    image: "/image/skills/gatsby.svg",
  },
  {
    id: 6,
    name: "NEXT JS",
    designation: "React Framework",
    image: "/image/skills/next-js.svg",
  },
  {
    id: 7,
    name: "SASS",
    designation: "CSS Preprocessor",
    image: "/image/skills/sass-1.svg",
  },
  {
    id: 8,
    name: "TAILWIND CSS",
    designation: "Utility-First CSS Framework",
    image: "/image/skills/tailwind-css-2.svg",
  },
  {
    id: 9,
    name: "MATERIAL UI",
    designation: "React UI Framework",
    image: "/image/skills/material-ui-1.svg",
  },
  {
    id: 10,
    name: "NODE JS",
    designation: "JavaScript Runtime",
    image: "/image/skills/nodejs-1.svg",
  },
  {
    id: 11,
    name: "MONGODB",
    designation: "NoSQL Database",
    image: "/image/skills/mongodb-icon-1.svg",
  },
  {
    id: 12,
    name: "GITHUB",
    designation: "Version Control System",
    image: "/image/skills/github-icon-1.svg",
  },
];

export function Skilles() {
  return (
    <div className="my-20">
      <div className="text-center text-4xl font-bold ">
        <p>My Skill</p>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
}

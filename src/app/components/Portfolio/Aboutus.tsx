import Image from "next/image";
import React from "react";

export function Aboutus() {
  return (
    <div className="md:my-20 my:8">
      <div className="flex sm:flex-row flex-col flex-wrap justify-center items-center md:gap-15 gap-0">
        <div className="md:w-[400px] w-full">
          <Image
            src="/image/profile.jpg"
            alt="Profile Picture of Dasari Ganesh"
            width={400}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="xl:w-[800px] lg:w-[600px] w-full min-w-xs text-start px-5">
          <p className="font-bold text-lg sm:text-xl">Who Am I?</p>
          <p className="text-2xl sm:text-3xl py-2 sm:py-3 font-bold">
            About Me
          </p>
          <div className="text-lg sm:text-base">
            <p>
              At the heart of our development approach is a focus on building
              high-quality, dynamic web applications that provide seamless user
              experiences. Led by Dasari Ganesh, an experienced ReactJS
              developer, our team specializes in using modern technologies like
              ReactJS, Next.js, and Gatsby.js to create responsive and scalable
              web solutions.
            </p>

            <p className="mt-4">
              We bring proficiency in a range of tools, including JavaScript,
              API Integration, SASS, Tailwind CSS, and Material UI, ensuring
              that every interface is not only visually appealing but also
              optimized for performance. Our dedication to clean, modular, and
              reusable code allows us to deliver projects efficiently while
              adhering to industry best practices.
            </p>
            <p className="mt-4">
              With a focus on collaboration and continuous learning, we stay
              updated on the latest trends to provide innovative and
              future-ready solutions. Whether it&apos;s implementing RESTful
              APIs, enhancing existing platforms, or developing entirely new
              applications, we are passionate about helping businesses succeed
              in the digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

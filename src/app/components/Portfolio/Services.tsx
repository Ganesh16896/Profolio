import React from "react";
import { Meteors } from "../ui/meteors";

export function Services() {
  const data = [
    {
      id: 1,
      lang: "WEB DEVELOPING",
      discription:
        " web development services, creating responsive and user-friendly websites tailored to your business needs. Specializing in modern frameworks like React, Next.js, and Material-UI for high-performance solutions.",
    },
    {
      id: 1,
      lang: "Full-Stack Development",
      discription:
        "Delivering end-to-end solutions by handling both front-end and back-end development, from designing intuitive user interfaces to implementing robust server-side logic and database management.",
    },
    {
      id: 2,
      lang: "Front End Development",
      discription:
        "Building dynamic, interactive user interfaces with modern technologies like React, Next.js, and Material-UI, ensuring a smooth and engaging user experience across all devices.",
    },
    {
      id: 3,
      lang: "Backend Development",
      discription:
        "Designing and deploying scalable back-end solutions using Node.js, Express, and serverless architectures.",
    },
    {
      id: 4,
      lang: "API Integration",
      discription:
        "Seamlessly connecting your applications with third-party services and platforms through custom API integrations, enhancing functionality and data flow between systems.",
    },
    {
      id: 5,
      lang: "API Development ",
      discription:
        "Building robust RESTful APIs for seamless communication between your applications and external services.",
    },
    {
      id: 6,
      lang: "Web Responsive Design",
      discription:
        "Designing websites that adapt seamlessly to all screen sizes, ensuring an optimal user experience across desktops, tablets, and mobile devices.",
    },
    {
      id: 7,
      lang: "Hosting Server",
      discription:
        "Providing reliable and secure server hosting solutions, with expertise in setting up and managing cloud servers on platforms like AWS and DigitalOcean for optimized performance and scalability.",
    },
  ];

  return (
    <div className="mt-8 p-4 md:p-8">
      <div className="text-center text-2xl md:text-4xl font-bold mb-8">
        <p>Services</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
        {data.map((res) => (
          <div className="relative w-full max-w-xs mx-auto" key={res.id}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl"></div>
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-6 sm:px-6 sm:py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start">
              <div className="h-6 w-6 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="h-4 w-4 text-gray-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1 className="font-bold text-lg sm:text-xl text-white mb-4 relative z-50">
                {res.lang}
              </h1>

              <p className="font-normal text-sm sm:text-base text-slate-500 mb-4 relative z-50">
                {res.discription}
              </p>

              {/* Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

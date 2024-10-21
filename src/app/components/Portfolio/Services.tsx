import React from "react";
import { Meteors } from "../ui/meteors";

export function Services() {
  const data = [
    {
      id: 1,
      lang: "WEB DEVELOPING",
      discription:
        "We build high-speed, dynamic, and scalable web applications designed to drive user engagement and business growth. Using the latest frameworks like ReactJS, Next.js, and Node.js, our development process focuses on creating custom, performance-optimized solutions tailored to your needs.",
    },
    {
      id: 2,
      lang: "Mobile Applications",
      discription:
        "We create high-performing mobile applications for Android and iOS, ensuring seamless user experiences from concept to deployment. Our end-to-end solutions cover both front-end and back-end development, including intuitive UI design and robust server-side logic",
    },
    {
      id: 3,
      lang: "ECommerce Development",
      discription:
        "Our custom eCommerce solutions are designed to increase your sales and engage your customers. Whether you're a startup or an established business, we build eCommerce platforms that provide smooth, secure shopping experiences and are optimized for conversion.",
    },
    {
      id: 3,
      lang: "Testing Services",
      discription:
        " Our comprehensive testing services ensure that your digital products are reliable, secure, and bug-free before launch. From performance testing to security checks, we leave no stone unturned to guarantee your products are built to the highest standards.",
    },
    {
      id: 3,
      lang: "Web Design",
      discription:
        "Our web design services combine stunning visuals with intuitive functionality, ensuring your website looks fantastic while providing a seamless user experience. We focus on user-centered designs, crafting websites that are both beautiful and highly functional across all devices.",
    },
    {
      id: 3,
      lang: "DevOps",
      discription:
        "We help you automate and streamline your development processes by implementing DevOps best practices. Our DevOps services ensure that your infrastructure is optimized for continuous integration, delivery, and deployment, resulting in faster and more efficient development cycles.",
    },
    {
      id: 4,
      lang: "Cloud Services",
      discription:
        "We offer cloud-based solutions that enable businesses to scale effortlessly and optimize their infrastructure. Whether you're moving to the cloud or improving your current architecture, we provide services that ensure your business is future-ready and able to handle increasing demands.",
    },
    {
      id: 5,
      lang: "API Development ",
      discription:
        "We build robust RESTful APIs for seamless communication between your applications and external services. Our APIs are designed for performance, scalability, and security, ensuring reliable data exchange. With clear documentation and easy integration, we empower your business to innovate and scale effortlessly.",
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
      <div className=" mb-8">
        <p className="text-center text-2xl md:text-4xl font-bold">
          Our Services
        </p>
        <div className="  text-center">
          <p className=" mt-5 px-5  lg:text-[14px] text-[12px]">
            By leveraging my expertise in custom software development and server
            infrastructure management, I m dedicated to turning your ideas into
            a reality, from setup to optimization and security
          </p>
        </div>
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

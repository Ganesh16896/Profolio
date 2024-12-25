import React from "react";
import { Meteors } from "../ui/meteors";

export function Services() {
  const data = [
    {
      id: 1,
      lang: "WEB DEVELOPING",
      list: [
        {
          sub: "Portfolio Website (Static/Dynamic)",
        },
        {
          sub: "eCommerce Website",
        },

        {
          sub: "CRM (Content Resource Management)",
        },
        {
          sub: "Custom Website Design & Development",
        },
        {
          sub: "Event Websites",
        },
      ],
    },
    {
      id: 2,
      lang: "App Applications",
      list: [
        {
          sub: "Android",
        },
        {
          sub: "Windows",
        },

        {
          sub: "iOS",
        },
      ],
      discription:
        "We specialize in developing applications for multiple platforms",
    },
    {
      id: 3,
      lang: "Gaming Application",
      discription:
        " Design and development of gaming applications tailored to user experiences and engagement.",
    },
    {
      id: 4,
      lang: "ECommerce Application",
      discription:
        " Develop custom eCommerce applications for businesses to expand their reach and improve online sales.",
    },
    {
      id: 5,
      lang: "Management Application",
      discription:
        "Create applications for managing various business processes, enhancing efficiency and productivity",
    },

    {
      id: 6,
      lang: "Inventory Management",
      discription:
        "Develop customized inventory management systems to streamline stock control and order processing.",
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
            We offer a wide range of professional services to help businesses
            grow and succeed in the digital world.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 md:gap-10">
        {data.map((res) => (
          <div className="relative w-full max-w-xs mx-auto" key={res.id}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl"></div>
            <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-6 sm:px-5 sm:py-5 h-full overflow-hidden rounded-2xl flex flex-col justify-start items-start space-y-2">
              <div className="h-6 w-6 rounded-full border flex items-center justify-center border-gray-500">
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

              <h1 className="font-bold text-lg sm:text-xl text-white relative z-50">
                {res.lang}
              </h1>

              {res?.discription && (
                <p className="font-normal text-sm sm:text-base text-slate-500 relative z-50">
                  {res.discription}
                </p>
              )}

              <ul className="space-y-1">
                {res?.list &&
                  res?.list.map((item, index) => (
                    <li
                      key={index}
                      className="font-normal text-sm sm:text-base text-slate-500 relative z-50"
                    >
                      {item.sub}
                    </li>
                  ))}
              </ul>

              {/* Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

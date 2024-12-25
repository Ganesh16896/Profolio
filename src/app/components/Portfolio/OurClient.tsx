import React from "react";

const OurClient = () => {
  const list = [
    {
      id: 1,
      num: "4+",
      name: "Satisfied Clients",
    },
    {
      id: 2,
      num: "6+",
      name: "Completed Projects",
    },
    {
      id: 1,
      num: "5+",
      name: "Years of Expertise",
    },
    {
      id: 1,
      num: "100%",
      name: "Client Retention",
    },
  ];
  return (
    <div>
      <div className="mt-8 p-4 md:p-8">
        <div className="text-center mt-10">
          <p className="text-3xl font-bold">
            Custom Software Solutions Built for Your Business Needs
          </p>
          <p className="text-center text-md sm:text-xl mt-5 leading-1  max-w-[100%] sm:max-w-[70%] mx-auto">
            Empowering businesses with cutting-edge technology and customized
            software solutions. From dynamic web applications to enterprise
            software, we design, develop, and deploy solutions that drive growth
            and enhance operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white  gap-6 px-4 sm:px-11 mt-16">
          {list.map((res) => (
            <>
              <div className="w-[250px]">
                <div className="bg-[#111827] py-8 px-5 rounded-lg border-2 border-gray-800 shadow-md hover:shadow-2xl hover:shadow-slate-700 shadow-slate-800	">
                  <p className="text-3xl font-bold">{res.num}</p>
                  <p className="text-xl mt-3 font-bold">{res.name}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;

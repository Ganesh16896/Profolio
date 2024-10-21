"use client";
import React from "react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

function Aboutus() {
  const data = [
    {
      title: "Who Am I?",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8">
            Im Dasari Ganesh, and my team specializes in full-stack development
            with expertise in Node.js, ReactJS, and Next.js. We deliver robust,
            scalable web and mobile applications that provide seamless user
            experiences. Our services include efficient API integrations,
            DevOps, and cloud solutions, ensuring continuous performance and
            easy scalability. From front-end design to back-end architecture, we
            create future-proof digital products tailored to meet your business
            needs and drive success in an ever-evolving digital landscape.{" "}
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8">
            Whether you need web development, mobile apps, cloud solutions,
            ECommerce platforms, testing services, or DevOps expertise, we have
            the skills to turn your ideas into reality. By staying ahead of the
            latest trends, we ensure our work is always future-ready and
            optimized for long-term success. From API integrations to full-stack
            solutions, we push the boundaries to help businesses grow and scale
            effortlessly.{" "}
          </p>{" "}
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8">
            {" "}
            If you re ready to elevate your digital presence with innovative
            solutions and cutting-edge technology, lets connect and make it
            happen.
          </p>
        </div>
      ),
    },
    {
      title: "Our Mission",
      content: (
        <div>
          <ul className="list-disc">
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Empower businesses by providing web development, mobile apps,
              cloud solutions, ECommerce platforms, and DevOps expertise to meet
              their unique digital needs.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Build high-performance, user-friendly applications that enhance
              digital presence and improve user engagement.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Create scalable and innovative solutions tailored to the specific
              challenges and goals of each client, ensuring flexibility and
              adaptability in a fast-paced environment.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Foster collaboration and transparency with clients throughout the
              development process to ensure alignment with their vision and
              objectives.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Leverage the latest technologies and industry best practices to
              deliver solutions that are not only effective but also secure and
              reliable.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Support businesses in harnessing data-driven insights and
              analytics to inform strategic decisions and drive growth.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Ensure that our solutions are optimized for performance and user
              experience, enabling clients to maximize their potential in the
              digital landscape.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Our Vision",
      content: (
        <div>
          <ul className="list-disc">
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Empower businesses by providing web development, mobile apps,
              cloud solutions, ECommerce platforms,Testing Service, and DevOps
              expertise to meet their unique digital needs.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Become a leader in the digital services space by providing
              future-proof solutions that enable businesses to thrive in a
              constantly evolving world.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Envision a digital future where every business has access to the
              tools and technology necessary for sustainable growth and
              long-term success.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Foster continuous innovation and learning to stay ahead of
              industry trends and challenges.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Dedicate ourselves to customer satisfaction, ensuring our clients
              receive the highest quality of service and support.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              Aspire to be the go-to partner for companies looking to build
              their digital presence and scale their operations through
              technology.
            </li>
          </ul>
        </div>
      ),
    },

    {
      title: "Why Us",
      content: (
        <div>
          <ul className="list-disc">
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              <span className="font-bold">
                Expertise in Modern Technologies:
              </span>{" "}
              We utilize the latest tools and frameworks, including ReactJS and
              Next.js, to create advanced and user-friendly solutions.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              <span className="font-bold"> Customized Solutions:</span> Each
              project is tailored to your unique business needs, ensuring a
              personalized approach.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              <span className="font-bold">Reliable and Future-Proof:</span> Our
              solutions are designed to be scalable and adaptable, preparing
              your business for future growth.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              <span className="font-bold">Proven Results:</span> We boast a
              portfolio of successful projects that have driven growth and
              innovation across various industries.
            </li>
            <li className="text-neutral-800 dark:text-neutral-200 text-xl md:text-xl text-600 font-normal mb-8 ">
              <span className="font-bold">Collaborative Process:</span> We
              prioritize transparency and communication, working closely with
              you to ensure the final product exceeds your expectations.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Aboutus;

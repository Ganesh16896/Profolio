import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          (FAQs) Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {/* FAQ Item 1 */}
          <details className="border border-gray-700 p-4 rounded">
            <summary className="cursor-pointer text-lg font-medium">
              What software development services do you offer?
            </summary>
            <p className="mt-2 text-gray-300">
              We provide a comprehensive range of software development services,
              including custom web applications, mobile app development,
              enterprise software, and cloud-based solutions, tailored to meet
              your unique business needs.
            </p>
          </details>

          {/* FAQ Item 2 */}
          <details className="border border-gray-700 p-4 rounded">
            <summary className="cursor-pointer text-lg font-medium">
              Can you customize software to fit my business requirements?
            </summary>
            <p className="mt-2 text-gray-300">
              Absolutely! Our team specializes in creating bespoke software
              solutions, tailored to address specific workflows, business goals,
              and technical requirements unique to your organization.
            </p>
          </details>

          {/* FAQ Item 3 */}
          <details className="border border-gray-700 p-4 rounded">
            <summary className="cursor-pointer text-lg font-medium">
              Do you provide software maintenance and support?
            </summary>
            <p className="mt-2 text-gray-300">
              Yes, we offer ongoing software maintenance and support services to
              ensure your applications run smoothly, remain secure, and stay
              updated with the latest technologies.
            </p>
          </details>

          {/* FAQ Item 4 */}
          <details className="border border-gray-700 p-4 rounded">
            <summary className="cursor-pointer text-lg font-medium">
              How do I get started with your software development services?
            </summary>
            <p className="mt-2 text-gray-300">
              Getting started is simple! Reach out to us with your project
              requirements, and our team will work with you to develop a plan
              that meets your business needs and objectives.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Set to 0 for the first question to be open by default

  const faqs = [
    {
      question: "What is Heroes of Humanity, and how does it support doctors and professionals?",
      answer:
        "(Include a brief overview of your platform, its mission, and how it benefits medical professionals and other experts.) ",
    },
    {
      question: "Who can join Heroes of Humanity, and what are the eligibility criteria?",
      answer:
        "(Explain whether it’s for doctors, healthcare workers, researchers, or other professionals, and if there are specific requirements to join.)",
    },
    {
      question: "What are the benefits of joining Heroes of Humanity?",
      answer:
        "(List key advantages, such as networking, recognition, mentorship opportunities, grants, or career growth support.)",
    },
    {
      question: "How can I get featured as a Hero of Humanity?",
      answer:
        "(Provide details on the selection process, nominations, or application process to be recognized on your platform.)",
    },
    {
      question: "Is there a cost to join Heroes of Humanity?",
      answer:
        "(Clarify if it's free, has a membership fee, or offers premium plans.)",
    },
    {
        question: "How can I contribute or support the initiative?",
        answer:
          "(Give information about donations, sponsorships, volunteering, or partnership opportunities.)",
      },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto p-4 md:my-[100px]">
      <h2 className="text-3xl font-bold text-center text-[#A41010] font-sans mb-6">
        Commonly Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div key={index} className="border-none">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full md:h-[85px] flex justify-between items-center bg-[#AD0080] text-white font-semibold md:text-[25px] font-sans px-4 py-3 rounded-lg "
            >
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                openIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className=" px-4 py-5 bg-white border border-pink-200 rounded-b-lg text-[#6C757D] md:text-[18px] font-normal">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

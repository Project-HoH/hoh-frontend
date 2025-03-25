/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import HealthCareImage from '../../../../public/Healthcare.png';

const HealthcareNetwork = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center md:justify-between bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Image Container */}
        <div
          className="w-full md:w-1/2 relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={HealthCareImage.src}
            alt="Healthcare International Network"
            className={`w-full h-full object-cover transition-transform duration-300 rounded-2xl ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>

        {/* Content Container */}
        <div className="w-full md:w-1/2 p-6 md:p-12  ">
          <h1 className="md:text-[35px] font-bold text-red-700 mb-4 leading-tight  md:text-right">
            Join Our Healthcare International Network (HIN) To Change Into A
            High Net Worth Individual (HNI) With Our HIN-HNI Program.
          </h1>

          <p className="text-gray-700 md:text-[20px] ] md:text-right">
            This initiative provides valuable resources, networking events, and
            mentorship from industry leaders, helping you enhance your
            professional profile and connect with others dedicated to excellence
            in healthcare.
          </p>

          {/* <button className="mt-6 bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HealthcareNetwork;

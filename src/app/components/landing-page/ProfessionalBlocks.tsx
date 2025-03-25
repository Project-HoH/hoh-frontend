/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import ProfessionalImage from "../../../../public/pro.png";
import StudentImage from "../../../../public/Students.png";

const ProfessionalTiles = () => {
  const [isHovered, setIsHovered] = useState<string | boolean>(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-0">
      <div
        className="h-[300px] md:h-[440px] w-full mx-auto border border-black rounded-[22px] relative overflow-hidden"
        onMouseOver={() => setIsHovered("professional")}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          src={ProfessionalImage.src}
          alt="professional image"
          className={`w-full h-full object-cover transition-transform duration-300 rounded-2xl ${
            isHovered === "professional" ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          Professional
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-[#A41010] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Know more
          </button>
        </div>
      </div>

      <div
        className="h-[300px] md:h-[440px] w-full border border-black rounded-[22px] relative overflow-hidden"
        onMouseOver={() => setIsHovered("student")}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          src={StudentImage.src}
          alt="student image"
          className={`w-full h-full object-cover transition-transform duration-300 rounded-2xl ${
            isHovered === "student" ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          Student
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="bg-[#A41010] text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTiles;

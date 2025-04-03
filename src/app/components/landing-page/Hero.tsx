/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const words = ["Heal A Soul", "Save A Life", "Safeguard Humanity"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full md:my-[130px] mt-[120px]">
      <div className="w-full max-w-[1440px] md:h-[80px] h-[85px] bg-[#8C0365] flex flex-col gap-2 items-center justify-center overflow-hidden">
        <h1 className="text-[#F8F9FA] font-bold md:text-[40px] text-[20px] whitespace-nowrap relative md:-left-[150px] -left-[90px]">
          You're a hero,
          <span className="text-[#FFC4EE] ml-2 absolute">
            {words.map((word, index) => (
              <span
                key={word}
                className={`absolute transition-all duration-700 ease-in-out ${
                  index === currentWordIndex
                    ? "opacity-100 translate-y-0"
                    : index === (currentWordIndex + 1) % words.length
                    ? "opacity-0 translate-y-full"
                    : "opacity-0 -translate-y-full"
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;

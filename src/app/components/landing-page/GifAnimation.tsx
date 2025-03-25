import React from "react";
import GifSvg from "../icons/GifSvg";
import StackImages from "../icons/StackImagesSvg";

const GifAnimation = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1440px] mx-auto items-center justify-center px-4 py-8 md:py-[130px] space-y-6">
      {/* Centered GIF/SVG Section */}
      <div className="w-full justify-center mb-4 hidden md:flex">
        <GifSvg />
      </div>

      <div className="flex flex-col items-center justify-center text-center space-y-4 w-full">
        {/* Responsive Headings */}
        <h1 className="text-2xl md:text-[35px] text-[#A41010] font-bold max-w-full md:max-w-[70%]">
          Let Us Help You Unleash Your Inner Super Powers
        </h1>

        <h2 className="text-lg md:text-[25px] text-[#6C757D] max-w-full md:max-w-[60%]">
          Over 5000+ students and doctors joined with us
        </h2>

        {/* Stack Images */}
        <div className="w-full flex justify-center">
          <StackImages />
        </div>

        <h2 className="text-base md:text-[18px] text-[#6C757D] max-w-full md:max-w-[60%]">
          Trusted over worldwide doctors and medical institutions. What are you
          waiting for?
        </h2>

        {/* Responsive Stats Container */}
        <div className="w-full max-w-md lg:max-w-xl">
          <div className="bg-[#FFF1FA] rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
              {/* Stats */}
              <div className="flex flex-col items-center">
                <h1 className="text-2xl md:text-[35px] font-bold text-[#FE2A2A]">
                  5K+
                </h1>
                <h2 className="text-xs md:text-[18px] text-[#8C0365]">
                  Students
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-2xl md:text-[35px] font-bold text-[#FE2A2A]">
                  60+
                </h1>
                <h2 className="text-xs md:text-[18px] text-[#8C0365]">
                  Faculty
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-2xl md:text-[35px] font-bold text-[#FE2A2A]">
                  200+
                </h1>
                <h2 className="text-xs md:text-[18px] text-[#8C0365]">
                  Courses
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-2xl md:text-[35px] font-bold text-[#FE2A2A]">
                  93%
                </h1>
                <h2 className="text-xs md:text-[18px] text-[#8C0365]">
                  Passing Rate
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifAnimation;

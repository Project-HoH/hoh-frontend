import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center py-8 md:my-[130px] mt-[130px] px-4">
      <h1
        className="bg-clip-text text-transparent bg-gradient-to-b from-[#FF97DD] to-[#610046] 
                text-lg sm:text-xl md:text-[30px] 
                max-w-full md:max-w-[65%] 
                text-center font-bold font-sans 
                leading-tight sm:leading-snug md:leading-normal"
      >
        You are a hero! Because in a world of{" "}
        <span className="text-[#610046] whitespace-nowrap">
          ordinary mortals, you are a superhuman
        </span>
      </h1>
    </div>
  );
};

export default Hero;

import React from "react";
import LogoSvg from "../icons/LogoSvg";

const Footer = () => {
  return (
    <footer className="bg-[#8C0365] md:h-[290px] max-w-[1440px] mx-auto text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-4 space-y-4 md:space-y-0">
      <div className="flex items-center space-x-4">
        {/* Hero Character */}
        <ul className="flex flex-row w-full max-w-[300px] list-none items-center justify-between rounded-xl px-8">
          <li className="flex items-center gap-2 cursor-pointer">
            <LogoSvg />
            <div className="flex flex-col">
              <h1 className="font-bold text-[16px] md:text-[20px] md:leading-[28px] whitespace-nowrap text-[#FFF1F1]">
                Heroes
              </h1>
              <h1 className="font-bold text-[16px] md:text-[20px] md:leading-[28px] whitespace-nowrap text-[#FFF1F1]">
                of
              </h1>
              <h1 className="font-bold text-[16px] md:text-[20px] md:leading-[28px] whitespace-nowrap text-[#FFF1F1]">
                Humanity
              </h1>
            </div>
          </li>
        </ul>
      </div>

      {/* Navigation Links */}
      <nav className=" flex space-x-6">
        <a href="#about" className="hover:text-gray-300 transition-colors">
          About us
        </a>
        <a href="#courses" className="hover:text-gray-300 transition-colors">
          Courses
        </a>
        <a href="#socials" className="hover:text-gray-300 transition-colors">
          Socials
        </a>
        <a href="#mission" className="hover:text-gray-300 transition-colors">
          Mission
        </a>
        <a href="#contact" className="hover:text-gray-300 transition-colors">
          Contact
        </a>
      </nav>
    </footer>
  );
};

export default Footer;

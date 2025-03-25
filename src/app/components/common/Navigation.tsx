"use client";
import { useState } from "react";
import LogoSvg from "../icons/LogoSvg";

const menu = {
  right: [
    { title: "Students", url: "/solution" },
    { title: "Doctors", url: "/pricing" },
    { title: "Dentist", url: "/contact" },
    { title: "Pharmacist", url: "/contact" },
    { title: "Nurse", url: "/contact" },
    { title: "Physiotherapist", url: "/contact" },
    { title: "Technicians", url: "/contact" },
    { title: "Networks", url: "/contact" },
  ],
};

const navLinks = [
  { title: "Students", url: "/solution" },
  { title: "Doctors", url: "/pricing" },
  { title: "Dentist", url: "/contact" },
  { title: "Pharmacist", url: "/pharmacist" },
  { title: "Nurse", url: "/nurse" },
  { title: "Physiotherapist", url: "/physiotherapist" },
  { title: "Technicians", url: "/technicians" },
  { title: "Networks", url: "/networks" },
];
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleNavigation = async (url: string) => {
    closeMenu();

    window.location.href = url;
  };

  return (
    <div>
      <nav className="fixed left-1/2 top-0 z-[11111] flex w-full max-w-[1440px] translate-x-[-50%] flex-row items-center justify-between overflow-hidden  px-4 py-4 transition-all duration-500 bg-white shadow-md">
        <ul className="'flex flex-row max-lg:hidden' w-full max-w-[300px] list-none items-center justify-between rounded-xl px-8">
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <LogoSvg />
            <div className="flex flex-col ">
              <h1 className=" font-bold  md:text-[20px] md:leading-[28px] whitespace-nowrap text-[#212529] ">
                Heroes
              </h1>
              <h1 className=" font-bold  md:text-[20px] md:leading-[28px] whitespace-nowrap text-[#212529] ">
                of
              </h1>
              <h1 className=" font-bold  md:text-[20px] md:leading-[28px] whitespace-nowrap text-[#212529] ">
                Humanity
              </h1>
            </div>
          </li>
        </ul>

        <div className="grid w-full   grid-cols-5 gap-4 px-8 max-lg:hidden mx-auto justify-center items-start">
          {menu.right.slice(0, 5).map(({ title, url }, index) => (
            <div
              key={`${title}-${index}`}
              className="flex items-start justify-start"
            >
              <a
                className="cursor-pointer  font-medium text-[#212529] text-[18px] leading-[24px]  hover:text-[#Cf2030]"
                onClick={() => handleNavigation(url)}
              >
                {title}
              </a>
            </div>
          ))}
          <div className="col-span-3 grid grid-cols-3 gap-4 justify-start items-start">
            {menu.right.slice(5).map(({ title, url }, index) => (
              <div
                key={`${title}-${index}`}
                className="flex items-start justify-start"
              >
                <a
                  className="cursor-pointer  text-[#212529] text-[18px] leading-[24px] font-medium hover:text-[#Cf2030]"
                  onClick={() => handleNavigation(url)}
                >
                  {title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-5 max-lg:hidden">
          <button className="h-[45px] w-[130px] rounded-lg  bg-[#8C0365]  text-white">
            Get Started
          </button>
          <button className="h-[45px] w-[90px] bg-[#A41010] text-[#E4F0FA] rounded-lg">
            Log in
          </button>
        </div>
        {/* Mobile menu navigation */}
        <button
          className="lg:hidden z-50 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.690761 16.3639L15.9643 1.09042C16.3018 0.752853 16.7373 0.540864 17.1749 0.501081C17.6125 0.461298 18.0164 0.596983 18.2977 0.878288C18.579 1.15959 18.7147 1.56347 18.6749 2.00108C18.6351 2.43869 18.4232 2.87417 18.0856 3.21174L2.81208 18.4852C2.47452 18.8228 2.03903 19.0348 1.60142 19.0746C1.16381 19.1144 0.759934 18.9787 0.478629 18.6974C0.197325 18.4161 0.0616391 18.0122 0.101422 17.5746C0.141204 17.137 0.353196 16.7015 0.690761 16.3639Z"
                fill="#212529"
              />
              <path
                d="M3.39389 1.27279L18.6674 16.5463C19.005 16.8839 19.2169 17.3194 19.2567 17.757C19.2965 18.1946 19.1608 18.5984 18.8795 18.8798C18.5982 19.1611 18.1943 19.2967 17.7567 19.257C17.3191 19.2172 16.8836 19.0052 16.5461 18.6676L1.27257 3.39411C0.935 3.05655 0.723008 2.62106 0.683226 2.18345C0.643443 1.74585 0.779129 1.34197 1.06043 1.06066C1.34174 0.779356 1.74562 0.64367 2.18323 0.683453C2.62083 0.723235 3.05632 0.935227 3.39389 1.27279Z"
                fill="#212529"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8 0H10.8C11.2774 0 11.7352 0.189642 12.0728 0.527208C12.4104 0.864773 12.6 1.32261 12.6 1.8C12.6 2.27739 12.4104 2.73523 12.0728 3.07279C11.7352 3.41036 11.2774 3.6 10.8 3.6H1.8C1.32261 3.6 0.864773 3.41036 0.527208 3.07279C0.189642 2.73523 0 2.27739 0 1.8C0 1.32261 0.189642 0.864773 0.527208 0.527208C0.864773 0.189642 1.32261 0 1.8 0ZM14.4 14.4H23.4C23.8774 14.4 24.3352 14.5896 24.6728 14.9272C25.0104 15.2648 25.2 15.7226 25.2 16.2C25.2 16.6774 25.0104 17.1352 24.6728 17.4728C24.3352 17.8104 23.8774 18 23.4 18H14.4C13.9226 18 13.4648 17.8104 13.1272 17.4728C12.7896 17.1352 12.6 16.6774 12.6 16.2C12.6 15.7226 12.7896 15.2648 13.1272 14.9272C13.4648 14.5896 13.9226 14.4 14.4 14.4ZM1.8 7.2H23.4C23.8774 7.2 24.3352 7.38964 24.6728 7.72721C25.0104 8.06477 25.2 8.52261 25.2 9C25.2 9.47739 25.0104 9.93523 24.6728 10.2728C24.3352 10.6104 23.8774 10.8 23.4 10.8H1.8C1.32261 10.8 0.864773 10.6104 0.527208 10.2728C0.189642 9.93523 0 9.47739 0 9C0 8.52261 0.189642 8.06477 0.527208 7.72721C0.864773 7.38964 1.32261 7.2 1.8 7.2Z"
                fill="#212529"
              />
            </svg>
          )}
        </button>
      </nav>
      {/* Mobile Menu Open  */}
      <div
        className={`fixed top-0 z-[1000] h-full w-full transform bg-[#FFF1FA] backdrop-blur-3xl transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`fixed top-0 left-0 z-[1000] h-screen w-full bg-[#FFF1FA] backdrop-blur-3xl transform transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full items-center justify-center gap-6 p-4 my-4">
            {navLinks.map(({ title, url }) => (
              <a
                key={url}
                className="text-black text-lg font-medium hover:text-gray-300 transition-colors"
                onClick={() => handleNavigation(url)}
              >
                {title}
              </a>
            ))}
            <div className="flex flex-col gap-4 w-full max-w-[200px]">
              <button
                className="h-[45px] w-full rounded-lg bg-[#8C0365] text-white font-medium hover:bg-[#6d024e] transition-colors"
                onClick={() => handleNavigation("/get-started")}
              >
                Get Started
              </button>
              <button
                className="h-[45px] w-full rounded-lg bg-[#A41010] text-[#E4F0FA] font-medium hover:bg-[#850d0d] transition-colors"
                onClick={() => handleNavigation("/login")}
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

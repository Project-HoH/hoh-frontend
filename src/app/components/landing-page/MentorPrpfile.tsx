/* eslint-disable @next/next/no-img-element */
import React from "react";
import DrNoorImage from "../../../../public/Dr.Noor.png";

const MentorProfile = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-700 mb-2">
          Get Mentored From The Best
        </h1>
        <h2 className="text-gray-600 text-lg">
          Get mentored by Dr. Lorem Ipsum in every step of your journey at
          Academically.
        </h2>
      </div>
      <div className="bg-white rounded-lg border border-[#90C9E9] overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Container */}
          <div className="w-full md:w-1/3 flex justify-center p-6">
            <img
              src={DrNoorImage.src}
              alt="Dr. Noor Uddin Afzal"
              className="w-full max-w-[400px] h-auto object-cover rounded-lg"
            />
          </div>

          {/* Content Container */}
          <div className="w-full md:w-2/3 p-6">
            {/* Header */}
            

            {/* Mentor Details */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold">Dr. Noor Uddin Afzal</h3>
              <p className="text-gray-600">Founder, CEO</p>
              <p className="text-gray-600">ENT Surgeon, Medico Legal Expert</p>
            </div>

            {/* Mentor Description */}
            <p className="text-gray-700 mb-4 md:text-[18px]">
              Dr. Noor Uddin Afzal is highly experienced Medical Administrator.
              He is an ENT Surgeon, Medico Legal Expert and the Chief Medical
              Coordinator of Shadan Institute of Medical Sciences, Hyderabad. He
              is actively involved in the various clinical, social and
              philanthropic activities associated with the institutes across the
              globe. He brings extensive experience in managing medical teams,
              lab setups and integrations, healthcare data and analytics,
              policies, budgets, procurement, medical campaigns, and medical
              campaigns, and clinical research activities.
            </p>

            {/* Know More Button */}
            <button className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;

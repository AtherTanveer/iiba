import React from "react";
import iibaLogo from "./assets/IIBA_logo.png"; // apna logo path

const HeroIIBA = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-white text-blue-900 overflow-hidden px-6 md:px-16">

      {/* Animated Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 opacity-20 rounded-full animate-pulseSlow"></div>
      <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-blue-300 opacity-20 rounded-full animate-pulseSlow delay-2000"></div>

      {/* Logo + IIBA Text */}
      <div className="mt-6 md:mt-0 flex items-center gap-3 mb-8 md:absolute md:top-6 md:left-6 md:mb-0 justify-center w-full md:w-auto">
        <img src={iibaLogo} alt="IIBA Logo" className="w-17 md:w-20 drop-shadow-md" />
        <span className="text-5xl md:text-4xl font-bold text-sky-900">IIBA</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-snug md:leading-tight animate-fadeInDown mt-0 md:mt-19">
        <span className="text-blue-500 font-bold"> Welcome to</span> <br />
        <span className="text-sky-900 uppercase text-2xl md:text-6xl">
          Indian Industries & Business Association <br />
          <span className="text-xl md:text-3xl text-gray-500" >(Regd.) India</span>
        </span>
      </h1>

      {/* Sub Heading */}
      <p className="mt-4 md:mt-6 text-lg md:text-2xl text-blue-800 text-center max-w-3xl animate-fadeInUp">
        Empowering MSMEs & Industries Across India.
        Join a thriving network of entrepreneurs, industry leaders, and policymakers.
      </p>

      {/* Benefits Slider */}
      <div className="mt-8 md:mt-12 w-full max-w-4xl overflow-hidden relative animate-fadeIn">
        <div className="flex animate-slideLeft gap-4 whitespace-nowrap text-lg md:text-xl font-medium">
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-lg">
            Business Networking
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-lg">
            Policy Awareness
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-lg">
            Industrial Development
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-lg">
            MSME Empowerment
          </span>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-lg">
            Expert Guidance
          </span>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 animate-fadeInUp">
        <a
          href="/Newuser"
          className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:bg-blue-800 hover:scale-105 transform transition duration-300"
        >
          Become Member
        </a>
        <a
          href="/contactpage"
          className="px-8 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transform transition duration-300"
        >
          Contact Us
        </a>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          @keyframes pulseSlow {
            0%, 100% { transform: scale(1); opacity: 0.15; }
            50% { transform: scale(1.2); opacity: 0.25; }
          }

          .animate-fadeInDown { animation: fadeInDown 1s ease-out forwards; }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }
          .animate-fadeIn { animation: fadeIn 2s ease-out forwards; }
          .animate-slideLeft { animation: slideLeft 12s linear infinite; }
          .animate-pulseSlow { animation: pulseSlow 6s ease-in-out infinite; }
          .delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </div>
  );
};

export default HeroIIBA;
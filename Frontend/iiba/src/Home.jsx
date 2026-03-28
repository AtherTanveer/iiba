import React from "react";
import rain from "./assets/RAIN.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="md:flex items-center min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-50">

      {/* LEFT SECTION */}
      <div className="px-6 py-12 md:w-[50%] md:px-14">

        <div className="text-center md:text-left">

          {/* Logo + IIBA */}
          <div className="flex items-center justify-center md:justify-start gap-3">

            <img
              src={"/IIBA_logo.png"}
              alt="IIBA Logo"
              className="w-14 md:w-20 drop-shadow-md"
            />

            <span className="text-5xl md:text-7xl font-extrabold text-sky-900 tracking-wide drop-shadow-lg">
              IIBA
            </span>

          </div>

          {/* Full Name */}
          <span className="uppercase block text-xl md:text-6xl font-semibold text-gray-700 mt-3">
            Indian Industries & Business Association
          </span>

          {/* Regd */}
          <span className="block text-sm md:text-lg mt-3 text-gray-600">
            (Regd.) India
          </span>

          {/* Blue Line */}
          <div className="flex justify-center md:justify-start mt-4">
            <div className="w-32 h-[3px] bg-sky-700 rounded"></div>
          </div>

        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700 text-[15px] md:text-[17px] leading-relaxed md:w-[80%] text-center md:text-left">
          The Indian Industries Business Association (IIBA) works on a
          broad-based objective of fostering cooperation and providing support
          for the promotion and development of Micro, Small & Medium
          Enterprises (MSMEs).
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

          <Link
            to={"/Newuser"}
            className="px-7 py-3 text-center border-2 border-sky-900 text-sky-900 
            font-semibold rounded-md hover:bg-sky-900 hover:text-white 
            transition duration-300 shadow-md"
          >
            Become Member
          </Link>

          <Link
            to={"/contactpage"}
            className="px-7 py-3 text-center bg-sky-900 text-white 
            font-semibold rounded-md hover:bg-sky-800 
            transition duration-300 shadow-lg"
          >
            Contact Us
          </Link>

        </div>

      </div>

      {/* RIGHT SECTION IMAGE */}
      <div className="md:w-[50%] px-6 md:px-10 pb-10 md:pb-0">
        <img
          src={rain}
          alt="IIBA Protection"
          className="w-full max-w-lg mx-auto drop-shadow-2xl"
        />
      </div>

    </div>
  );
};

export default Home;
import React from 'react'
import iiba from "./assets/IIBA.png"
import bg from "./assets/bg.jpg"
import rain from "./assets/RAIN.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div
        className="md:flex md:h-[100vh] text-black bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-sky-100/90 via-white/90 to-white"></div>

        {/* LEFT SECTION */}
        <div className="relative z-10 px-2 pt-7 pb-6 md:w-[50%] md:pt-[6vw] md:ps-9">

          {/* 🔥 Mobile Logo Top */}
          {/* <div className="flex justify-center md:hidden mb-6">
            <img src={iiba} alt="IIBA Logo" className="w-20 drop-shadow-lg" />
          </div> */}

          {/* Heading */}
          <h1 className="text-2xl leading-snug text-center font-bold uppercase 
                         md:text-5xl md:text-left md:font-medium md:pt-6">
            <span className="text-sky-950 block">INDIAN</span>
            INDUSTRIES & BUSINESS ASSOCIATION <br className="hidden md:block" />
            <span className="text-sm md:text-xl font-medium block mt-2">
              (REGD.) INDIA
            </span>
          </h1>

          {/* Description */}
          <p className="text-center text-sm mt-5 bg-white/70 backdrop-blur-sm p-4 rounded-xl
                        md:text-left md:text-[17px] md:pt-4 md:w-[60%] md:p-3 md:bg-transparent md:shadow-none">
            The Indian Industries Business Association (IIBA) works on a broad-based objective of fostering cooperation and providing support for the promotion and development of Micro, Small & Medium Enterprises (MSMEs).
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4 mt-6
                          md:flex md:flex-row md:text-left md:pt-4 md:p-7 md:mt-3 md:ms-1">

            <Link
              to={"/Newuser"}
              className="w-full max-w-[250px] text-center 
                         text-sky-950 border-2 border-sky-950 py-3 rounded-full font-semibold 
                         hover:bg-sky-950 hover:text-white transition-all duration-300 shadow-md
                         md:w-[160px] md:rounded-md md:px-[30px]"
            >
              To Member
            </Link>

            <Link
              className="w-full max-w-[250px] text-center 
                         bg-sky-950 text-white py-3 rounded-full font-semibold
                         hover:bg-sky-800 transition-all duration-300 shadow-lg
                         md:w-[160px] md:rounded-md md:px-[30px]"
            >
              Contact Us
            </Link>

          </div>
        </div>

        {/* RIGHT SECTION IMAGE */}
        <div className="relative z-10 px-4 pb-10 md:w-[50%] md:pt-[8vw] md:mt-9">

          {/* Mobile image style */}
          <div className="rounded-2xl overflow-hidden md:shadow-none md:rounded-none">
            <img
              src={rain}
              alt="IIBA Protection"
              className="w-full object-cover"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home

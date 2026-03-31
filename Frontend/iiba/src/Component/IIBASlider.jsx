import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slidesData = [
  {
    title: "Expand Your Business Network",
    description:
      "Connect with industry leaders, entrepreneurs, and policymakers to grow your business and open new opportunities.",
    bgColor: "from-sky-900 via-blue-900 to-indigo-900",
  },
  {
    title: "Access Expert Guidance",
    description:
      "Get practical solutions and professional advice on legal, operational, and compliance challenges.",
    bgColor: "from-green-900 via-green-700 to-green-900",
  },
  {
    title: "Stay Updated with Policies",
    description:
      "Be aware of the latest government schemes, regulations, and policies that can benefit your business.",
    bgColor: "from-purple-900 via-pink-900 to-red-900",
  },
  {
    title: "Empower Your MSME",
    description:
      "Gain strategic insights, knowledge resources, and support to grow sustainably and stay competitive.",
    bgColor: "from-yellow-900 via-orange-900 to-red-800",
  },
];

const IIBAHomeSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[450px] md:h-[550px] rounded-xl shadow-lg">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
          ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <div
            className={`w-full h-full flex flex-col justify-center md:justify-center items-start md:items-start px-6 md:px-20 bg-gradient-to-br ${slide.bgColor} text-white`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
              {slide.description}
            </p>
            <div className="mt-6 flex gap-4">
              <Link to="/membership-benefits">
                <button className="bg-amber-400 text-black px-6 py-3 rounded-lg hover:bg-amber-300 transition font-semibold">
                  Learn More
                </button>
              </Link>
              <Link to="/membership">
                <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition font-semibold">
                  Join IIBA
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slidesData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === idx ? "bg-white" : "bg-gray-400/50"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default IIBAHomeSlider;
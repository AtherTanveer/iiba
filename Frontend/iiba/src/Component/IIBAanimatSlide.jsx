import React, { useState, useEffect } from "react";
import { FaIndustry, FaRoad, FaLandmark, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const IIBAanimatSlide = () => {
  const slides = [
    {
      title: "Government Policy Support",
      description:
        "IIBA guides MSMEs and industries through complex government regulations, policies, and schemes to ensure compliance and growth.",
      icon: <FaLandmark className="text-6xl text-yellow-400" />,
      bg: "from-blue-900 via-indigo-900 to-purple-900",
    },
    {
      title: "Road & Infrastructure Solutions",
      description:
        "We connect businesses with authorities and solutions to overcome infrastructure challenges, ensuring smooth operations and logistics.",
      icon: <FaRoad className="text-6xl text-green-400" />,
      bg: "from-green-900 via-teal-900 to-cyan-900",
    },
    {
      title: "Industrial Growth & Networking",
      description:
        "Expand your business network with industry leaders, peers, and policymakers for collaborations and partnerships.",
      icon: <FaIndustry className="text-6xl text-orange-400" />,
      bg: "from-red-900 via-pink-900 to-purple-700",
    },
    {
      title: "MSME & Entrepreneur Empowerment",
      description:
        "IIBA empowers entrepreneurs with workshops, guidance, and mentorship to build sustainable and competitive businesses.",
      icon: <FaUsers className="text-6xl text-indigo-400" />,
      bg: "from-purple-900 via-indigo-800 to-blue-700",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <div className="relative w-full h-[500px] overflow-hidden shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"} 
            bg-gradient-to-br ${slide.bg}`}
        >
          <div className="mb-4 animate-bounce">{slide.icon}</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
            {slide.title}
          </h2>
          <p className="text-white text-lg md:text-xl max-w-3xl animate-fadeIn">
            {slide.description}
          </p>
         <Link to="/membership">
                            <button className="mt-5 border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                                Join IIBA
                            </button>
                        </Link>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold hover:text-yellow-400 transition"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold hover:text-yellow-400 transition"
      >
        ›
      </button>
    </div>
  );
};

export default IIBAanimatSlide;
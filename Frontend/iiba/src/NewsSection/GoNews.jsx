import React from "react";
import { useNavigate } from "react-router-dom";

const GoNews = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news"); // navigate to news page
  };

  return (
    <div
      onClick={handleClick}
      className="mb-4 max-w-6xl mx-auto mt-10 cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col md:flex-row"
    >
      {/* Content Left Side */}
      <div className="md:w-1/2 p-5 md:p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Stay Updated with IIBA News & Events
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          IIBA shares regular updates on industry news, seminars, workshops, and
          professional events for business analysts. Keep track of latest opportunities
          to learn and grow in your career.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Click below to explore all upcoming events, webinars, and news updates
          published by IIBA.
        </p>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 w-max transition"
        >
          Go to News
        </button>
      </div>

      {/* Optional Image Right Side */}
      <div className="md:w-1/2 p-3">
        <img
          src="IIBA_logo9.png"
          alt="IIBA News"
          className="w-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default GoNews;
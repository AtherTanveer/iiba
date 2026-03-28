import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white z-50 px-4">

      <div className="relative flex items-center justify-center">

        {/* Rotating Gear Circle */}
        <div className="absolute 
        w-40 h-40 
        sm:w-48 sm:h-48 
        md:w-56 md:h-56 
        border-[8px] md:border-[10px] 
        border-blue-700 
        rounded-full 
        border-dashed 
        animate-spin">
        </div>

        {/* Inner Circle */}
        <div className="absolute 
        w-28 h-28 
        sm:w-32 sm:h-32 
        md:w-40 md:h-40 
        bg-white 
        rounded-full 
        shadow-lg">
        </div>

        {/* Logo */}
        <img
          src="/IIBA_logo.png"
          alt="IIBA"
          className="w-16 sm:w-20 md:w-24 z-10 animate-pulse"
        />

      </div>

      {/* Text */}
      <div className="mt-8 md:mt-10 text-center px-2">

        <h1 className="mt-6 text-lg sm:text-xl md:text-2xl font-bold text-blue-900 tracking-wide">
          IIBA
        </h1>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
          Indian Industry & Business Association
        </p>

      </div>

      {/* Loading dots */}
      <div className="flex gap-2 mt-5 md:mt-6">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-700 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-700 rounded-full animate-bounce delay-150"></div>
        <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-700 rounded-full animate-bounce delay-300"></div>
      </div>

    </div>
  );
};

export default Loader;
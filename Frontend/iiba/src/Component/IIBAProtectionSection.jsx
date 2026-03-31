import React from "react";
import umbrella from "../assets/RAIN.png"; // umbrella image path
import { motion } from "framer-motion";

const IIBAProtectionSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left: Animated Umbrella */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={umbrella}
            alt="IIBA Protection"
            className="w-72 md:w-96 lg:w-[28rem] drop-shadow-2xl"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-5"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sky-700">
            Shielding Your Growth
          </h2>
          <div className="w-16 h-1 bg-sky-900 rounded mt-2 mb-3 mx-auto md:mx-0"></div>
          <p className="text-sky-900 text-lg md:text-xl leading-snug">
            IIBA protects industries from operational, legal, and policy challenges, helping businesses thrive with confidence.
          </p>
          <a
            href="/contactpage"
            className="inline-block mt-4 px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-lg
            hover:bg-teal-500 hover:scale-105 transition-transform duration-300"
          >
            Learn How
          </a>
        </motion.div>

      </div>

      {/* Background floating shapes */}
      <motion.div 
        className="absolute -top-20 -left-20 w-72 h-72 bg-sky-100 rounded-full opacity-40 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

    </section>
  );
};

export default IIBAProtectionSection;
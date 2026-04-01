import React from "react";
import umbrella from "../assets/RAIN.png";
import { motion } from "framer-motion";

const IIBAProtectionSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={umbrella}
            alt="IIBA Protection"
            className="w-56 sm:w-64 md:w-80 lg:w-[26rem] drop-shadow-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{
              repeat: 1,
              duration: 3,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-5"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Shielding Your Growth
          </motion.h2>

          <motion.div
            className="w-16 h-1 bg-sky-900 rounded mx-auto md:mx-0"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />

          <motion.p
            className="text-sky-900 text-base sm:text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            IIBA protects industries from operational, legal, and policy
            challenges, helping businesses thrive with confidence.
          </motion.p>

          <motion.a
            href="/contactpage"
            className="inline-block mt-4 px-7 py-3 bg-sky-600 text-white font-semibold rounded-lg shadow-md
            hover:bg-teal-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn How
          </motion.a>
        </motion.div>

      </div>

      {/* Background shapes (desktop only) */}
      <motion.div
        className="hidden md:block absolute -top-20 -left-20 w-72 h-72 bg-sky-100 rounded-full opacity-40 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <motion.div
        className="hidden md:block absolute -bottom-20 -right-20 w-96 h-96 bg-teal-200 rounded-full opacity-30 blur-3xl"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
      />

    </section>
  );
};

export default IIBAProtectionSection;
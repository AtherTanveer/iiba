import React from "react";
import choose from "../assets/choose.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Services = () => {

  const serviceList = [
    {
      heading: "MSME Support & Advisory",
      content:
        "Providing guidance and assistance to MSMEs on regulatory, technical, and operational matters."
    },
    {
      heading: "Legal & Policy Awareness",
      content:
        "Disseminating information about government policies, procedures, industrial laws, and compliance requirements."
    },
    {
      heading: "Industry Problem Resolution",
      content:
        "Helping industries resolve practical challenges through expert consultations."
    },
    {
      heading: "Market & Industry Insights",
      content:
        "Sharing latest industry developments, market trends, and technological updates."
    },
    {
      heading: "Business Networking",
      content:
        "Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth."
    }
  ];

  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "10000+", label: "MSMEs Supported" },
    { number: "500+", label: "Industry Events" },
    { number: "100+", label: "Policy Workshops" }
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-sky-950">
          What We Do
        </h1>

        <div className="flex justify-center">
          <div className="w-20 h-1 bg-sky-600 mt-2 mb-5"></div>
        </div>

        <p className="text-gray-600 max-w-xl mx-auto">
          Empowering Industries Through Expert Services
        </p>
      </motion.div>

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-4 pb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {serviceList.map((elem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-sky-950 mb-4">
              {elem.heading}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {elem.content}
            </p>
          </motion.div>
        ))}

      </div>

      {/* WHY CHOOSE */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950 mb-6">
            Why Choose IIBA
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✔ 20+ Years of Industry Experience</li>
            <li>✔ Trusted by MSMEs Across India</li>
            <li>✔ Expert Guidance on Government Policies</li>
            <li>✔ Strong Industry Network & Advocacy</li>
            <li>✔ Dedicated Support for Industrial Growth</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={choose}
            alt="Why Choose IIBA"
            className="w-full max-w-sm md:max-w-lg"
          />
        </motion.div>

      </div>

      {/* STATS */}
      <section className="bg-sky-950 py-20 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          {stats.map((item, index) => (
            <motion.div
              key={index}
             
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="p-6 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm hover:scale-105 transition"
            >

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                <CountUp
                  end={parseInt(item.number.replace(/[^0-9]/g, ""))}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h2>

              <p className="text-sky-200 uppercase tracking-widest text-xs md:text-sm">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Services;
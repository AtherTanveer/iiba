import React from "react";
import { FaRoad } from "react-icons/fa6";
import { FaIndustry } from "react-icons/fa6";
import { RiGovernmentFill } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
import { TbBuildingEstate } from "react-icons/tb";

const WorkSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-sky-50 py-16 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900">
          Our Work & Contributions
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          With over 20 years of experience, IIBA has been actively working
          towards infrastructure development, government collaboration, and
          empowering industries and businesses across multiple states.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-sky-800 mb-3">
            <RiGovernmentFill />
            Government Projects
          </h3>
          <p className="text-gray-600 text-sm">
            Successfully collaborated with government bodies to support and
            execute various public development projects, including policy-level
            support and approvals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-sky-800 mb-3">
            <FaRoad /> Road & Infrastructure Development 
          </h3>
          <p className="text-gray-600 text-sm">
            Played a key role in road construction and infrastructure
            development across Uttar Pradesh, Uttarakhand, and Haryana,
            improving connectivity and accessibility.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-sky-800 mb-3">
           <FaIndustry />
 Industrial & Business Support
          </h3>
          <p className="text-gray-600 text-sm">
            Helping industries and businesses establish, grow, and sustain
            operations by providing guidance, support, and government
            coordination.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-sky-800 mb-3">
            <MdPolicy />
            Policy & Development Work
          </h3>
          <p className="text-gray-600 text-sm">
            Contributed to multiple government-related initiatives and
            development activities focused on public welfare and economic
            growth.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-sky-800 mb-3">
            <TbBuildingEstate />
            Multi-State Operations
          </h3>
          <p className="text-gray-600 text-sm">
            Actively working across Uttar Pradesh, Uttarakhand, and Haryana,
            delivering impactful projects and strengthening regional
            development.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-sky-800 mb-3">
            20+ Years Experience
          </h3>
          <p className="text-gray-600 text-sm">
            Backed by nearly two decades of experience, IIBA continues to build
            trust through consistent performance, large-scale execution, and
            strong government relations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WorkSection;
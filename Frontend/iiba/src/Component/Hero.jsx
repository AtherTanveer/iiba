import React from 'react'
import Mission from "../assets/mission.jpg"
import vision from "../assets/vision.png"
import aboutimg from "../assets/about.png"
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <div className='bg-slate-50 py-12 px-4 md:px-16 overflow-x-hidden'>

            {/* ================= ABOUT SECTION ================= */}
            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-center text-3xl md:text-5xl font-bold text-sky-950">
                    About IIBA
                </h1>

                <div className='flex justify-around'>
                    <div className="w-19 h-1 bg-sky-600 mt-2 mb-5"></div>
                </div>

                <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto">
                    Indian Industries Business Association – Empowering MSMEs,
                    Strengthening Industries, Building the Nation.
                </p>

                <div className="grid md:grid-cols-2 gap-10 items-center mt-10">

                    {/* Image */}
                    <motion.div
                        className="flex justify-center order-1 md:order-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={aboutimg}
                            alt="About IIBA"
                            className="w-full max-w-sm md:max-w-lg rounded-xl shadow-lg"
                        />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="space-y-5 text-gray-700 text-base leading-relaxed order-2 md:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <p>
                            The Indian Industries Business Association (IIBA) is a premier
                            business organization dedicated to strengthening and supporting
                            the MSME sector in India.
                        </p>

                        <p>
                            For over three decades, IIBA has consistently worked towards
                            promoting industrial development by disseminating valuable
                            information on legal, technical, and market-related matters,
                            along with the latest government policies and procedures.
                        </p>

                        <p>
                            IIBA assists industries in solving practical and operational
                            challenges, ensuring sustainable growth and competitiveness.
                        </p>

                        <Link
                            to={"/AboutIIBA"}
                            className="mt-3 px-6 py-3 bg-sky-950 text-white rounded-lg shadow-md hover:bg-sky-800 hover:shadow-xl transition"
                        >
                            Learn More
                        </Link>

                    </motion.div>

                </div>

            </div>


            {/* ================= MISSION SECTION ================= */}
            <div className="max-w-7xl mx-auto mt-16 px-5">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={Mission}
                            alt="Mission"
                            className="w-full max-w-sm md:max-w-lg rounded-xl shadow-lg"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-sky-950">
                            Our Mission
                        </h2>

                        <div className="w-16 h-1 bg-sky-600 mt-2 mb-5"></div>

                        <p className="text-gray-700 leading-relaxed">
                            To foster cooperation among industries and provide guidance,
                            resources, and advocacy to empower MSMEs and promote sustainable
                            industrial development in India.
                        </p>

                        <ul className="mt-4 space-y-3 text-gray-700">
                            <li>• Connecting entrepreneurs, manufacturers, and business leaders.</li>
                            <li>• Encouraging collaboration and innovation.</li>
                            <li>• Helping industries solve real business challenges.</li>
                        </ul>
                    </motion.div>

                </div>
            </div>


            {/* ================= VISION SECTION ================= */}
            <div className="max-w-7xl mx-auto mt-20 px-5">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Image */}
                    <motion.div
                        className="flex justify-center md:order-2"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={vision}
                            alt="Vision"
                            className="w-full max-w-sm md:max-w-lg rounded-xl shadow-lg"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="md:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-sky-950">
                            Our Vision
                        </h2>

                        <div className="w-16 h-1 bg-sky-600 mt-2 mb-5"></div>

                        <p className="text-gray-700 leading-relaxed">
                            To create a powerful, connected, and forward-looking industrial
                            ecosystem that accelerates MSME growth and strengthens India's
                            economic foundation.
                        </p>

                        <ul className="mt-4 space-y-3 text-gray-700">
                            <li>• Building a strong network of industries.</li>
                            <li>• Promoting sustainable development.</li>
                            <li>• Supporting MSMEs for national growth.</li>
                        </ul>
                    </motion.div>

                </div>

            </div>

        </div>
    )
}

export default Hero
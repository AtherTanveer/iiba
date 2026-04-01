import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry, FaUsers, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const IIBAHighlight = () => {

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -40 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 40 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const cardAnim = {
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section className="w-full overflow-x-hidden bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white py-20 px-6">

            <motion.div
                className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >

                {/* Left Content */}
                <motion.div variants={fadeLeft}>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Indian Industries Business Association
                    </h2>

                    <p className="mt-6 text-lg text-gray-100 leading-relaxed max-w-3xl">
                        Unlock exclusive access to India’s premier business network, gain expert guidance to grow your MSME, stay ahead with the latest government policies, and connect with top industry leaders. <br /><br />
                        IIBA empowers you to expand your business, solve real-world challenges, and thrive in India’s competitive industrial ecosystem. Don’t wait — become a part of a community that drives growth, innovation, and opportunity!
                    </p>

                    <div className="mt-8 flex gap-4 flex-wrap">

                        <Link to="/AboutIIBA">
                            <button className="bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-amber-300 transition">
                                Learn More
                            </button>
                        </Link>

                        <Link to="/membership">
                            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                                Join IIBA
                            </button>
                        </Link>

                    </div>

                </motion.div>


                {/* Right Cards */}
                <motion.div className="grid grid-cols-1 gap-6" variants={fadeRight}>

                    <motion.div variants={cardAnim} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

                        <div className="flex items-center gap-4">
                            <FaIndustry className="text-3xl text-amber-400" />

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Industrial Development
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Supporting industries with knowledge, guidance, and resources.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div variants={cardAnim} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

                        <div className="flex items-center gap-4">
                            <FaUsers className="text-3xl text-amber-400" />

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Business Network
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Connecting entrepreneurs and industry leaders nationwide.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div variants={cardAnim} className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

                        <div className="flex items-center gap-4">
                            <FaHandshake className="text-3xl text-amber-400" />

                            <div>
                                <h3 className="text-xl font-semibold">
                                    Collaboration
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Building partnerships between businesses and government.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                </motion.div>

            </motion.div>

        </section>
    );
};

export default IIBAHighlight;
import React from "react";
import { Link } from "react-router-dom";
import { FaIndustry, FaUsers, FaHandshake } from "react-icons/fa";

const IIBAHighlight = () => {
    return (
        <section className="w-full bg-gradient-to-br from-sky-900 via-blue-900 to-indigo-900 text-white py-20 px-6">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Indian Industries Business Association
                    </h2>

                    <p className="mt-6 text-lg text-gray-100 leading-relaxed max-w-3xl mx-auto">
        
                        Unlock exclusive access to India’s premier business network, gain expert guidance to grow your MSME, stay ahead with the latest government policies, and connect with top industry leaders. <br /><br />
                        IIBA empowers you to expand your business, solve real-world challenges, and thrive in India’s competitive industrial ecosystem. Don’t wait — become a part of a community that drives growth, innovation, and opportunity!
                    </p>

                    <div className="mt-8 flex gap-4">

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

                </div>


                {/* Right Cards */}
                <div className="grid grid-cols-1 gap-6">

                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

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

                    </div>

                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

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

                    </div>

                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:scale-105 transition">

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

                    </div>

                </div>

            </div>

        </section>
    );
};

export default IIBAHighlight;
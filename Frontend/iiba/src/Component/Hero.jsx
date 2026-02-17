import React from 'react'
import Mission from "../assets/mission.jpg"
import vision from "../assets/vision.png"
import aboutimg from "../assets/about.png"

const Hero = () => {
    return (
        <div className='bg-slate-50 py-12 px-4 md:px-16'>

            {/* ================= ABOUT SECTION ================= */}
            <div className='max-w-7xl mx-auto'>

                <h1 className='text-center text-3xl md:text-5xl font-bold text-sky-950'>
                    About IIBA
                </h1>

                <p className='text-center text-gray-600 mt-3 max-w-3xl mx-auto'>
                    Indian Industries Business Association – Empowering MSMEs, 
                    Strengthening Industries, Building the Nation.
                </p>

                <div className='grid md:grid-cols-2 gap-10 items-center mt-12'>

                    {/* Left Content */}
                    <div className='space-y-5 text-gray-700 text-base leading-relaxed'>

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

                        <button className='mt-4 px-6 py-3 bg-sky-950 text-white rounded-lg shadow-md 
                        hover:bg-sky-800 hover:shadow-xl transition-all duration-300'>
                            Learn More
                        </button>

                    </div>

                    {/* Right Image */}
                    <div className='flex justify-center'>
                        <img 
                            src={aboutimg} 
                            alt="About IIBA"
                            className='w-full max-w-md md:max-w-lg drop-shadow-2xl'
                        />
                    </div>

                </div>
            </div>


            {/* ================= MISSION SECTION ================= */}
            <div className='max-w-7xl mx-auto mt-20'>

                <div className='grid md:grid-cols-2 gap-10 items-center'>

                    <div className='bg-white p-8 rounded-2xl shadow-lg'>
                        <h2 className='text-3xl md:text-4xl font-bold text-sky-950'>
                            Our Mission
                        </h2>

                        <p className='mt-6 text-gray-700 leading-relaxed'>
                            To foster cooperation among industries and provide guidance,
                            resources, and advocacy to empower MSMEs and promote sustainable
                            industrial development in India.
                        </p>

                        <p className='mt-4 text-gray-700'>
                            Connecting entrepreneurs, manufacturers, and business leaders
                            for collaboration and growth.
                        </p>

                        <p className='mt-4 text-gray-700'>
                            Helping industries resolve practical challenges through expert
                            consultations and industry-driven solutions.
                        </p>
                    </div>

                    <div className='flex justify-center'>
                        <img 
                            src={Mission} 
                            alt="Mission"
                            className='w-full max-w-md md:max-w-lg rounded-xl shadow-xl'
                        />
                    </div>

                </div>
            </div>


            {/* ================= VISION SECTION ================= */}
            <div className='max-w-7xl mx-auto mt-20'>

                <div className='grid md:grid-cols-2 gap-10 items-center'>

                    <div className='flex justify-center order-2 md:order-1'>
                        <img 
                            src={vision} 
                            alt="Vision"
                            className='w-full max-w-md md:max-w-lg rounded-xl shadow-xl'
                        />
                    </div>

                    <div className='bg-white p-8 rounded-2xl shadow-lg order-1 md:order-2'>
                        <h2 className='text-3xl md:text-4xl font-bold text-sky-950'>
                            Our Vision
                        </h2>

                        <p className='mt-6 text-gray-700 leading-relaxed'>
                            To create a powerful, connected, and forward-looking industrial
                            ecosystem that accelerates MSME growth and strengthens India's
                            economic foundation.
                        </p>

                        <p className='mt-4 text-gray-700'>
                            Enabling collaboration, transparency, and long-term industrial
                            sustainability across regions.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Hero

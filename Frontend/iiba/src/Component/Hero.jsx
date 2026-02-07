import React from 'react'
import Mission from "../assets/mission.jpg"
import vision from "../assets/vision.png"
import aboutimg from "../assets/about.png"

const Hero = () => {
    return (
        <div className='p-2 bg-slate-50'>
            <div className=''>
                <h1 className=' text-black w-full text-center rounded-md text-4xl mt-8 font-medium'>About IIBA</h1>
                <div className='p-2  '>

                    <h1 className='text-black h-12 w-full text-center rounded-md text-2xl md:mt-3 font-medium mb-4'>About Indian Industries Business Association</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 justify-center'>
                        <div>
                            <ul className='text-black rounded md:m-5'>
                                <li> <p className='p-2 '>The Indian Industries Business Association (IIBA) is a premier business organization dedicated to strengthening and supporting the MSME sector in India</p></li>
                                <li><p className='pt-0 p-2'>For over three decades, IIBA has consistently worked towards promoting industrial development by disseminating valuable information on legal, technical, and market-related matters, as well as the latest government policies, procedures, and industrial laws.</p></li>
                                <li>  <p className='pt-0 p-2'> IIBA also assists industries in solving practical and operational challenges, ensuring sustainable growth and competitiveness</p></li>

                                <button className='cursor-pointer ms-1 p-2 bg-sky-950 text-white rounded px-6'>Go About</button>
                            </ul>
                        </div>

                        <div>
                            <img src={aboutimg} alt="" className='w-[120vw]' />

                        </div>
                    </div>







                </div>
            </div>


            {/* MISSION  */}
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center mt-4 rounded-md md:m-1'>
                    <div className='bg-gray-200 p-2 md:m-5 rounded-md'>
                        <h1 className='p-2 text-5xl'>Our Mission</h1>
                        <p className='mt-5'>To foster cooperation among industries and provide guidance, resources, and advocacy to empower MSMEs and promote sustainable industrial development in India.</p>
                        <p className='mt-5'>Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth.</p>

                        <p className='mt-5'>
                            Helping industries resolve practical challenges and facilitating solutions through expert consultations.
                        </p>
                    </div>
                    <div>
                        <img src={Mission} alt="" className='w-fullrounded md:h-82 md:mt-5' />
                    </div>

                </div>




                <div className='grid md:grid-cols-2 justify-center md:p-7 rounded-md md:m-4'>
                    <div className='pt-5'>
                        <img src={vision} alt="" className='w-full rounded' />
                    </div>
                    <div className='p-5 bg-gray-200 md:m-5 rounded-md'>
                        <h1 className='p-2 text-5xl'>OUR VISION</h1>
                        <p className=' mt-5'>To foster cooperation among industries and provide guidance, resources, and advocacy to empower MSMEs and promote sustainable industrial development in India.</p>
                        <p className=' mt-5'>Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth.</p>

                        <p className=' mt-5'>
                            Helping industries resolve practical challenges and facilitating solutions through expert consultations.
                        </p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Hero
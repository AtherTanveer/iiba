import React from 'react'
import Mission from "../assets/mission.png"
import vision from "../assets/vision.jpg"

const Hero = () => {
    return (
        <div className='p-2 bg-white'>
            <div>
                 <h1 className=' text-black w-60 text-center rounded-md text-4xl ms-[40vw] mt-8 font-medium'>About IIBA</h1>
            <div className='p-2'>

                <h1 className='text-black h-12 flex justify-center items-center w-[50vw] text-center rounded-md text-2xl ms-[24vw] mt-3 font-medium mb-4'>About Indian Industries Business Association</h1>

                <ul className='bg-sky-50 w-300 rounded ms-[5vw]'>
                    <li> <p className='p-8 text-black'>The Indian Industries Business Association (IIBA) is a premier business organization dedicated to strengthening and supporting the MSME sector in India</p></li>
                    <li><p className='pt-1 p-8 text-black'>For over three decades, IIBA has consistently worked towards promoting industrial development by disseminating valuable information on legal, technical, and market-related matters, as well as the latest government policies, procedures, and industrial laws.</p></li>
                    <li>  <p className='pt-1 p-8 text-black'> IIBA also assists industries in solving practical and operational challenges, ensuring sustainable growth and competitiveness</p></li>
                </ul>
               
                    

                  
            </div>
            </div>
           

           <div>
            <div className='flex justify-center mt-4 bg-slate-900 text-white p-7 rounded-md m-4'>
                <div className='p-4 bg-slate-700 m-5 rounded-2xl'>
                <h1 className='p-2 text-4xl'>Our Mission</h1>
                <p className='w-150 mt-5'>To foster cooperation among industries and provide guidance, resources, and advocacy to empower MSMEs and promote sustainable industrial development in India.</p>
                <p className='w-150 mt-5'>Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth.</p>

                <p className='w-150 mt-5'>
                    Helping industries resolve practical challenges and facilitating solutions through expert consultations.
                </p>
                </div>
                <div>
                    <img src={Mission} alt="" className='w-[35vw] rounded'/>
                </div>
                
            </div>




            <div className='flex justify-center mt-20 '>
                <div className='pt-5'>
                    <img src={vision} alt="" className='w-[35vw] rounded h-90'/>
                </div>
                <div className='p-6'>
                <h1 className='p-2 text-6xl fon'>OUR VISION</h1>
                <p className='w-150 text-xl mt-5'>To foster cooperation among industries and provide guidance, resources, and advocacy to empower MSMEs and promote sustainable industrial development in India.</p>
                <p className='w-150 text-xl mt-5'>Connecting entrepreneurs, manufacturers, and business leaders for collaboration and growth.</p>

                <p className='w-150 text-xl mt-5'>
                    Helping industries resolve practical challenges and facilitating solutions through expert consultations.
                </p>
                </div>
                
                
            </div>
           </div>

        </div>
    )
}

export default Hero
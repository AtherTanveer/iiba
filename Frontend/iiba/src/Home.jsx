import React from 'react'
import iiba from "./assets/IIBA.png"
import bg from "./assets/bg.jpg"
import rain from "./assets/RAIN.png"

const Home = () => {
  return (
    <>
    <div className={`md:flex md:h-[88vh] text-black bg-cover bg-center relative fill-white`} style={{ backgroundImage: `url(${bg})` }}>
        <div className='absolute inset-0 bg-gradient-to-r from-sky-50/70 to-white/100'></div>
    
        <div className='p-2 md:w-[50%] md:pt-[6vw] ps-9 relative' >
            <h1 className='md:text-5xl text-center md:text-left font-medium uppercase pt-6'><span className='text-sky-950'>INDIAN </span>INDUSTIRES & <br></br>BUSINESS ASSOCIATION (REGD,)INDIA</h1>
        <p className='text-center md:text-left text-sm md:text-[17px] pt-4 md:w-[60%] p-3 font-medium'>The Indian Industries Business Association (IIBA) works on a broad-based objective of fostering cooperation and providing support for the promotion and development of Micro, Small & Medium Enterprises (MSMEs).</p>




        <div className='md:flex text-center md:text-left p-7 text-white md:mt-3 md:ms-1'>
           <button className='bg-sky-950 p-2 md:px-[30px] m-1 rounded-md md:text-lg font-semibold w-[160px]'>To Member</button>
           <button className='bg-sky-950 p-2 md:px-[30px] m-1 rounded-md md:text-lg font-semibold w-[150px]'>Contact Us</button>
        </div>

        </div>

        <div className='p-2 md:w-[50%] pt-[5vw] relative md:mt-9'>
            <img src={rain} alt="" className='w-[100vw]' />
      
        </div>
    </div>
    </>
  )
}

export default Home
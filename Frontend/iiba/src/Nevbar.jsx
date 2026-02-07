import React from 'react'
import IIBA_LOGO from "./assets/IIBA_logo1.png"
import { FiAlignJustify } from "react-icons/fi";

const Nevbar = () => {
  return (
    <>
    <div className='bg-sky-950 text-black flex justify-between md:justify-evenly pt-2'>
      <div className='justify-end'>
         {/* <h1 className=' text-white font-semibold text-3xl md:m-5'>IIBA </h1> */}
         <img src={IIBA_LOGO} alt="" className='ms-3 w-11 md:w-[4vw]'/>

      </div>
       
       
          <ul className='text-white font-medium hidden md:flex gap-10 m-3 md:m-5 md:w-[80%] pt-1 text-[18px]'>
            <li>Home</li>
            <li>Mission</li>
            <li>About</li>
            <li>Goal</li>
            <li>Help</li>
        </ul>

    <h1 className=' text-white text-right font-medium text-3xl md:m-5 mx-6 pt-1 flex md:hidden '><FiAlignJustify />
</h1>
<h1 className=' text-white font-medium text-1xl md:m-5 pt-1 text-end hidden md:flex '>Contact-us
</h1>
       
      
    </div>
    </>
  )
}

export default Nevbar
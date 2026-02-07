import React from 'react'
import member from "../assets/member.png"

const MemberLayout = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 p-5'>
        <div>
            <h1 className='p-2 text-3xl md:text-8xl'><span className='text-sky-800'>Become</span> a Member of IIBA</h1>
            <p className='p-2'>Join IIBA and be part of a powerful network that supports your business growth, compliance guidance, and industry collaboration.</p>
            {/* <h1>Get access to:</h1> */}
            {/* <ul>
                <li>Expert advisory</li>
                <li>Policy updates</li>
                <li>Industry networking</li>
                <li>Training & workshops</li>
            </ul> */}

            <button className='p-2 px-5 ms-2 mt-4 rounded bg-sky-950 text-white'>Apply for Membership</button>
        </div>
        <div>
            <img src={member} alt="" className='w-full'/>
        </div>
    </div>
    </>
  )
}

export default MemberLayout
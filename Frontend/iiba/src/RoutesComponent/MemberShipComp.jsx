import React from 'react'
import {Link} from "react-router-dom"

const MemberShipComp = () => {
  return (
    <>
    <h1 className='w-full text-center text-3xl md:mt-7 font-medium'>IIBA Membership</h1>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-2 text-white mt-9'>
        
        <div className='bg-sky-950 rounded-md p-3 text-center text-2xl'>
            <h1 className=''>User Apply For Membership </h1>
        </div>
        <Link to={"/State"}>
          <div  className='bg-sky-950 rounded-md p-3 text-center text-2xl'>
            <h1>Secretary/State President Add new member</h1>
        </div>
        </Link>
      
        <div  className='bg-sky-950 rounded-md p-3 text-center text-2xl'>
            <h1 className=''> Admin Login</h1>
        </div>
    </div>
    </>
  )
}

export default MemberShipComp
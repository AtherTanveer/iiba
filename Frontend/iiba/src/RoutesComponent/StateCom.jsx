import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapLocationDot } from "react-icons/fa6";
const StateCom = () => {

    const auth = localStorage.getItem("user");
    console.log(auth)

    const stateDetail = [
        {
            stateName: "Uttar Pradesh Log-In",
            pathname: "/uttarpardeshLogin"
        },
        {
            stateName: "Uttarakhand Log-In",
            pathname: `${auth ? "/uttrakhandLogin/addmember" : "/uttrakhandLogin"}`
        },
        {
            stateName: "Haryana Log-In",
            pathname: "/haryanaLogin"
        },
    ]

    return (
        <>
            <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>

                <h1 className=" text-3xl md:text-4xl font-bold text-center pt-6">
                    IIBA Membership Portal
                </h1>
                <p className="text-gray-800 text-center mt-2">
                    Indian Industries Business Association
                </p>
                <h1 className='w-full text-center text-2xl font-medium mt-7'>Select Your State</h1>
                <div className='md:flex justify-center text-white mt-5 text-lg gap-6'>
                    {
                        stateDetail.map((elem, index) => (
                            <Link to={`${elem.pathname}`} key={index}>
                                <div className='flex m-2 p-5 font-medium card-ui bg-gray-300 rounded-md w-full md:w-[20vw]  text-center text-black'>
                                    <FaMapLocationDot className='icon-ui text-2xl'/>
                                    <h1 className='ps-3'>{elem.stateName}</h1>
                                </div>
                            </Link>

                        ))
                    }




                </div>
            </div>

        </>
    )
}

export default StateCom
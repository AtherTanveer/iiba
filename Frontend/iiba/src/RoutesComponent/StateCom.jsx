import React from 'react'
import { Link } from 'react-router-dom'

const StateCom = () => {

    const stateDetail = [
        {
            stateName: "Uttar Pradesh Log-In",
            pathname: "/uttarpardeshLogin"
        },
        {
            stateName: "Uttarakhand Log-In",
            pathname: "/uttrakhandLogin"
        },
        {
            stateName: "Haryana Log-In",
            pathname: "/haryanaLogin"
        },
    ]

    return (
        <>
            <h1 className='w-full text-center text-3xl font-medium mt-7'>Choose Your State</h1>
            <div className='md:flex justify-center text-white mt-5 text-2xl gap-6'>
                {
                    stateDetail.map((elem, index) => (
                        <Link to={`${elem.pathname}`} key={index}>
                            <div className='m-2 p-5 bg-sky-950 rounded-md w-full text-center'>
                                <h1>{elem.stateName}</h1>
                            </div>
                        </Link>

                    ))
                }




            </div>
        </>
    )
}

export default StateCom
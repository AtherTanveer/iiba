import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const HaryanaLogin = () => {
  const navigate = useNavigate()
  const [userID, setUserID] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!userID,!password){
      alert("Please Enter Input Feilds")
      result(false)
    }


    const data = await fetch("http://localhost:4500/Hariyana_adminLogin", {
      method: "post",
      body: JSON.stringify({ userID, password }),
      headers: {
        "content-Type": "application/json"
      }
    })

    const result = await data.json();
    if (result) {
      console.log(result);
      localStorage.setItem("hariyana", JSON.stringify(result))
      alert("Admin you are login")
      navigate("/haryanaLogin/Haryana_Admin_login")

    }
    else {
      alert("Enter Valid UserID Password")
      console.log(userID, password, "enter valid user id and password");
    }
    console.log(userID, password);
  }

  const userIDHandle = (e) => {
    setUserID(e.target.value)
  }

  const passwordHandler = (e) => {
    setpassword(e.target.value)
  }
  return (
    <>
    <h1 className=" text-3xl md:text-4xl font-bold text-center mt-6">
        IIBA Haryana
      </h1>
      <p className="text-gray-800 text-center mt-2">
        Indian Industries Business Association
      </p>
      <h1 className='w-full text-center mt-8 text-3xl font-medium'>Login</h1>
      <div className='w-full flex justify-center items-center'>


        <div className='m-2 p-3 rounded-2xl bg-slate-500'>

          <form action="" onSubmit={handleSubmit} className='grid grid-cols-1 text-lg'>
            <input value={userID} onChange={userIDHandle} className='m-4 p-2 bg-white rounded-md' type="text" placeholder='Enter User ID' />

            <input value={password} onChange={passwordHandler} className='m-4 p-2  bg-white rounded-md' type="password" placeholder='Enter Password' />
            <button className='p-2 bg-sky-950 rounded-md text-white' >Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default HaryanaLogin
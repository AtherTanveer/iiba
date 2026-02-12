import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Uttrakhand = () => {
    const navigate = useNavigate();

    const[userID,setUserID] = useState("");
      const[password,setpassword] = useState("");
        const[boolval,setboolval] = useState(false);
      

      const HandleSubmit=async(e)=>{
        setboolval(true)
        e.preventDefault();

        if(!userID,!password){
          return(false)
        }

        const data = await fetch("http://localhost:4500/Uttrakhnd_adminLogin",{
           method: "post",
            body: JSON.stringify({ userID, password }),
            headers: {
                "content-Type": "application/json"
            }
        })

        const result = await data.json();
        if(result){
          console.log(result);
          localStorage.setItem("user",JSON.stringify(result))
          alert("Admin you are login")
          navigate("/uttrakhandLogin/addmember")

        }
        else{
          alert("Enter Valid UserID Password")
           console.log(userID,password,"enter valid user id and password");
        }
     
       
      }

      const userIDHandle=(e)=>{
        setUserID(e.target.value)
      }

      const passwordHandler=(e)=>{
        setpassword(e.target.value)
      }

  return (
    <>
     <h1 className=" text-3xl md:text-4xl font-bold text-center mt-6">
        IIBA Uttrakhand
      </h1>
      <p className="text-gray-800 text-center mt-2">
        Indian Industries Business Association
      </p>
      <h1 className='w-full text-center mt-8 text-3xl font-medium'>Login</h1>
    <div className='w-full flex justify-center items-center'>
       
        
        <div className='m-2 p-3 rounded-2xl bg-slate-500'>
            {boolval?<h1 className='text-red-600 p-4'>Fill The input Feilds</h1>:<h1 className='text-white p-4'>Enter UserID & Passwornd</h1>}
            <form action="" onSubmit={HandleSubmit} className='grid grid-cols-1 text-lg'>
                <input value={userID} onChange={userIDHandle} className='m-4 p-2 bg-white rounded-md' type="text" placeholder='Enter User ID'/>

                <input value={password} onChange={passwordHandler} className='m-4 p-2  bg-white rounded-md' type="password" placeholder='Enter Password' />
                <button className='p-2 bg-sky-950 rounded-md text-white' >Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Uttrakhand
import React, { useState } from 'react'


const HaryanaLogin = () => {
     const[userID,setUserID] = useState("");
          const[password,setpassword] = useState("");
    
          const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(userID,password);
          }
    
          const userIDHandle=(e)=>{
            setUserID(e.target.value)
          }
    
          const passwordHandler=(e)=>{
            setpassword(e.target.value)
          }
  return (
      <>
      <h1 className='w-full text-center mt-8 text-3xl font-medium'>Login</h1>
    <div className='w-full flex justify-center items-center'>
       
        
        <div className='m-2 p-3 rounded-2xl bg-slate-500'>
           
            <form action="" onSubmit={handleSubmit} className='grid grid-cols-1 text-lg'>
                <input value={userID} onChange={userIDHandle} className='m-4 p-2 bg-white rounded-md' type="text" placeholder='Enter User ID'/>

                <input value={password} onChange={passwordHandler} className='m-4 p-2  bg-white rounded-md' type="password" placeholder='Enter Password' />
                <button className='p-2 bg-sky-950 rounded-md text-white' >Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default HaryanaLogin
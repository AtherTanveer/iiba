import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom';

const Uttrakhand_Update_member = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [company, setcompany] = useState("")
    const [boolval, setboolval] = useState(false);


    const navigate = useNavigate();
    const params = useParams();


    const handlesubmit = async(e)=>{
        e.preventDefault();
        if(!name,!email,!phone,!company){
            setboolval(true);
            return false
        }

        const data = await fetch(`http://localhost:4500/updatemember/${params.id}`,{
        
        method: "put",
        body: JSON.stringify({ name, email, phone, company }),
        headers: {
          "content-Type": "application/json"
        }

        })

        const result = await data.json();
        alert("Data updated")
        if(result){
            console.log(result);
            //  alert("Data Updated")
            navigate("/uttrakhandLogin/addmember")
           
        }


    


    // console.log(name, email, phone, company)
}


const getdata = async()=>{

    const data = await fetch(`http://localhost:4500/goUpdate/${params.id}`)
    const result = await data.json();
    console.log(result);

    setname(result.name);
    setemail(result.email)
    setphone(result.phone)
    setcompany(result.company)
}

useEffect(()=>{
    getdata();
},[])

const nameHandler = (e) => {
    setname(e.target.value);
}

const emailHandler = (e) => {
    setemail(e.target.value);
}

const phoneHandler = (e) => {
    setphone(e.target.value);
}

const companyHandler = (e) => {
    setcompany(e.target.value);
}


return (
    <>
        <h1 className='w-full text-2xl font-medium p-2 text-center mt-4' >Update Member</h1>
        <div className='flex justify-center '>
            <div className='mt-7 p-4'>
                <form action="" onSubmit={handlesubmit} className='grid grid-cols-1 text-lg md:w-90'>
                    <input className='p-2 m-1' value={name} onChange={nameHandler} type="text" placeholder='Enter Name' />
                    {boolval && !name && <p className='text-red-600' >Enter Name !!</p>}
                    <input className='p-2 m-1' value={email} onChange={emailHandler} type="text" placeholder='Enter Email' />
                    {boolval && !email && <p className='text-red-600' >Enter Email !!</p>}
                    <input className='p-2 m-1' value={phone} onChange={phoneHandler} type="text" placeholder='Enter Phone' />
                    {boolval && !phone && <p className='text-red-600' >Enter Phone !!</p>}
                    <input className='p-2 m-1' value={company} onChange={companyHandler} type="text" placeholder='Enter Company Name ' />
                    {boolval && !company && <p className='text-red-600' >Enter Company !!</p>}
                    <button className='p-3 px-4 bg-sky-950 text-white rounded-md text-center'>Update</button>
                </form>
            </div>
        </div>
    </>
)
}

export default Uttrakhand_Update_member
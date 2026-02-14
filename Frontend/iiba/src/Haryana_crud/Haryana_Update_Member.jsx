import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate , useParams } from 'react-router-dom';


const Haryana_Update_Member = () => {
    const [name, setname] = useState("");
       const [email, setemail] = useState("")
       const [phone, setphone] = useState("")
       const [state, setstate] = useState("");
       const [district, setdistrict] = useState("");
       const [city, setcity] = useState("");
       const [address, setaddress] = useState("");
       const [company, setcompany] = useState("")
       const [boolval, setboolval] = useState(false);


    const navigate = useNavigate();
    const params = useParams();


    const handlesubmit = async(e)=>{
        e.preventDefault();
        if (!name || !email || !phone || !company || !state || !district || !city || !address) {
            setboolval(true);
            return;
        }

        const data = await fetch(`http://localhost:4500/update_Haryana_Member/${params.id}`,{
        
        method: "put",
         body: JSON.stringify({ name, email, phone, state, district, city, address, company }),
        headers: {
          "content-Type": "application/json"
        }

        })

        const result = await data.json();
        alert("Data updated")
        if(result){
            console.log(result);
            //  alert("Data Updated")
            navigate("/haryanaLogin/Haryana_Admin_login")
           
        }


    


    // console.log(name, email, phone, company)
}


const getdata = async()=>{

    const data = await fetch(`http://localhost:4500/goHaryanaUpdate/${params.id}`)
    const result = await data.json();
    console.log(result);

    setname(result.name);
    setemail(result.email)
    setphone(result.phone)
    setcompany(result.company)
    setaddress(result.address)
    setcity(result.city);
    setcompany(result.company);
    setdistrict(result.district);
    setstate(result.state)
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
                        <input className="inputStyle p-2 rounded-md" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone" />
                        {boolval && !phone && <p className="error">Enter Phone</p>}

                        <input className="inputStyle p-2 rounded-md" value={company} onChange={(e) => setcompany(e.target.value)} placeholder="Company Name" />
                        {boolval && !company && <p className="error">Enter Company</p>}

                        <input className="inputStyle p-2 rounded-md" value={state} onChange={(e) => setstate(e.target.value)} placeholder="State" />
                        <input className="inputStyle p-2 rounded-md" value={district} onChange={(e) => setdistrict(e.target.value)} placeholder="District" />

                        <input className="inputStyle p-2 rounded-md" value={city} onChange={(e) => setcity(e.target.value)} placeholder="City" />
                        <input className="inputStyle p-2 rounded-md" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Full Address" />
                    <button className='p-3 px-4 bg-sky-950 text-white rounded-md text-center'>Update</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Haryana_Update_Member
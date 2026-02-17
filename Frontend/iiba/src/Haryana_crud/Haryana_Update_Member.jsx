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
       const [image, setimage] = useState();



    const navigate = useNavigate();
    const params = useParams();


    const handlesubmit = async(e)=>{
        e.preventDefault();
        if (!name || !email || !phone || !company || !state || !district || !city || !address) {
            setboolval(true);
            return;
        }

         const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("state", state);
    formData.append("district", district);
    formData.append("city", city);
    formData.append("address", address);
    formData.append("company", company);

    if (image) {
      formData.append("image", image);
    }

        const data = await fetch(`http://localhost:4500/update_Haryana_Member/${params.id}`,{
        
        method: "put",
        body: formData,

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
    setimage(result.image)
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
  <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    
    <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
      
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-900 mb-8">
        Update Member – IIBA
      </h1>

      <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            value={name}
            onChange={nameHandler}
            placeholder="Enter Full Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
          {boolval && !name && (
            <p className="text-red-600 text-sm mt-1">Enter Name</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            value={email}
            onChange={emailHandler}
            placeholder="Enter Email"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
          {boolval && !email && (
            <p className="text-red-600 text-sm mt-1">Enter Email</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Phone *</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            placeholder="Enter Phone"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
          {boolval && !phone && (
            <p className="text-red-600 text-sm mt-1">Enter Phone</p>
          )}
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Company Name *</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setcompany(e.target.value)}
            placeholder="Enter Company Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
          {boolval && !company && (
            <p className="text-red-600 text-sm mt-1">Enter Company</p>
          )}
        </div>

        {/* State */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">State</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setstate(e.target.value)}
            placeholder="Enter State"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </div>

        {/* District */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">District</label>
          <input
            type="text"
            value={district}
            onChange={(e) => setdistrict(e.target.value)}
            placeholder="Enter District"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setcity(e.target.value)}
            placeholder="Enter City"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </div>

        {/* Address - Full Width */}
        <div className="flex flex-col md:col-span-2">
          <label className="text-sm font-medium mb-1">Full Address</label>
          <textarea
            value={address}
            onChange={(e) => setaddress(e.target.value)}
            placeholder="Enter Full Address"
            rows="3"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          ></textarea>
        </div>


         {/* New Image Upload */}
        <div>
        
          
             <input
            type="file"
            onChange={(e) => setimage(e.target.files[0])}
            className="p-2 bg-gray-700 text-white font-medium rounded-md"
          />
        </div>

        {/* Submit Button - Full Width */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-sky-900 hover:bg-sky-800 transition-all duration-300 text-white px-10 py-3 rounded-xl text-lg shadow-md"
          >
            Update Member
          </button>
        </div>

      </form>
    </div>
  </div>
</>
  )
}

export default Haryana_Update_Member
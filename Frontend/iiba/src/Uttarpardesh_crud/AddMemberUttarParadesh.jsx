import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddMemberUttarParadesh = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [company, setcompany] = useState("")
  const [boolval, setboolval] = useState(false);
  const [image, setimage] = useState(null);
  const [imageValid, seimagevalid] = useState(false);


  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !company || !state || !district || !city || !address) {
      setboolval(true);
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!image) {
      alert("Please Upload Image !!");
      seimagevalid(true)
      return false
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


    const data = await fetch("http://localhost:4500/Add_Uttarparadesh_Member", {

      method: "post",
      body: formData,

    })

    const result = await data.json();;
    console.log(result);

    if (result) {
      alert("Member Added")
      navigate("/UttarAdmin_Login")

    }


    console.log(name, email, phone, company)
  }

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

          <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-950 mb-8">
            Add New Member – IIBA
          </h1>

          <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={nameHandler}
                placeholder="Enter Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
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
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
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
                placeholder="Phone"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
              />
              {boolval && !phone && (
                <p className="text-red-600 text-sm mt-1">Enter Phone</p>
              )}
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Company *</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                placeholder="Company Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
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
                placeholder="State"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
              />
            </div>

            {/* District */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">District</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setdistrict(e.target.value)}
                placeholder="District"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                placeholder="City"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
              />
            </div>

            {/* Address - Full Width */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium mb-1">Full Address</label>
              <textarea
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                rows="3"
                placeholder="Full Address"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-900"
              ></textarea>
            </div>

            {/* New Image Upload */}
            <div>
              {imageValid ? <p className='text-red-500 pb-2 font-medium'>Upload Profile Image*</p> : <p className='text-gray-900 pb-2'>Upload Profile Image*</p>}

              <input
                type="file"
                onChange={(e) => setimage(e.target.files[0])}
                className="p-2 bg-gray-700 text-white font-medium rounded-md"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="bg-sky-950 hover:bg-sky-800 transition duration-300 text-white px-12 py-3 rounded-xl text-lg shadow-md"
              >
                Add Member
              </button>
            </div>

          </form>
        </div>

      </div>
    </>

  )
}

export default AddMemberUttarParadesh
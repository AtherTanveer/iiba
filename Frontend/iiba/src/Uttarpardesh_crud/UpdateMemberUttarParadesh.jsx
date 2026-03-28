import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateMemberUttarParadesh = () => {

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
  const [loading,setloading] = useState(false)

  const navigate = useNavigate();
  const params = useParams();


  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !company || !state || !district || !city || !address) {
      setboolval(true);
      return;
    }

    try{

    setloading(true)

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

    const data = await fetch(`http://localhost:4500/update_Uttarparadesh_Member/${params.id}`, {

      method: "put",
      body: formData,
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("UpToken"))}`
      }

    })

    const result = await data.json();

    if (result) {
      alert("✔ Data Updated")
      navigate("/UttarAdmin_Login")
    }

    }catch(err){
      console.log(err)
      alert("Something went wrong")
    }

    finally{
      setloading(false)
    }
  }


  const getdata = async () => {

    const data = await fetch(`http://localhost:4500/goUttarparadeshUpdate/${params.id}`)
    const result = await data.json();

    setname(result.name);
    setemail(result.email)
    setphone(result.phone)
    setcompany(result.company)
    setaddress(result.address)
    setcity(result.city);
    setdistrict(result.district);
    setstate(result.state)
    setimage(result.image)
  }

  useEffect(() => {
    getdata();
  }, [])


  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

        <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

          <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-900 mb-8">
            Update Member – IIBA
          </h1>

          <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              type="text"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              placeholder="Enter Full Name"
              className="p-3 border rounded-lg"
            />

            <input
              type="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Enter Email"
              className="p-3 border rounded-lg"
            />

            <input
              type="text"
              value={phone}
              onChange={(e)=>setphone(e.target.value)}
              placeholder="Enter Phone"
              className="p-3 border rounded-lg"
            />

            <input
              type="text"
              value={company}
              onChange={(e)=>setcompany(e.target.value)}
              placeholder="Enter Company Name"
              className="p-3 border rounded-lg"
            />

            <input
              type="text"
              value={state}
              onChange={(e)=>setstate(e.target.value)}
              placeholder="Enter State"
              className="p-3 border rounded-lg"
            />

            <input
              type="text"
              value={district}
              onChange={(e)=>setdistrict(e.target.value)}
              placeholder="Enter District"
              className="p-3 border rounded-lg"
            />

            <input
              type="text"
              value={city}
              onChange={(e)=>setcity(e.target.value)}
              placeholder="Enter City"
              className="p-3 border rounded-lg"
            />

            <textarea
              value={address}
              onChange={(e)=>setaddress(e.target.value)}
              placeholder="Enter Address"
              rows="3"
              className="p-3 border rounded-lg md:col-span-2"
            ></textarea>

            <input
              type="file"
              onChange={(e)=>setimage(e.target.files[0])}
              className="p-2 bg-gray-700 text-white rounded-md"
            />

            <div className="md:col-span-2 flex justify-center mt-4">

              <button
                type="submit"
                disabled={loading}
                className="bg-sky-900 hover:bg-sky-800 text-white px-10 py-3 rounded-xl text-lg flex items-center gap-3"
              >

                {loading && (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}

                {loading ? "Updating..." : "Update Member"}

              </button>

            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateMemberUttarParadesh
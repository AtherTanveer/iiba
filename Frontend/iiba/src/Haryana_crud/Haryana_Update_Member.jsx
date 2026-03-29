import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Haryana_Update_Member = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [state, setstate] = useState("")
  const [district, setdistrict] = useState("")
  const [city, setcity] = useState("")
  const [address, setaddress] = useState("")
  const [company, setcompany] = useState("")
  const [boolval, setboolval] = useState(false)
  const [image, setimage] = useState()
  const [loading, setloading] = useState(false)

  const navigate = useNavigate()
  const params = useParams()

  const handlesubmit = async (e) => {

    e.preventDefault()

    if (!name || !email || !phone || !company || !state || !district || !city || !address) {
      setboolval(true)
      return
    }

    try {

      setloading(true)

      const formData = new FormData()

      formData.append("name", name)
      formData.append("email", email)
      formData.append("phone", phone)
      formData.append("state", state)
      formData.append("district", district)
      formData.append("city", city)
      formData.append("address", address)
      formData.append("company", company)

      if (image) {
        formData.append("image", image)
      }

      const data = await fetch(`https://iiba.onrender.com/update_Haryana_Member/${params.id}`, {
        method: "PUT",
        body: formData,
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("hariyanaToken"))}`
        }
      })

      const result = await data.json()

      if (data.ok) {
        alert("✔ Data Updated")
        navigate("/haryanaLogin/Haryana_Admin_login")
      } else {
        alert(result.message)
      }

    } catch (err) {

      console.log(err)
      alert("Server Error")

    } finally {

      setloading(false)

    }
  }

  const getdata = async () => {

    try {

      const data = await fetch(`https://iiba.onrender.com/goHaryanaUpdate/${params.id}`)
      const result = await data.json()

      setname(result.name)
      setemail(result.email)
      setphone(result.phone)
      setcompany(result.company)
      setaddress(result.address)
      setcity(result.city)
      setdistrict(result.district)
      setstate(result.state)
      setimage(result.image)

    } catch (err) {

      console.log(err)

    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
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
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="p-3 border rounded-lg"
            />
            {boolval && !name && <p className="text-red-600 text-sm">Enter Name</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="p-3 border rounded-lg"
            />
            {boolval && !email && <p className="text-red-600 text-sm">Enter Email</p>}
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Phone *</label>
            <input
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="p-3 border rounded-lg"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Company *</label>
            <input
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              className="p-3 border rounded-lg"
            />
          </div>

          {/* State */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">State</label>
            <input
              value={state}
              onChange={(e) => setstate(e.target.value)}
              className="p-3 border rounded-lg"
            />
          </div>

          {/* District */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">District</label>
            <input
              value={district}
              onChange={(e) => setdistrict(e.target.value)}
              className="p-3 border rounded-lg"
            />
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">City</label>
            <input
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="p-3 border rounded-lg"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">Full Address</label>
            <textarea
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              rows="3"
              className="p-3 border rounded-lg"
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <input
              type="file"
              onChange={(e) => setimage(e.target.files[0])}
              className="p-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-sky-900 hover:bg-sky-800 text-white px-10 py-3 rounded-xl flex items-center gap-2"
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
  )
}

export default Haryana_Update_Member
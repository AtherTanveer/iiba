import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const locationData = {
  UttarPradesh: {
    Lucknow: ["Lucknow", "Alambagh", "Gomti Nagar", "Hazratganj", "Aminabad"],
    KanpurNagar: ["Kanpur", "Kalyanpur", "Rawatpur", "Kidwai Nagar", "Shastri Nagar"],
    Ghaziabad: ["Ghaziabad", "Modinagar", "Loni", "Sahibabad", "Muradnagar"],
    GautamBuddhaNagar: ["Noida", "Greater Noida", "Dadri", "Jewar"],
    Agra: ["Agra", "Fatehabad", "Sikandra", "Kheragarh", "Etmadpur"],
    Varanasi: ["Varanasi", "Ramnagar", "Babatpur", "Sarnath"],
    Prayagraj: ["Prayagraj", "Naini", "Phulpur", "Soraon"],
    Meerut: ["Meerut", "Sardhana", "Mawana", "Modipuram"],
    Bareilly: ["Bareilly", "Faridpur", "Aonla", "Nawabganj"],
    Aligarh: ["Aligarh", "Iglas", "Khair", "Atrauli"],
    Moradabad: ["Moradabad", "Thakurdwara", "Bilari"],
    Gorakhpur: ["Gorakhpur", "Campierganj", "Sahjanwa"],
    Jhansi: ["Jhansi", "Moth", "Mauranipur"],
    Mathura: ["Mathura", "Vrindavan", "Govardhan"],
    Saharanpur: ["Saharanpur", "Deoband", "Behat"],
    Ayodhya: ["Ayodhya", "Faizabad", "Bikapur"],
    Bijnor: ["Bijnor", "Chandpur", "Najibabad"],
    Shahjahanpur: ["Shahjahanpur", "Powayan", "Tilhar"],
    Rampur: ["Rampur", "Bilaspur", "Suar"],
    Sitapur: ["Sitapur", "Misrikh", "Laharpur"]
  }
};

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
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const states = Object.keys(locationData);
  const districts = state ? Object.keys(locationData[state] || {}) : [];
  const cities = state && district ? locationData[state]?.[district] || [] : [];

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
      seimagevalid(true);
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
    formData.append("image", image);

    try {

      setloading(true);

      const data = await fetch("http://localhost:4500/Add_Uttarparadesh_Member", {
        method: "POST",
        body: formData,
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("UpToken"))}`
        }
      });

      const result = await data.json();

      if (!data.ok) {
        alert("❌ " + result.message);
      } else {
        alert("✅ Member Added Successfully");
        navigate("/UttarAdmin_Login");
      }

    } catch (error) {

      alert("❌ Server Error");

    } finally {

      setloading(false);

    }

  }

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

        <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-950 mb-8">
          Add New Member – IIBA
        </h1>

        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <input value={name} onChange={(e)=>setname(e.target.value)} placeholder="Full Name" className="p-3 border rounded-lg"/>

          <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" className="p-3 border rounded-lg"/>

          <input value={phone} onChange={(e)=>setphone(e.target.value)} placeholder="Phone" className="p-3 border rounded-lg"/>

          <input value={company} onChange={(e)=>setcompany(e.target.value)} placeholder="Company" className="p-3 border rounded-lg"/>

          <select value={state} onChange={(e)=>{setstate(e.target.value); setdistrict(""); setcity("")}} className="p-3 border rounded-lg">
            <option value="">Select State</option>
            {states.map((st)=>(<option key={st} value={st}>{st}</option>))}
          </select>

          <select value={district} onChange={(e)=>{setdistrict(e.target.value); setcity("")}} className="p-3 border rounded-lg">
            <option value="">Select District</option>
            {districts.map((d)=>(<option key={d} value={d}>{d}</option>))}
          </select>

          <select value={city} onChange={(e)=>setcity(e.target.value)} className="p-3 border rounded-lg">
            <option value="">Select City</option>
            {cities.map((c)=>(<option key={c} value={c}>{c}</option>))}
          </select>

          <textarea value={address} onChange={(e)=>setaddress(e.target.value)} className="p-3 border rounded-lg md:col-span-2"/>

          <input type="file" onChange={(e)=>setimage(e.target.files[0])} className="p-2 bg-gray-700 text-white rounded-md"/>

          <div className="md:col-span-2 flex justify-center mt-4">

            <button
              disabled={loading}
              className={`px-12 py-3 rounded-xl text-white flex items-center gap-2
              ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-sky-950 hover:bg-sky-800"}`}
            >

              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Submitting...
                </>
              ) : (
                "Add Member"
              )}

            </button>

          </div>

        </form>

      </div>

    </div>

  )
}

export default AddMemberUttarParadesh;
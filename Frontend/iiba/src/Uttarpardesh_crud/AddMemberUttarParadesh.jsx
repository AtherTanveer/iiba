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

  const navigate = useNavigate();

  // Dropdown derived data
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

    const data = await fetch("http://localhost:4500/Add_Uttarparadesh_Member", {
      method: "POST",
      body: formData,
    });

    const result = await data.json();

    if (result) {
      alert("Member Added");
      navigate("/UttarAdmin_Login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">

        <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-950 mb-8">
          Add New Member – IIBA
        </h1>

        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="flex flex-col">
            <label>Full Name *</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Name"
              className="p-3 border rounded-lg"
            />
            {boolval && !name && <p className="text-red-600 text-sm">Enter Name</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter Email"
              className="p-3 border rounded-lg"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label>Phone *</label>
            <input
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              placeholder="Phone"
              className="p-3 border rounded-lg"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label>Company *</label>
            <input
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              placeholder="Company Name"
              className="p-3 border rounded-lg"
            />
          </div>

          {/* State Dropdown */}
          <div className="flex flex-col">
            <label>State</label>

            <select
              value={state}
              onChange={(e) => {
                setstate(e.target.value);
                setdistrict("");
                setcity("");
              }}
              className="p-3 border rounded-lg"
            >
              <option value="">Select State</option>
              {states.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* District Dropdown */}
          <div className="flex flex-col">
            <label>District</label>

            <select
              value={district}
              onChange={(e) => {
                setdistrict(e.target.value);
                setcity("");
              }}
              className="p-3 border rounded-lg"
              disabled={!state}
            >
              <option value="">Select District</option>
              {districts.map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div className="flex flex-col">
            <label>City</label>

            <select
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="p-3 border rounded-lg"
              disabled={!district}
            >
              <option value="">Select City</option>
              {cities.map((ct) => (
                <option key={ct} value={ct}>{ct}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label>Full Address</label>
            <textarea
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              rows="3"
              className="p-3 border rounded-lg"
            />
          </div>

          {/* Image Upload */}
          <div>
            <p className={imageValid ? "text-red-500 pb-2" : "pb-2"}>
              Upload Profile Image*
            </p>

            <input
              type="file"
              onChange={(e) => setimage(e.target.files[0])}
              className="p-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button className="bg-sky-950 hover:bg-sky-800 text-white px-12 py-3 rounded-xl">
              Add Member
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddMemberUttarParadesh;
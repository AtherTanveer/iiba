import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const locationData = {
  Haryana: {

    Ambala: ["Ambala", "Ambala Cantt", "Naraingarh", "Barara"],

    Bhiwani: ["Bhiwani", "Tosham", "Loharu", "Siwani"],

    CharkhiDadri: ["Charkhi Dadri", "Badhra", "Jhojhu Kalan"],

    Faridabad: ["Faridabad", "Ballabhgarh", "NIT Faridabad"],

    Fatehabad: ["Fatehabad", "Ratia", "Tohana"],

    Gurugram: ["Gurugram", "Sohna", "Pataudi", "Manesar"],

    Hisar: ["Hisar", "Hansi", "Barwala", "Uklana"],

    Jhajjar: ["Jhajjar", "Bahadurgarh", "Beri"],

    Jind: ["Jind", "Narwana", "Safidon", "Julana"],

    Kaithal: ["Kaithal", "Pundri", "Rajound"],

    Karnal: ["Karnal", "Indri", "Gharaunda", "Assandh"],

    Kurukshetra: ["Kurukshetra", "Thanesar", "Pehowa", "Shahbad"],

    Mahendragarh: ["Narnaul", "Mahendragarh", "Kanina"],

    Nuh: ["Nuh", "Ferozepur Jhirka", "Punhana"],

    Palwal: ["Palwal", "Hodal", "Hassanpur"],

    Panchkula: ["Panchkula", "Kalka", "Raipur Rani"],

    Panipat: ["Panipat", "Samalkha", "Israna", "Madlauda"],

    Rewari: ["Rewari", "Bawal", "Kosli"],

    Rohtak: ["Rohtak", "Meham", "Kalanaur"],

    Sirsa: ["Sirsa", "Ellenabad", "Dabwali"],

    Sonipat: ["Sonipat", "Gohana", "Kharkhoda", "Ganaur"],

    Yamunanagar: ["Yamunanagar", "Jagadhri", "Bilaspur", "Chhachhrauli"]
  }
};

const Haryana_Add_Member = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [company, setcompany] = useState("");
  const [image, setimage] = useState(null);

  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const states = Object.keys(locationData);
  const districts = state ? Object.keys(locationData[state] || {}) : [];
  const cities = state && district ? locationData[state]?.[district] || [] : [];

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !company || !state || !district || !city || !address) {
      alert("Please fill all required fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (!image) {
      alert("Please upload image");
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

      const res = await fetch("http://localhost:4500/Add_Haryana_Member", {
        method: "POST",
        body: formData
      });

      const result = await res.json();

      if (result) {
        alert("Member Added Successfully");
        navigate("/haryanaLogin/Haryana_Admin_login");
      }

    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 md:p-10">

        <h1 className="text-2xl font-semibold text-center text-sky-950 mb-8">
          Add Member
        </h1>

        <form onSubmit={handlesubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="flex flex-col">
            <label>Full Name *</label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="p-3 border rounded-lg"
              placeholder="Enter Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="p-3 border rounded-lg"
              placeholder="Enter Email"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label>Phone *</label>
            <input
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="p-3 border rounded-lg"
              placeholder="Enter Phone"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label>Company Name *</label>
            <input
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              className="p-3 border rounded-lg"
              placeholder="Enter Company"
            />
          </div>

          {/* State Dropdown */}
          <div className="flex flex-col">
            <label>State *</label>

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
                <option key={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* District Dropdown */}
          <div className="flex flex-col">
            <label>District *</label>

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
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div className="flex flex-col">
            <label>City *</label>

            <select
              value={city}
              onChange={(e) => setcity(e.target.value)}
              className="p-3 border rounded-lg"
              disabled={!district}
            >
              <option value="">Select City</option>
              {cities.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label>Full Address</label>
            <textarea
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="p-3 border rounded-lg"
              rows="3"
              placeholder="Enter Address"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label>Upload Profile Image</label>
            <input
              type="file"
              onChange={(e) => setimage(e.target.files[0])}
              className="p-2 bg-gray-700 text-white rounded-md w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-sky-950 hover:bg-sky-800 text-white px-12 py-3 rounded-xl flex items-center gap-2"
            >
              {loading ? "Uploading..." : "Add Member"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Haryana_Add_Member;
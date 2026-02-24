
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpUser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [company, setcompany] = useState("");

  const [boolval, setboolval] = useState(false);

  const locationData = {
    UttarPradesh: {
      Lucknow: ["Lucknow", "Alambagh", "Gomti Nagar"],
      KanpurNagar: ["Kanpur", "Kalyanpur"],
      Ghaziabad: ["Ghaziabad", "Modinagar", "Loni"],
      Noida: ["Noida", "Greater Noida"],
      Agra: ["Agra", "Fatehabad"],
      Varanasi: ["Varanasi", "Ramnagar"],
      Prayagraj: ["Prayagraj", "Naini"],
      Meerut: ["Meerut", "Sardhana"],
      Bareilly: ["Bareilly"],
      Aligarh: ["Aligarh"],
      Moradabad: ["Moradabad"],
      Gorakhpur: ["Gorakhpur"],
      Jhansi: ["Jhansi"],
      Mathura: ["Mathura", "Vrindavan"],
      Saharanpur: ["Saharanpur"],
      Ayodhya: ["Ayodhya"],
      Bijnor: ["Bijnor"],
      Shahjahanpur: ["Shahjahanpur"],
      Rampur: ["Rampur"],
      Sitapur: ["Sitapur"]
    }
  };

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

    const data = await fetch("http://localhost:4500/userUpRequest", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, state, district, city, address, company }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await data.json();

    if (result) {
      alert("✅ Thank you! Membership request submitted.");
      navigate("/");
    }
  };
  return (
    <div>


      {/* FORM SHOW ONLY UP */}
      <form onSubmit={handlesubmit} className="grid md:grid-cols-2 gap-4 mt-6">

        <input className="inputStyle p-2 rounded-md" value={name} onChange={(e) => setname(e.target.value)} placeholder="Full Name" />
        {boolval && !name && <p className="error">Enter Name</p>}

        <input className="inputStyle p-2 rounded-md" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
        {boolval && !email && <p className="error">Enter Email</p>}

        <input className="inputStyle p-2 rounded-md" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone" />
        {boolval && !phone && <p className="error">Enter Phone</p>}

        <input className="inputStyle p-2 rounded-md" value={company} onChange={(e) => setcompany(e.target.value)} placeholder="Company Name" />
        {boolval && !company && <p className="error">Enter Company</p>}

        {/* State Dropdown */}
        <select
          className="inputStyle p-2 rounded-md"
          value={state}
          onChange={(e) => {
            setstate(e.target.value);
            setdistrict("");
            setcity("");
          }}
        >
          <option value="">Select State</option>
          <option value="UttarPradesh">Uttar Pradesh</option>
        </select>

        {/* District Dropdown */}
        <select
          className="inputStyle p-2 rounded-md"
          value={district}
          onChange={(e) => {
            setdistrict(e.target.value);
            setcity("");
          }}
          disabled={!state}
        >
          <option value="">Select District</option>
          {state &&
            Object.keys(locationData[state]).map((districtName) => (
              <option key={districtName} value={districtName}>
                {districtName}
              </option>
            ))}
        </select>

        {/* City Dropdown */}
        <select
          className="inputStyle p-2 rounded-md"
          value={city}
          onChange={(e) => setcity(e.target.value)}
          disabled={!district}
        >
          <option value="">Select City</option>
          {state &&
            district &&
            locationData[state][district].map((cityName) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
        </select>
        <input className="inputStyle p-2 rounded-md" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Full Address" />

        <button className="md:col-span-2 bg-blue-900 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
          Submit Membership Request
        </button>
      </form>

    </div>
  )
}

export default UpUser
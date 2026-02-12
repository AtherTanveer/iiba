import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [value, setValue] = useState("");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [company, setcompany] = useState("");

  const [boolval, setboolval] = useState(false);

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

    const data = await fetch("http://localhost:4500/userRequest", {
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
    <div className="min-h-screen bg-gradient-to-br from-sky-900 to-indigo-950 flex justify-center items-center p-5">

      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-4xl">

        <h1 className="text-3xl font-bold text-center text-blue-900">
          IIBA Membership Registration
        </h1>

        {/* STATE SELECT */}
        <div className="mt-6">
          <label className="font-semibold text-lg">Select State</label>
          <select
            className="w-full p-3 border rounded-lg mt-2 focus:outline-blue-500"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="">Select State</option>
            <option value="UttarParadesh">Uttar Pradesh</option>
            <option value="UttraKhand">Uttarakhand</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        {/* FORM SHOW ONLY UP */}
        {value === "UttarParadesh" && (
          <form onSubmit={handlesubmit} className="grid md:grid-cols-2 gap-4 mt-6">

            <input className="inputStyle p-2 rounded-md" value={name} onChange={(e) => setname(e.target.value)} placeholder="Full Name" />
            {boolval && !name && <p className="error">Enter Name</p>}

            <input className="inputStyle p-2 rounded-md" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
            {boolval && !email && <p className="error">Enter Email</p>}

            <input className="inputStyle p-2 rounded-md" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone" />
            {boolval && !phone && <p className="error">Enter Phone</p>}

            <input className="inputStyle p-2 rounded-md" value={company} onChange={(e) => setcompany(e.target.value)} placeholder="Company Name" />
            {boolval && !company && <p className="error">Enter Company</p>}

            <input className="inputStyle p-2 rounded-md" value={state} onChange={(e) => setstate(e.target.value)} placeholder="State" />
            <input className="inputStyle p-2 rounded-md" value={district} onChange={(e) => setdistrict(e.target.value)} placeholder="District" />

            <input className="inputStyle p-2 rounded-md" value={city} onChange={(e) => setcity(e.target.value)} placeholder="City" />
            <input className="inputStyle p-2 rounded-md" value={address} onChange={(e) => setaddress(e.target.value)} placeholder="Full Address" />

            <button className="md:col-span-2 bg-blue-900 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
              Submit Membership Request
            </button>
          </form>
        )}

        {value === "UttraKhand" && <p className="mt-6 text-xl font-semibold text-center">Uttarakhand Registration Coming Soon</p>}
        {value === "Haryana" && <p className="mt-6 text-xl font-semibold text-center">Haryana Registration Coming Soon</p>}
      </div>
    </div>
  );
};

export default NewUser;

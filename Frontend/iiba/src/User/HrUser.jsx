import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HrUser = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [state, setstate] = useState("");
  const [district, setdistrict] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [company, setcompany] = useState("");
  const [image, setimage] = useState(null);
  const [boolval, setboolval] = useState(false);
  const [loading, setLoading] = useState(false);

  const locationData = {
    Haryana: {
      Ambala: ["Ambala", "Ambala Cantt"],
      Bhiwani: ["Bhiwani", "Charkhi Dadri"],
      CharkhiDadri: ["Charkhi Dadri"],
      Faridabad: ["Faridabad", "Ballabgarh"],
      Fatehabad: ["Fatehabad", "Tohana"],
      Gurugram: ["Gurugram", "Manesar"],
      Hisar: ["Hisar", "Hansi"],
      Jhajjar: ["Jhajjar", "Bahadurgarh"],
      Jind: ["Jind", "Narwana"],
      Kaithal: ["Kaithal", "Pehowa"],
      Karnal: ["Karnal", "Assandh"],
      Kurukshetra: ["Kurukshetra", "Shahbad"],
      Mahendragarh: ["Narnaul", "Mahendragarh"],
      Nuh: ["Nuh", "Ferozepur Jhirka"],
      Palwal: ["Palwal", "Hodal"],
      Panchkula: ["Panchkula", "Kalka"],
      Panipat: ["Panipat", "Samalkha"],
      Rewari: ["Rewari", "Dharuhera"],
      Rohtak: ["Rohtak", "Meham"],
      Sirsa: ["Sirsa"],
      Sonipat: ["Sonipat", "Gohana"],
      Yamunanagar: ["Yamunanagar", "Jagadhri"]
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

    try {
      setLoading(true); // ✅ Start Loader

      const data = await fetch("http://localhost:4500/userHRRequest", {
        method: "POST",
        body: formData,
      });

      const result = await data.json();

      if (result) {
        alert("✅ Thank you! Membership request submitted.");
        navigate("/");
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false); // ✅ Stop Loader
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
          <option value="Haryana">Haryana</option>
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

        {/* New Image Upload */}
        <div className="w-full">
          <p className='text-gray-900 pb-2 '>Upload Profile Image*</p>

          <input
            type="file"
            onChange={(e) => setimage(e.target.files[0])}
            className="p-2 bg-gray-700 w-50 text-white font-medium rounded-md"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`md:col-span-2 py-3 rounded-lg text-lg font-bold transition flex items-center justify-center gap-2
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-900 hover:bg-blue-700 text-white"}
  `}
        >
          {loading && (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          )}

          {loading ? "Submitting..." : "Submit Membership Request"}
        </button>
      </form>

    </div>
  )
}

export default HrUser
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const locationData = {
  Uttarakhand: {

    Dehradun: ["Dehradun", "Rishikesh", "Vikasnagar", "Mussoorie", "Doiwala"],

    Haridwar: ["Haridwar", "Roorkee", "Laksar", "Bahadrabad", "Jwalapur"],

    Nainital: ["Haldwani", "Nainital", "Ramnagar", "Kaladhungi", "Lalkuan"],

    UdhamSinghNagar: ["Rudrapur", "Kashipur", "Sitarganj", "Khatima", "Jaspur", "Gadarpur"],

    PauriGarhwal: ["Kotdwar", "Pauri", "Srinagar", "Thalisain"],

    TehriGarhwal: ["New Tehri", "Tehri", "Chamba", "Dhanaulti"],

    Chamoli: ["Gopeshwar", "Joshimath", "Chamoli", "Karnaprayag"],

    Almora: ["Almora", "Ranikhet", "Bageshwar", "Dwarahat"],

    Bageshwar: ["Bageshwar", "Garur", "Kapkote"],

    Champawat: ["Champawat", "Lohaghat", "Pithoragarh"],

    Pithoragarh: ["Pithoragarh", "Dharchula", "Didihat", "Berinag"],

    Rudraprayag: ["Rudraprayag", "Kedarnath", "Ukhimath"],

    Uttarkashi: ["Uttarkashi", "Bhatwari", "Purola"]

  }
};

const UttarPardesh_Add_Member = () => {

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

  // Derived dropdown data
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

  const response = await fetch("http://localhost:4500/addMember", {
    method: "POST",
    body: formData,
    headers: {
      authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
    }
  });

  const result = await response.json();

  if (response.ok) {

    alert("✅ Member Added Successfully");
    navigate("/uttrakhandLogin/addmember");

  } else {

    alert("❌ " + result.message);

  }

} catch (err) {

  console.log(err);
  alert("❌ Upload Failed");

} finally {

  setloading(false);

}
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6 md:p-10">

        <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-950 mb-8">
          Add Member
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
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <p className="pb-2">Upload Profile Image*</p>

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
              className={`${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-sky-950 hover:bg-sky-800"
              } text-white px-12 py-3 rounded-xl flex items-center gap-2`}
            >
              {loading && <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
              {loading ? "Uploading..." : "Add Member"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default UttarPardesh_Add_Member;
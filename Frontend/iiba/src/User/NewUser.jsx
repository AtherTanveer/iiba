import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HrUser from "./HrUser";
import UpUser from "./UpUser";

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
  const [image, setimage] = useState(null);
  const [boolval, setboolval] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

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
    if (!agree) {
      alert("Please accept terms and conditions before submitting");
      return;
    }

    try {
      setLoading(true); // ✅ Start Loader

      const data = await fetch("https://iiba.onrender.com/userRequest", {
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-sky-900 to-indigo-950 flex justify-center items-center p-5 rounded-b-2xl">

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
              <option value="HimachalParadesh">Himachal Paradesh</option>
            </select>
          </div>

          {/* FORM SHOW ONLY UP */}
          {value === "UttraKhand" && (
            <form onSubmit={handlesubmit} className="grid md:grid-cols-2 gap-4 mt-6">

              <input className="inputStyle p-2 rounded-md" value={name} onChange={(e) => setname(e.target.value)} placeholder="Full Name" />
              {boolval && !name && <p className="text-red-500">Enter Name</p>}

              <input className="inputStyle p-2 rounded-md" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
              {boolval && !email && <p className="text-red-500">Enter Email</p>}

              <input className="inputStyle p-2 rounded-md" value={phone} onChange={(e) => setphone(e.target.value)} placeholder="Phone" />
              {boolval && !phone && <p className="text-red-500">Enter Phone</p>}

              <input className="inputStyle p-2 rounded-md" value={company} onChange={(e) => setcompany(e.target.value)} placeholder="Company Name" />
              {boolval && !company && <p className="text-red-500">Enter Company</p>}

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
                {Object.keys(locationData).map((stateName) => (
                  <option key={stateName} value={stateName}>
                    {stateName}
                  </option>
                ))}
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

              {/* //check box */}
                 <div className="mt-6 flex items-center gap-3 justify-center">

                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-5 h-5 accent-blue-900 cursor-pointer"
                />

                <p className="text-sm text-gray-800 font-medium">
                  I agree to all membership terms & conditions
                </p>
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
          )}

          {value === "UttarParadesh" && <UpUser />}
          {value === "Haryana" && <HrUser />}
          {value === "HimachalParadesh" && <p className="w-full text-lg font-medium text-center text-gray-700 pt-4">Himachal Paradesh MemberShip Coming Soon...</p>}
        </div>


      </div>
      {/* ================= TERMS SECTION PREMIUM UI ================= */}

      <div className="m-3 bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">

        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          📜 Membership Terms & Conditions
        </h2>

        <div className="space-y-2 text-gray-700 text-sm leading-6">

          <div className="flex items-start gap-2">
            <span>✔</span>
            <p>Applicant must provide correct personal and business information.</p>
          </div>

          <div className="flex items-start gap-2">
            <span>✔</span>
            <p>Membership will be approved after verification process.</p>
          </div>

          <div className="flex items-start gap-2">
            <span>✔</span>
            <p>If applying as business member, GST registration may be required.</p>
          </div>

          <div className="flex items-start gap-2">
            <span>✔</span>
            <p>Organization reserves the right to accept or reject application.</p>
          </div>

          <div className="flex items-start gap-2">
            <span>✔</span>
            <p>Members must follow ethical business practices.</p>
          </div>

        </div>


      </div>
    </>

  );
};

export default NewUser;

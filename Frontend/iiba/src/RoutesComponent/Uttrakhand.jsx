import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UttrakhandLogin = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [boolval, setBoolval] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userID || !password) {
      setBoolval(true);
      return;
    }

    setLoading(true);
    try {
      const data = await fetch("https://iiba.onrender.com/Uttrakhnd_adminLogin", {
        method: "POST",
        body: JSON.stringify({ userID, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const result = await data.json();

      if (result.auth) {
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.auth));
        navigate("/uttrakhandLogin/addmember");
      } else {
        alert("Enter valid UserID and Password");
      }

    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-100 via-white to-sky-50 px-4">

      <h1 className="text-4xl font-bold text-center text-sky-900 mb-2">
        IIBA Uttarakhand
      </h1>

      <p className="text-gray-700 text-center mb-8">
        Indian Industries Business Association
      </p>

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        {boolval ? (
          <p className="text-red-600 text-center mb-4">Fill all input fields!</p>
        ) : (
          <p className="text-gray-600 text-center mb-4">Enter your UserID & Password</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            placeholder="User ID"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`p-3 rounded-xl text-white font-medium ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-sky-900 hover:bg-sky-800"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>

    </div>
  )
}

export default UttrakhandLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "https://iiba.onrender.com";

const Uttrakhand = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [boolval, setboolval] = useState(false);
  const [loading, setLoading] = useState(false);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (!userID || !password) {
      setboolval(true);
      return;
    }

    try {
      setLoading(true);

      const data = await fetch(`${API}/Uttrakhnd_adminLogin`, {
        method: "POST",
        body: JSON.stringify({ userID, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await data.json();

      if (result.auth) {
        localStorage.setItem("user", JSON.stringify(result.data));
        localStorage.setItem("token", JSON.stringify(result.auth));

        navigate("/uttrakhandLogin/addmember");
      } else {
        alert("Enter Valid UserID Password");
      }

    } catch (error) {
      console.log(error);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-sky-100 via-white to-sky-50 px-4">

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-sky-900">
          IIBA Uttarakhand
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Indian Industries Business Association
        </p>

        <h2 className="text-center text-xl font-semibold mt-6">
          Admin Login
        </h2>

        {boolval && (
          <p className="text-red-500 text-center mt-3">
            Please Fill All Fields
          </p>
        )}

        <form onSubmit={HandleSubmit} className="mt-6 space-y-4">

          <input
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            type="text"
            placeholder="Enter User ID"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />

          <button
            disabled={loading}
            className="w-full bg-sky-900 hover:bg-sky-950 text-white py-2 rounded-lg flex justify-center items-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Login"
            )}
          </button>

        </form>
      </div>

    </div>
  );
};

export default Uttrakhand;
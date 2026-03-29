import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HaryanaLogin = () => {
  const navigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userID || !password) {
      setError("Please enter User ID and Password");
      return;
    }

    try {
      setLoading(true);

      const data = await fetch(
        "https://iiba.onrender.com/Hariyana_adminLogin",
        {
          method: "POST",
          body: JSON.stringify({ userID, password }),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      const result = await data.json();

      if (result.auth) {
        localStorage.setItem("hariyana", JSON.stringify(result.data));
        localStorage.setItem("hariyanaToken", JSON.stringify(result.auth));

        navigate("/haryanaLogin/Haryana_Admin_login");
      } else {
        setError("Invalid UserID or Password");
      }
    } catch (error) {
      console.log(error);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          IIBA Haryana
        </h1>

        <p className="text-center text-gray-500 mt-1">
          Indian Industries Business Association
        </p>

        <h2 className="text-center text-xl font-semibold mt-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-center mt-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Enter User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex justify-center items-center"
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

export default HaryanaLogin;
import React from "react";
import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";

const StateCom = () => {

  const auth = localStorage.getItem("user");
  const hrAuth = localStorage.getItem("hariyana");
  const upAuth = localStorage.getItem("uttarparadesh_87");

  const stateDetail = [
    {
      stateName: "Uttar Pradesh",
      pathname: upAuth ? "/UttarAdmin_Login" : "/uttarpardeshLogin",
    },
    {
      stateName: "Uttarakhand",
      pathname: auth ? "/uttrakhandLogin/addmember" : "/uttrakhandLogin",
    },
    {
      stateName: "Haryana",
      pathname: hrAuth ? "/haryanaLogin/Haryana_Admin_login" : "/haryanaLogin",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-200 flex flex-col items-center justify-center px-4">

      {/* Heading */}
      <div className="mt-4 md:mt-0 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          IIBA Membership Portal
        </h1>
        <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-600 mt-3 text-lg">
          Indian Industries Business Association
        </p>

        <p className="mt-6 text-xl font-semibold text-gray-800">
          Select Your State
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">

        {stateDetail.map((elem, index) => (
          <Link to={elem.pathname} key={index}>

            <div className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white">

              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <FaMapLocationDot className="text-2xl" />
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                {elem.stateName}
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Login to manage members
              </p>

              <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Open Portal
              </button>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
};

export default StateCom;
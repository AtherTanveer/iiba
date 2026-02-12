import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaUserTie, FaUserShield } from "react-icons/fa";

const MemberShipComp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col items-center p-6">

      {/* Heading */}
      <h1 className=" text-3xl md:text-4xl font-bold text-center mt-6">
        IIBA Membership Portal
      </h1>
      <p className="text-gray-800 text-center mt-2">
        Indian Industries Business Association
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">

        {/* User Apply */}
        <Link to="/Newuser">
          <div className="card-ui">
            <FaUserPlus className="icon-ui text-2xl" />
            <h2 className="text-2xl">New User Apply for Membership</h2>
            <p>Apply online for new IIBA membership</p>
          </div>
        </Link>

        {/* State President */}
        <Link to="/State">
          <div className="card-ui">
            <FaUserTie className="icon-ui text-2xl" />
            <h2 className="text-2xl">State President / Secretary</h2>
            <p>Add new verified members</p>
          </div>
        </Link>

        {/* Admin Login */}
        <Link to="/admin-login">
          <div className="card-ui">
            <FaUserShield className="icon-ui text-2xl" />
            <h2 className="text-2xl">Admin Login</h2>
            <p>Manage member approvals</p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default MemberShipComp;

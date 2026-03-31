import React from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaUserTie, FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet";

const MemberShipComp = () => {
  return (
    <>


      <Helmet>

        <title>IIBA Membership Portal | Apply for Indian Industries & Business Association Membership</title>

        <meta
          name="description"
          content="Access the IIBA Membership Portal to apply for membership, manage member approvals, and connect with the Indian Industries & Business Association network supporting industries and businesses across India."
        />

        <meta
          name="keywords"
          content="IIBA membership portal, apply IIBA membership, Indian Industries Business Association membership, business association India membership, industry network membership India"
        />

        <meta name="author" content="Indian Industries & Business Association" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.iibaorg.com/membership" />

        {/* Open Graph */}
        <meta property="og:title" content="IIBA Membership Portal | Indian Industries & Business Association" />
        <meta property="og:description" content="Apply for IIBA membership and become part of India's growing industrial and business network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iibaorg.com/membership" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IIBA Membership Portal | Indian Industries & Business Association" />
        <meta name="twitter:description" content="Join the IIBA membership portal and connect with industries and entrepreneurs across India." />

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center px-6 py-10">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            IIBA Membership Portal
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-3 text-lg mb-1">
            Indian Industries Business Association
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 w-full max-w-6xl">

          {/* Apply Membership */}
          <Link to="/Newuser">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

              <div className="flex justify-center mb-4">
                <FaUserPlus className="text-indigo-600 text-4xl" />
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                Apply for Membership
              </h2>

              <p className="text-gray-500 mt-2">
                Apply online for new IIBA membership
              </p>

            </div>
          </Link>

          {/* State President */}
          <Link to="/State">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

              <div className="flex justify-center mb-4">
                <FaUserTie className="text-green-600 text-4xl" />
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                State President / Secretary
              </h2>

              <p className="text-gray-500 mt-2">
                Add and verify new members
              </p>

            </div>
          </Link>

          {/* Admin Login */}
          <Link to="/AdminMain">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

              <div className="flex justify-center mb-4">
                <FaUserShield className="text-red-600 text-4xl" />
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                Admin Login
              </h2>

              <p className="text-gray-500 mt-2">
                Manage member approvals
              </p>

            </div>
          </Link>

        </div>

      </div>
    </>

  );
};

export default MemberShipComp;
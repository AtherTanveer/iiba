import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Request_HR = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([])

  const AllRequest = async () => {
    const data = await fetch("http://localhost:4500/getHRuser");
    const result = await data.json();
    // console.log(result)
    setUserData(result);
  }

  useEffect(() => {
    AllRequest()
  }, [])



  const acceptRequest = async (e) => {

    const data = await fetch(`http://localhost:4500/findHRUser/${e}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await data.json();

    // Add Haryana Member
    const res = await fetch("http://localhost:4500/ReAdd_Haryana_Member", {
      method: "POST",
      body: JSON.stringify(result),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const dataRes = await res.json();

    // Duplicate email/phone check
    if (!dataRes.success) {
      alert("⚠️ Member Already Exists!\n\nThe Email or Phone Number is already registered in the system. Please contact the Sender to verify details before adding the member.");
      return;
    }

    // Member added
    alert("✅ Haryana Member Added Successfully");

    // Delete request
    const dltdata = await fetch(`http://localhost:4500/deleteHRRequest/${e}`, {
      method: "DELETE"
    });

    const deleteResult = await dltdata.json();

    if (deleteResult) {
      console.log("Request Deleted");
    }

    // Navigate
    navigate("/haryanaLogin/Haryana_Admin_login");

  };

  const DeleteRequest = async (e) => {



    if (confirm("Are You Sure Decline The Request!")) {
      const data = await fetch(`http://localhost:4500/AdminDeleteHRRequest/${e}`, {
        method: "delete"
      })

      const result = await data.json();
      console.log(result);
      AllRequest()
    } else {
      console.log("not delete")
    }

  }
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-sky-50 to-gray-200 p-4 md:p-10">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-950 uppercase tracking-wide">
            Membership Requests
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-3 rounded-full"></div>
        </div>

        {
          userData.length > 0 ? userData.map((elem, index) => (

            <div
              key={index}
              className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-6 md:p-8 mb-8 border border-sky-100"
            >

              {/* Header Section */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b pb-6">

                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-sky-900">
                    Request Details
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    ID: {elem._id}
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => acceptRequest(elem._id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => DeleteRequest(elem._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition"
                  >
                    Decline
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 items-center">

                {/* User Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      className="w-40 h-40 object-cover rounded-full shadow-lg"
                      src={elem.image}
                      alt="img not found"
                    />
                    <div className="absolute inset-0 rounded-full ring-4 ring-sky-300 animate-pulse"></div>
                  </div>
                </div>

                {/* Left Info */}
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-sky-900">Full Name:</span> {elem.name}</p>
                  <p><span className="font-semibold text-sky-900">Email:</span> {elem.email}</p>
                  <p><span className="font-semibold text-sky-900">Phone:</span> {elem.phone}</p>
                  <p><span className="font-semibold text-sky-900">Company:</span> {elem.company}</p>
                </div>

                {/* Right Info */}
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold text-sky-900">State:</span> {elem.state}</p>
                  <p><span className="font-semibold text-sky-900">District:</span> {elem.district}</p>
                  <p><span className="font-semibold text-sky-900">City:</span> {elem.city}</p>
                  <p><span className="font-semibold text-sky-900">Address:</span> {elem.address}</p>
                </div>

              </div>

            </div>

          )) : (
            <div className="flex justify-center items-center h-[50vh]">
              <h1 className="text-2xl font-medium text-gray-500">
                No Request Found
              </h1>
            </div>
          )
        }

      </div>
    </>
  )
}

export default Request_HR
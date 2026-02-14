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
        let e_val = e
        const data = await fetch(`http://localhost:4500/findHRUser/${e}`, {
    
          method: "post",
          headers: {
            "content-Type": "application/json"
          }
    
        })
    
        const result = await data.json()
    
    
    
    
        const Senddata = await fetch("http://localhost:4500/Add_Haryana_Member", {
    
          method: "post",
          body: JSON.stringify(result),
          headers: {
            "content-Type": "application/json"
          }
    
        })
    
    
        const DeltData = async () => {
    
          const dltdata = await fetch(`http://localhost:4500/deleteHRRequest/${e_val}`, {
            method: "delete"
          })
          const result = await dltdata.json();
          if (result) {
            console.log("data delete");
          }
    
        }
    
        if (Senddata) {
          console.log(Senddata);
          alert("✅ Member Added");
          navigate("/haryanaLogin/Haryana_Admin_login")
          DeltData()
        }
      }
    
      const DeleteRequest = async (e) => {
    
    
    
        if (confirm("Are You Sure Decline The Request!")) {
          const data = await fetch(`http://localhost:4500/deleteHRRequest/${e}`, {
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
      <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8">

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-center uppercase mb-6">
          Membership Requests
        </h1>

        {/* Card Box */}


        {

          userData.length > 0 ? userData.map((elem, index) => (
            <div key={index} className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 mt-4">

              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-4">
                <h2 className="text-xl font-semibold">Request Details</h2>

                <div className="flex gap-3">
                  <button onClick={() => acceptRequest(elem._id)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                    Accept
                  </button>
                  <button onClick={() => DeleteRequest(elem._id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium">
                    Decline
                  </button>
                </div>
              </div>

              {/* Content */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-lg">

                {/* Left */}
                <div className="space-y-2">
                  <p><span className="font-semibold">User ID:</span> {elem._id}</p>
                  <p><span className="font-semibold">Full Name:</span> {elem.name}</p>
                  <p><span className="font-semibold">Email:</span> {elem.email}</p>
                  <p><span className="font-semibold">Phone:</span> {elem.phone}</p>
                </div>

                {/* Right */}
                <div className="space-y-2">
                  <p><span className="font-semibold">State:</span> {elem.state}</p>
                  <p><span className="font-semibold">District:</span> {elem.district}</p>
                  <p><span className="font-semibold">City:</span> {elem.city}</p>
                  <p><span className="font-semibold">Address:</span> {elem.address}</p>
                  <p><span className="font-semibold">Company:</span> {elem.company}</p>
                </div>

              </div>

            </div>
          )) : <h1 className="text-2xl font-medium w-full text-center h-full mt-[30vh]">No Request Found </h1>
        }



      </div>
    </>
  )
}

export default Request_HR
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const AllUkMember = () => {
      const [userData, setuserData] = useState([]);
    
      const getData = async () => {
        const data = await fetch("http://localhost:4500/getMember")
        const result = await data.json();
    
        // console.log(result)
        if (result) {
          setuserData(result);
        }
    
      }
    
      useEffect(() => {
        getData();
      }, [])
  return (
    <>
    <h1 className='text-center w-full text-gray-600'>Uttrakhand Member</h1>
    <div className="max-w-7xl mx-auto px-4 py-10">

        {
          userData.length > 0 ? (

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

              {userData.map((elem, index) => (

                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
                >

                  {/* Image Section */}
                  <div className="bg-sky-950 flex justify-center items-center p-6">
                    <img
                      src={`http://localhost:4500/uploads/${elem.image}`}
                      alt={elem.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3">

                    <h2 className="text-xl font-semibold text-sky-950 text-center">
                      {elem.name}
                    </h2>

                    <div className="text-sm text-gray-600 space-y-1">

                      <p><span className="font-medium">Company:</span> {elem.company}</p>
                      <p><span className="font-medium">Email:</span> {elem.email}</p>
                      <p><span className="font-medium">Phone:</span> {elem.phone}</p>
                      <p><span className="font-medium">State:</span> {elem.state}</p>
                      <p><span className="font-medium">District:</span> {elem.district}</p>
                      <p><span className="font-medium">City:</span> {elem.city}</p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <h1 className="text-2xl font-medium text-center mt-40 text-gray-600">
              No Member Found
            </h1>

          )
        }

      </div></>
  )
}

export default AllUkMember
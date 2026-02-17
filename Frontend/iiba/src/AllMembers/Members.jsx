import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import AllUkMember from './AllUkMember';
import AllUpMember from './AllUpMember';
import AllHrMember from './AllHrMember';

const Members = () => {
  const [userData, setuserData] = useState([]);
  const [val, setval] = useState("All_Member");


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
      <div className="bg-gradient-to-b from-white to-sky-50 py-12 px-4">

        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-950 leading-tight">
            IIBA Member Directory
          </h1>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore the official directory of approved members of IIBA. This platform connects industries, entrepreneurs, and MSMEs across regions, fostering collaboration, transparency, and industrial growth.
          </p>

        </div>

      </div>


      <div className="bg-gradient-to-r from-sky-950 to-sky-800 text-white py-6 px-4">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-center md:text-left">
            Member Profiles
          </h1>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

            {/* Search */}
            <input
              type="text"
              placeholder="Search Member..."
              className="w-full sm:w-64 p-3 rounded-xl text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md transition-all duration-300"
            />

            {/* Filter */}
            <select
              value={val}
              onChange={(e) => setval(e.target.value)}
              className="w-full sm:w-52 p-3 rounded-xl text-black bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-md transition-all duration-300"
            >
              <option value="All_Member">All Members</option>
              <option value="UttarParadesh">UttarParadesh</option>
              <option value="UttraKhand">Uttarakhand</option>
              <option value="Haryana">Haryana</option>
              <option value="HimachalParadesh">Himachal Pradesh</option>
            </select>

          </div>
        </div>
      </div>


      {val === "All_Member" && <><AllUpMember/> <AllUkMember/><AllHrMember/></>}
      {val === "UttarParadesh" && <AllUpMember/>}
      {val === "UttraKhand" && <AllUkMember/>}
      {val === "Haryana" && <AllHrMember/>}
      {val === "HimachalParadesh" && <p className="w-full text-lg font-medium text-center text-gray-700 pt-4">Himachal Paradesh Members Coming Soon...</p>}








    </>
  )
}

export default Members
import React, { useEffect, useState } from "react";

const AllMembersWithFilter = () => {
  const [allMembers, setAllMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  const fetchAllMembers = async () => {
  try {
    const [haryana, uttarakhand, up] = await Promise.all([
      fetch("http://localhost:4500/get_Haryana_member").then(res => res.json()),
      fetch("http://localhost:4500/getMember").then(res => res.json()), 
      fetch("http://localhost:4500/get_Uttarparadesh_member").then(res => res.json()),
    ]);

    const combinedData = [
      ...haryana.map(item => ({ ...item, stateType: "Haryana" })),
      ...uttarakhand.map(item => ({ ...item, stateType: "Uttarakhand" })), 
      ...up.map(item => ({ ...item, stateType: "Uttar Pradesh" })),
    ];

    setAllMembers(combinedData);
    setFilteredMembers(combinedData);

  } catch (error) {
    console.error("Error fetching members:", error);
  }
};
  useEffect(() => {
    fetchAllMembers();
  }, []);

  // 🔎 Search + Filter Logic
  useEffect(() => {
    let result = allMembers;

    if (search) {
      result = result.filter(member =>
        member.name?.toLowerCase().includes(search.toLowerCase()) ||
        member.company?.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (stateFilter) {
      result = result.filter(member => member.stateType === stateFilter);
    }

    setFilteredMembers(result);
  }, [search, stateFilter, allMembers]);

  return (
    <>
  {/* Hero Section */}
  <div className="bg-gradient-to-r from-sky-950 to-sky-800 text-white py-16 px-4 rounded-b-3xl">

    <div className="max-w-5xl mx-auto text-center">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        IIBA Member Directory
      </h1>

      <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>

      <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Explore the official directory of approved members of IIBA. 
        Connecting industries, entrepreneurs, and MSMEs across regions 
        to foster collaboration and industrial growth.
      </p>

      {/* Member Count Badge */}
      <div className="mt-6 inline-block bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium">
        Total Members: {filteredMembers.length}
      </div>

    </div>
  </div>

  {/* Search + Filter Section */}
  <div className="max-w-7xl mx-auto px-4 -mt-8">

    <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row gap-4 justify-between items-center">

      <input
        type="text"
        placeholder="🔍 Search by Name or Company..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 px-5 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950 transition"
      />

      <select
        value={stateFilter}
        onChange={(e) => setStateFilter(e.target.value)}
        className="w-full md:w-1/4 px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950 transition"
      >
        <option value="">All States</option>
        <option value="Haryana">Haryana</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
      </select>

    </div>
  </div>

  {/* Members Grid */}
  <div className="max-w-7xl mx-auto px-4 py-16">

    {filteredMembers.length > 0 ? (

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {filteredMembers.map((elem, index) => (

          <div
            key={index}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden transform hover:-translate-y-1"
          >

            {/* Image Section */}
            <div className="bg-sky-950 flex justify-center items-center p-8 relative">

              <img
                src={`http://localhost:4500/uploads/${elem.image}`}
                alt={elem.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition duration-300"
              />

              {/* State Badge */}
              <span className="absolute top-4 right-4 bg-amber-400 text-sky-950 text-xs font-semibold px-3 py-1 rounded-full shadow">
                {elem.state}
              </span>

            </div>

            {/* Content Section */}
            <div className="p-6 space-y-3">

              <h2 className="text-xl font-bold text-sky-950 text-center group-hover:text-amber-500 transition">
                {elem.name}
              </h2>

              <div className="text-sm text-gray-600 space-y-2 mt-4">

                <p><span className="font-medium text-gray-800">Company:</span> {elem.company}</p>
                <p><span className="font-medium text-gray-800">Email:</span> {elem.email}</p>
                <p><span className="font-medium text-gray-800">Phone:</span> {elem.phone}</p>
                <p><span className="font-medium text-gray-800">District:</span> {elem.district}</p>
                <p><span className="font-medium text-gray-800">City:</span> {elem.city}</p>

              </div>

            </div>

          </div>

        ))}

      </div>

    ) : (

      <div className="text-center mt-20">
        <h1 className="text-2xl font-medium text-gray-600">
          No Member Found
        </h1>
      </div>

    )}

  </div>
</>
  );
};

export default AllMembersWithFilter;
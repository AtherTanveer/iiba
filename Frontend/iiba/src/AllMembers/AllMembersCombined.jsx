import React, { useEffect, useState } from "react";

// 🔹 Debounce Hook (inline for simplicity)
const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

const AllMembersWithFilter = () => {

  const [allMembers, setAllMembers] = useState([]);
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // 🔥 Debounced Search
  const debouncedSearch = useDebounce(search, 500);

  const fetchAllMembers = async () => {
    try {

      setLoading(true);

      const [haryana, uttarakhand, up] = await Promise.all([
        fetch(`https://iiba.onrender.com/get_Haryana_member?page=${page}&search=${debouncedSearch}`).then(res => res.json()),
        fetch(`https://iiba.onrender.com/getMember?page=${page}&search=${debouncedSearch}`).then(res => res.json()),
        fetch(`https://iiba.onrender.com/get_Uttarparadesh_member?page=${page}&search=${debouncedSearch}`).then(res => res.json()),
      ]);

      let combinedData = [
        ...haryana.data.map(item => ({ ...item, stateType: "Haryana" })),
        ...uttarakhand.data.map(item => ({ ...item, stateType: "Uttarakhand" })),
        ...up.data.map(item => ({ ...item, stateType: "Uttar Pradesh" })),
      ];

      // 🔹 State Filter
      if (stateFilter) {
        combinedData = combinedData.filter(
          item => item.stateType === stateFilter
        );
      }

      setAllMembers(combinedData);

      const maxTotal = Math.max(
        haryana.total,
        uttarakhand.total,
        up.total
      );

      setTotalPages(Math.ceil(maxTotal / 8));

      setLoading(false);

    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMembers();
  }, [page, debouncedSearch, stateFilter]);

  return (
    <>
      {/* 🔥 HERO */}
      <div className="bg-gradient-to-r from-sky-950 to-sky-800 text-white py-16 px-4 rounded-b-3xl">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            IIBA Member Directory
          </h1>

          <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Explore the official directory of approved members of IIBA.
          </p>

          <div className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full text-sm">
            Members: {allMembers.length}
          </div>

        </div>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row gap-4 justify-between items-center">

          <input
            type="text"
            placeholder="🔍 Search by Name or Company..."
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            className="w-full md:w-1/2 px-5 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950"
          />

          <select
            value={stateFilter}
            onChange={(e) => {
              setPage(1);
              setStateFilter(e.target.value);
            }}
            className="w-full md:w-1/4 px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-950"
          >
            <option value="">All States</option>
            <option value="Haryana">Haryana</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>

        </div>
      </div>

      {/* 🧾 MEMBERS GRID */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {loading ? (

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden animate-pulse"
              >

                <div className="bg-gray-300 flex justify-center items-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gray-400"></div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>

              </div>
            ))}

          </div>

        ) : allMembers.length > 0 ? (

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {allMembers.map((elem, index) => (

              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden"
              >

                <div className="bg-sky-950 flex justify-center items-center p-8 relative">

                  <img
                    src={elem.image}
                    alt={elem.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                  />

                  <span className="absolute top-4 right-4 bg-amber-400 text-sky-950 text-xs px-3 py-1 rounded-full">
                    {elem.state}
                  </span>

                </div>

                <div className="p-6 space-y-2">

                  <h2 className="text-xl font-bold text-center text-sky-950">
                    {elem.name}
                  </h2>

                  <p><b>Company:</b> {elem.company}</p>
                  <p><b>Email:</b> {elem.email}</p>
                  <p><b>Phone:</b> {elem.phone}</p>
                  <p><b>District:</b> {elem.district}</p>
                  <p><b>City:</b> {elem.city}</p>

                </div>

              </div>

            ))}

          </div>

        ) : (
          <div className="text-center mt-20">
            <h1 className="text-2xl text-gray-600">
              No Members Found
            </h1>
          </div>
        )}

      </div>

      {/* 🔢 PAGINATION */}
      <div className="flex justify-center items-center gap-4 pb-10">

        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className={`px-5 py-2 rounded-lg ${
            page === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Prev
        </button>

        <span className="font-semibold text-lg">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className={`px-5 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-300"
              : "bg-sky-950 text-white hover:bg-sky-800"
          }`}
        >
          Next
        </button>

      </div>
    </>
  );
};

export default AllMembersWithFilter;
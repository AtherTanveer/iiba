import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoPersonAddSharp } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { jwtDecode } from "jwt-decode"
import { GrCertificate } from "react-icons/gr";

const UttrKhnd_CRUD_portal = () => {

  const [list, setlist] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // ✅ GET DATA (pagination + search)
  const getData = async () => {

    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      const expTime = decoded.exp * 1000;

      if (Date.now() > expTime) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        alert("Session expired, login again");
        window.location.href = "/uttrakhandLogin";
        return;
      }
    }

    const data = await fetch(
      `https://iiba.onrender.com/getMember?page=${page}&search=${search}`,
      {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      }
    );

    const result = await data.json();

    if (result) {
      setlist(result.data);
      setTotalPages(result.totalPages);
    }
  };

  useEffect(() => {
    getData();
  }, [page, search]);

  // ✅ SEARCH
  const searchData = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  // ✅ DELETE
  const deleteData = async (id) => {
    if (confirm("Are You Sure Delete Member !")) {
      const data = await fetch(`https://iiba.onrender.com/deleteMember/${id}`, {
        method: "delete",
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });

      const result = await data.json();
      getData();

      if (result) {
        alert("data deleted");
      }
    }
  };

  const logoutfn = () => {
    if (confirm("Are You Sure To Logout !")) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <>
      {/* Header (same) */}
      <div className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <h1 className="text-2xl font-bold text-blue-900">
          Uttarakhand State President Dashboard – IIBA
        </h1>

        <div className="flex gap-3">
          <button className="flex px-4 py-2 bg-blue-600 text-white rounded-lg">
            <MdOutlinePendingActions className='text-2xl' />
            <Link to={"/requestuk"}>Requests</Link>
          </button>

          <button className="flex px-4 py-2 bg-blue-600 text-white rounded-lg">
            <FaCloudUploadAlt className='text-2xl' />
            <Link to={"/NewsAdmin"}> Upload+</Link>
          </button>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={logoutfn}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white shadow-sm p-4 flex flex-col md:flex-row justify-between items-center gap-4 mt-4">

        <h2 className="text-xl font-semibold text-gray-800">
          Member Details
        </h2>

        <div className="flex gap-3 items-center">
          <input
            onChange={searchData}
            className="border p-2 rounded-lg w-60"
            type="text"
            placeholder="Search Member..."
          />

          <Link to={"/uttarakhandAddMember"}>
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg">
              Add Member <IoPersonAddSharp />
            </button>
          </Link>
        </div>
      </div>

      {/* Table (same UI) */}
      <div className="overflow-x-auto mt-5 p-4 mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-2">SN</th>
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">State</th>
              <th className="p-2">District</th>
              <th className="p-2">City</th>
              <th className="p-2">Address</th>
              <th className="p-2">Company</th>
              <th className="p-2">Image</th>
              <th className="p-2">Action</th>
              <th className="p-2">Certificate</th>
            </tr>
          </thead>

          <tbody>
            {list.map((elem, index) => (
              <tr key={index} className="border-b hover:bg-gray-100 transition">
                <td className="p-2">{(page - 1) * 8 + index + 1}</td>
                <td className="p-2">{elem._id}</td>
                <td className="p-2">{elem.name}</td>
                <td className="p-2">{elem.email}</td>
                <td className="p-2">{elem.phone}</td>
                <td className="p-2">{elem.state}</td>
                <td className="p-2">{elem.district}</td>
                <td className="p-2">{elem.city}</td>
                <td className="p-2">{elem.address}</td>
                <td className="p-2">{elem.company}</td>

                <td className="p-2">
                  <img
                    className="w-12 h-12 object-cover rounded-full border"
                    src={elem.image}
                    alt="member"
                  />
                </td>

                {/* ✅ ACTION COLUMN */}
                <td className="p-2">
                  <div className="flex flex-wrap gap-2 justify-center">

                    <Link to={`/uttrakhandUpdateMember/${elem._id}`}>
                      <button className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded text-sm">
                        Update
                      </button>
                    </Link>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      onClick={() => deleteData(elem._id)}
                    >
                      Delete
                    </button>



                  </div>
                </td>

                <td className='p-2'>
                  <button
                    onClick={() =>
                      window.open(`https://iiba.onrender.com/generateCertificate/${elem._id}`)
                    }
                    className="bg-green-900 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
                  >
                    <GrCertificate />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <div className="flex justify-center items-center gap-4 pb-10">

        <button
          disabled={page === 1}
          onClick={() => setPage(prev => prev - 1)}
          className="px-5 py-2 bg-gray-200 rounded-lg"
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className="px-5 py-2 bg-blue-900 text-white rounded-lg"
        >
          Next
        </button>

      </div>
    </>
  )
}

export default UttrKhnd_CRUD_portal;
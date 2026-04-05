import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsAdmin = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const limit = 6;

  // ✅ Fetch Paginated News
  const fetchNews = async (page = 1) => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://iiba.onrender.com/getNews?page=${page}&limit=${limit}`
      );

      const data = await response.json();

      setNews(data.data);           // 👈 important
      setTotalPages(data.totalPages);

    } catch (error) {
      console.log("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  // ✅ Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this news?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`https://iiba.onrender.com/DeleteNews/${id}`, {
        method: "DELETE",
      });

      fetchNews(currentPage); // refresh after delete
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const handleAddNews = () => {

  if (localStorage.getItem("uttarparadesh_87")) {
     navigate("/UtNewsSecion");
  }

  else if (localStorage.getItem("hariyana")) {
    navigate("/H$NewsSecion");
  }

  else if (localStorage.getItem("user")) {
   
    navigate("/NewsSecion");
  }

  else {
    alert("Unauthorized Admin");
  }

};

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-gray-100 p-6 md:p-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-sky-950">
          IIBA News Admin Panel
        </h1>

        <button
          onClick={handleAddNews}
          className="bg-sky-900 hover:bg-sky-800 text-white px-6 py-3 rounded-xl shadow-lg transition"
        >
          + Add News
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : news.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl shadow text-center">
          <p className="text-gray-500 text-lg">No News Available</p>
        </div>
      ) : (
        <>
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-52 w-full object-cover group-hover:scale-105 transition"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    {item.date}
                  </p>

                  <p className="text-gray-600 mt-3 line-clamp-2 text-sm">
                    {item.description}
                  </p>

                  <div className="flex justify-between mt-6">
                    <button
                      onClick={() => navigate(`/updateNews/${item._id}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2 flex-wrap">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="px-4 py-2 border rounded-xl disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-xl ${currentPage === index + 1
                      ? "bg-sky-900 text-white"
                      : "bg-white border"
                    }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="px-4 py-2 border rounded-xl disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsAdmin;
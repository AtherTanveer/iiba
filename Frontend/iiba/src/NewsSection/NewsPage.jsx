import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 9;

  // 🔥 Fetch Paginated News
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://iiba.onrender.com/getNews?page=${currentPage}&limit=${limit}`
        );

        const data = await response.json();

        setNewsData(data.data);
        setTotalPages(data.totalPages);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Helmet>
        <title>IIBA News & Events | Industry Updates & Seminars</title>

        <meta
          name="description"
          content="Latest news, industry events and seminars organized by Indian Industries & Business Association."
        />

        <meta
          name="keywords"
          content="IIBA news, business seminars India, industry events, IIBA updates"
        />
      </Helmet>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          News & Events
        </h1>
        <p className="text-gray-500 mt-2">
          Latest updates, seminars, and announcements
        </p>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search news..."
          className="px-4 py-2 border rounded-xl w-full md:w-1/3"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-2 md:flex gap-3">
          {["All", "News", "Event", "Seminar"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-xl ${category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 🔥 Skeleton Loader */}
      {loading && (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow overflow-hidden animate-pulse"
            >
              <div className="h-60 bg-gray-300 w-full"></div>

              <div className="p-5 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
                <div className="h-5 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cards Grid */}
      {!loading && (
        <div className="grid md:grid-cols-3 gap-6">
          {newsData
            .filter((item) =>
              (category === "All" || item.category === category) &&
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
                onClick={() => setSelected(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-sm text-blue-600 font-medium">
                    {item.category}
                  </p>
                  <h2 className="text-lg font-bold mt-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.date}
                  </p>
                  <p className="text-gray-600 mt-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

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
                  ? "bg-blue-600 text-white"
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

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3"
            >
              ✕
            </button>
            <img
              src={selected.image}
              alt=""
              className="rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">
              {selected.title}
            </h2>
            <p className="text-blue-600 mb-2">
              {selected.category} • {selected.date}
            </p>
            <p className="text-gray-700">
              {selected.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
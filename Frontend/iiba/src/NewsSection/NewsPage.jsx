import { useState, useEffect } from "react";

export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // 🔥 Fetch API
  useEffect(() => {
    fetch("http://localhost:4500/getNews")
      .then((res) => res.json())
      .then((data) => setNewsData(data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = newsData.filter((item) => {
    return (
      (category === "All" || item.category === category) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

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

        <div className="flex gap-3">
          {["All", "News", "Event", "Seminar"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-xl ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => setSelected(item)}
          >
            <img
              src={`http://localhost:4500/uploads/${item.image}`}
              alt={item.title}
              className="h-48 w-full object-cover"
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
              src={`http://localhost:4500/uploads/${selected.image}`}
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
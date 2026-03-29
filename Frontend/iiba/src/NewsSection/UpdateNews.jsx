import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // 🔥 loader state
  const [pageLoading, setPageLoading] = useState(true); // 🔥 initial fetch loader

  // 🔥 Fetch Single News
  useEffect(() => {
    const fetchSingleNews = async () => {
      try {
        const res = await fetch(
          `https://iiba.onrender.com/goNewsUpdate/${id}`
        );
        const data = await res.json();

        setTitle(data.title);
        setCategory(data.category);
        setDate(data.date);
        setDescription(data.description);
        setOldImage(data.image);
      } catch (err) {
        console.log(err);
      } finally {
        setPageLoading(false);
      }
    };

    fetchSingleNews();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !category || !date || !description) {
      setError(true);
      return;
    }

    setLoading(true); // 🔥 start loader

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", category);
      formData.append("date", date);
      formData.append("description", description);

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(
        `https://iiba.onrender.com/updateNews/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const result = await response.json();

      if (result) {
        alert("News Updated Successfully ✅");
        navigate("/NewsAdmin");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // 🔥 stop loader
    }
  };

  // 🔥 Page Loader
  if (pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-sky-900 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-950 mb-8">
          Update News / Event – IIBA
        </h1>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            />
            {error && !title && (
              <p className="text-red-600 text-sm">
                Enter Title
              </p>
            )}
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            >
              <option value="">Select Category</option>
              <option value="News">News</option>
              <option value="Event">Event</option>
              <option value="Seminar">Seminar</option>
            </select>
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Date *
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">
              Description *
            </label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            />
          </div>

          {/* Old Image */}
          {oldImage && (
            <div className="md:col-span-2">
              <p className="text-sm mb-2 font-medium">
                Current Image:
              </p>
              <img
                src={`https://iiba.onrender.com/uploads/${oldImage}?${new Date().getTime()}`}
                alt=""
                className="h-40 rounded-lg"
              />
            </div>
          )}

          {/* New Image */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              Replace Image (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
              className="p-2 bg-gray-700 text-white rounded-md"
            />
          </div>

          {/* Update Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-sky-950 hover:bg-sky-800 text-white px-12 py-3 rounded-xl text-lg shadow-md flex items-center gap-2 disabled:opacity-70"
            >
              {loading && (
                <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
              )}
              {loading ? "Updating..." : "Update News"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNews;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !date || !description || !image) {
      setError(true);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("date", date);
    formData.append("description", description);
    formData.append("image", image);

    const response = await fetch("http://localhost:4500/postNews", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result) {
      alert("News / Event Added Successfully ✅");
      navigate("/News");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-sky-950 mb-8">
          Add News / Event – IIBA
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Title */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            />
            {error && !title && <p className="text-red-600 text-sm">Enter Title</p>}
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Category *</label>
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
            {error && !category && <p className="text-red-600 text-sm">Select Category</p>}
          </div>

          {/* Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Date *</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            />
            {error && !date && <p className="text-red-600 text-sm">Select Date</p>}
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium mb-1">Description *</label>
            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-sky-900"
            />
            {error && !description && (
              <p className="text-red-600 text-sm">Enter Description</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              Upload Image *
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="p-2 bg-gray-700 text-white rounded-md"
            />
            {error && !image && (
              <p className="text-red-600 text-sm mt-1">Upload Image</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="bg-sky-950 hover:bg-sky-800 text-white px-12 py-3 rounded-xl text-lg shadow-md"
            >
              Add News
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default NewsSection;
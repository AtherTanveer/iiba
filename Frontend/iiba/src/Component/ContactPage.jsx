import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const ContactPage = () => {

  const contacts = [
    {
      name: "Main Office",
      phone: "+918449319224",
      email: "admin@iiba.org",
      address: "Delhi, India",
    },
    {
      name: "Uttar Pradesh State Office",
      phone: "+919000000001",
      email: "up@iiba.org",
      address: "Lucknow, Uttar Pradesh",
    },
    {
      name: "Uttarakhand State Office",
      phone: "+919000000002",
      email: "uk@iiba.org",
      address: "Dehradun, Uttarakhand",
    },
    {
      name: "Haryana State Office",
      phone: "+919000000003",
      email: "hr@iiba.org",
      address: "Chandigarh, Haryana",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-12 px-5">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact IIBA
        </h1>

        <p className="text-gray-600 mt-3 text-sm md:text-base">
          Indian Industries Business Association – Get in touch with our state offices for membership and support.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto">

        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-lg mb-4">
              <FaUserTie className="text-indigo-600 text-xl" />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {contact.name}
            </h2>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center text-gray-600 mb-3 hover:text-indigo-600"
            >
              <FaPhoneAlt className="mr-3 text-indigo-500" />
              {contact.phone}
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center text-gray-600 mb-3 hover:text-indigo-600"
            >
              <FaEnvelope className="mr-3 text-indigo-500" />
              {contact.email}
            </a>

            {/* Address */}
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-3 text-indigo-500" />
              {contact.address}
            </p>

          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Need Help With Membership?
        </h2>

        <p className="text-gray-600 mb-5">
          Our team is available to assist you with registration and membership queries.
        </p>

      </div>

    </div>
  );
};

export default ContactPage;
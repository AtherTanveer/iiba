// src/pages/IibaBharat.jsx
import React from "react";
import { Helmet } from "react-helmet";

const IibaBharat = () => {
  return (
    <div className="container mx-auto p-6 font-sans">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>IIBA Bharat - Indian Industries & Business Association</title>
        <meta
          name="description"
          content="IIBA Bharat (Indian Industries & Business Association) is a registered organization connecting businesses, industries and entrepreneurs across India. Explore events, seminars, and verified members."
        />
        <meta name="keywords" content="IIBA Bharat, IIBA India, Indian Industries & Business Association, Business Network India, Entrepreneurs, MSME India" />
        <link rel="canonical" href="https://www.iibaorg.com/iiba-bharat" />
      </Helmet>

      {/* Header */}
      <header className="text-center my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
          IIBA Bharat
        </h1>
        <p className="text-lg md:text-xl mt-2">
          Indian Industries & Business Association (Regd.) India
        </p>
        <p className="text-gray-700 mt-4">
          भारत के उद्योगों और व्यापारियों को जोड़ने वाला पंजीकृत संगठन
        </p>
      </header>

      {/* About Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">About IIBA Bharat</h2>
        <p className="mb-2">
          IIBA Bharat connects entrepreneurs, industries, and businesses across India through networking, seminars, and industry events.
        </p>
        <p>
          आई० आई० बी० ए० भारत उद्योगों और उद्यमियों को नेटवर्किंग, सेमिनार और व्यापारिक कार्यक्रमों के माध्यम से जोड़ता है।
        </p>
      </section>

      {/* Mission Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Mission / मिशन</h2>
        <p className="mb-2">
          To empower MSMEs, entrepreneurs, and business owners by providing a strong network and knowledge-sharing platform.
        </p>
        <p>
          MSME, उद्यमियों और व्यापारियों को एक मजबूत नेटवर्क और ज्ञान साझा करने का मंच प्रदान करना।
        </p>
      </section>

      {/* Events Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Seminars & Events / सेमिनार और कार्यक्रम</h2>
        <ul className="list-disc ml-6">
          <li>Business Networking Events / व्यापार नेटवर्किंग कार्यक्रम</li>
          <li>Industry Seminars / उद्योग सेमिनार</li>
          <li>Workshops for Entrepreneurs / उद्यमियों के लिए कार्यशालाएँ</li>
        </ul>
      </section>

      {/* Members Section */}
      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Verified Members / प्रमाणित सदस्य</h2>
        <p>
          Explore our verified members and connect with trusted businesses across India.
        </p>
        <p>
          हमारे प्रमाणित सदस्यों को देखें और भारत भर के विश्वसनीय व्यवसायों से जुड़ें।
        </p>
      </section>

      {/* Call to Homepage */}
      <section className="text-center my-10">
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Visit Official Homepage / आधिकारिक होमपेज देखें
        </a>
      </section>
    </div>
  );
};

export default IibaBharat;
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const BusinessNews = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
      .then(res => res.json())
      .then(data => {
        setNews(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

  }, []);

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">
         <Helmet>
        <title>IIBA Business News | IIBA Global Market Updates</title>

        <meta
          name="description"
          content="Latest global business news, startup trends, market insights and international industry updates."
        />

        <meta
          name="keywords"
          content="business news, global business news, market updates, startup news, international business , iiba business news , iiba news"
        />
      </Helmet>

      {/* SEO Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Global Business News & Market Updates
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Latest international business news, startup updates and market trends curated for industry professionals.
        </p>
      </div>

      {loading && (
        <div className="text-center text-gray-500 text-lg">
          Loading latest news...
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-6">

        {news.map((item, index) => (

          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">

            <img
              src={item.urlToImage || "https://via.placeholder.com/400x250"}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">

              <h2 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm line-clamp-3">
                {item.description}
              </p>

              {/* Source */}
              <p className="text-xs text-gray-400 mt-3">
                Source: {item.source?.name}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 font-semibold mt-4 inline-block hover:underline"
              >
                Read Full News →
              </a>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default BusinessNews;
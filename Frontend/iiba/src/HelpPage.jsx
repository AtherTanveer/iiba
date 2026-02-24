import React, { useState } from "react";

const HelpPage = () => {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");

  const faqs = [
    {
      question: "How can I apply for IIBA membership?",
      answer:
        "You can apply through the Membership page by completing the online form and uploading required documents for verification.",
    },
    {
      question: "How long does membership approval take?",
      answer:
        "Approval usually takes 3–7 working days depending on document verification and internal review.",
    },
    {
      question: "How can I update my profile information?",
      answer:
        "Login to your dashboard and navigate to the Profile section to update your business or personal details.",
    },
    {
      question: "What should I do if payment fails?",
      answer:
        "If payment fails, wait a few minutes and check your bank statement. If deducted but not updated, contact support with transaction details.",
    },
  ];

  const filtered = faqs.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-16 text-center bg-white">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Help & Support
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions or contact our support team for
          further assistance.
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-lg font-medium text-gray-800">
                  {item.question}
                </span>
                <span className="text-2xl text-blue-600">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              {active === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Still Need Assistance?
          </h2>
          <p className="text-gray-600 mt-4">
            Our support team is ready to help you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Email Support
            </h3>
            <p className="text-gray-600">IIBA.association1966@gmail.com</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Call Us
            </h3>
            <p className="text-gray-600">+91 7906856465</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Office Hours
            </h3>
            <p className="text-gray-600">Mon – Sat : 10:00 AM – 6:00 PM</p>
          </div>

           <div className="bg-gray-50 p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Office Address
            </h3>
            <p className="text-gray-600">National Office: 110, Chandan Nagar,
Dehradun-247001, Uttarakhand, India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;

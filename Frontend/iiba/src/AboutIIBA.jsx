import React from "react";
import { Helmet } from "react-helmet";

const AboutIIBA = () => {
  return (
    <>
      <Helmet>
        <title>About IIBA | Indian Industries Business Association</title>

        <meta
          name="description"
          content="Learn about IIBA - Indian Industries Business Association. Supporting MSMEs, promoting industrial growth, and empowering businesses across India."
        />

        <meta
          name="keywords"
          content="IIBA, Indian Industries Business Association, MSME support India, business association India, industry network"
        />

        <meta property="og:title" content="About IIBA" />
        <meta
          property="og:description"
          content="Indian Industries Business Association empowering MSMEs and industries in India."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="text-center py-16 px-6 md:px-16 bg-white">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            About IIBA
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Indian Industries Business Association – Empowering MSMEs,
            Strengthening Industries, Building the Nation.
          </p>
        </section>

        {/* About Content */}
        <section className="py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Indian Industries Business Association (IIBA) is a premier
                business organization dedicated to strengthening and supporting
                the MSME sector in India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For over three decades, IIBA has consistently worked towards
                promoting industrial development by disseminating valuable
                information on legal, technical, and market-related matters,
                along with the latest government policies and procedures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                IIBA assists industries in solving practical and operational
                challenges, ensuring sustainable growth and competitiveness.
              </p>

            </div>

            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  MSME Empowerment
                </h3>
                <p className="text-gray-600">
                  Supporting micro, small, and medium enterprises with knowledge,
                  advocacy, and strategic guidance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Legal & Policy Awareness
                </h3>
                <p className="text-gray-600">
                  Spreading awareness about government schemes, policies,
                  compliance requirements, and regulatory updates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Industrial Growth Support
                </h3>
                <p className="text-gray-600">
                  Assisting industries in solving operational challenges for
                  sustainable and competitive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To create a strong, self-reliant, and globally competitive MSME
                ecosystem in India that drives economic growth, innovation, and
                employment generation.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To empower industries through advocacy, policy awareness,
                professional guidance, and practical support while fostering
                collaboration between businesses and government institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose IIBA */}
        <section className="py-16 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose IIBA?
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              IIBA stands as a trusted partner for industries seeking reliable
              guidance, industry representation, and sustainable growth
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                17+ Years of Excellence
              </h3>
              <p className="text-gray-600">
                A legacy of consistent contribution towards strengthening India’s
                industrial ecosystem.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Strong Industry Network
              </h3>
              <p className="text-gray-600">
                Connecting businesses, policymakers, and industry experts to
                create collaborative growth opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Practical Solutions
              </h3>
              <p className="text-gray-600">
                Providing real-world solutions to operational, legal, and
                compliance challenges faced by MSMEs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>

  );
};

export default AboutIIBA;
import React from "react";
import { FaUsers, FaHandshake, FaRoad, FaBuilding, FaGavel, FaNetworkWired, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";



const MembershipBenefits = () => {
    return (
        <>
            <Helmet>

                <title>IIBA Membership Benefits | Indian Industries & Business Association</title>

                <meta
                    name="description"
                    content="Explore the benefits of joining the Indian Industries & Business Association including industrial networking, infrastructure development and business collaboration."
                />

                <meta
                    name="keywords"
                    content="IIBA membership, IIBA Benifits, Indian industries association, business network India, infrastructure development organization"
                />

            </Helmet>

            <div className="bg-gray-50 py-16 px-6">

                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="text-center mb-14">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            IIBA Membership Benefits
                        </h1>

                        <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
                            Becoming a member of the Indian Industrial & Business Association (IIBA)
                            provides businesses, entrepreneurs, and professionals with valuable
                            opportunities to connect, grow, and participate in national
                            development initiatives. The association serves as a strong platform
                            where industries collaborate, share knowledge, and contribute to
                            economic progress across India.
                        </p>
                    </div>

                    {/* Intro Section */}
                    <div className="bg-white rounded-xl shadow-md p-8 mb-16">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Indian Industrial & Business Association (IIBA) was established
                            with the vision of strengthening India’s industrial ecosystem by
                            bringing together businesses from different sectors and regions.
                            Over the years, the organization has worked closely with industry
                            leaders, policymakers, and professionals to create a collaborative
                            environment that supports innovation, infrastructure development,
                            and sustainable economic growth.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Membership in IIBA offers access to a wide network of professionals,
                            industry leaders, and institutions. Members benefit from
                            participation in development initiatives, awareness of government
                            policies, and opportunities to expand their businesses through
                            partnerships and collaborations.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Benefit 1 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <FaHandshake className="text-sky-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Government & Institutional Collaboration
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IIBA acts as a bridge between industries and government
                                institutions. Members gain awareness about government schemes,
                                development projects, and regulatory policies that influence
                                industrial growth.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                Through collaboration with public institutions, IIBA helps
                                businesses understand opportunities connected to national and
                                regional development initiatives.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <FaRoad className="text-sky-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Infrastructure Development Opportunities
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Infrastructure development is essential for economic progress.
                                IIBA supports initiatives related to road construction,
                                connectivity improvements, and regional infrastructure expansion.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                Members stay informed about projects that improve accessibility
                                for industries and contribute to regional development.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <FaBuilding className="text-sky-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Business Growth Support
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IIBA provides guidance and support to businesses at different
                                stages of development. Whether a company is newly established
                                or already operational, members gain access to valuable insights
                                that help them grow sustainably.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                The association promotes collaboration and encourages innovation
                                within industries.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <FaGavel className="text-sky-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Policy Awareness
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                Understanding government regulations and policies is essential
                                for long-term business success. IIBA keeps its members updated
                                with the latest developments in policies, regulations, and
                                compliance requirements.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                This awareness helps businesses make informed decisions and stay
                                aligned with national industrial guidelines.
                            </p>
                        </div>

                        {/* Benefit 5 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <FaNetworkWired className="text-sky-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Multi-State Business Network
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IIBA operates across several states including Uttar Pradesh,
                                Uttarakhand, and Haryana, enabling members to connect with
                                industries beyond their local markets.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                This network encourages partnerships, resource sharing, and
                                expansion opportunities for businesses.
                            </p>
                        </div>

                        {/* Benefit 6 */}
                        <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition">
                            <FaChalkboardTeacher className="text-sky-600 text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-3">
                                Seminars & Industry Events
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                IIBA regularly organizes seminars, conferences, and meetings
                                that allow professionals to share knowledge and discuss
                                emerging industry trends.
                            </p>

                            <p className="text-gray-600 leading-relaxed mt-3">
                                These events provide valuable opportunities for networking and
                                collaboration among industry leaders.
                            </p>
                        </div>

                    </div>

                    {/* Verified Membership Section */}
                    <div className="mt-20 bg-white rounded-xl shadow-md p-10">

                        <h2 className="text-3xl font-bold mb-6 text-gray-900">
                            Verified Membership System
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            IIBA maintains a transparent and structured membership system
                            where each application is reviewed through a verification process
                            conducted by authorized administrators.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            This ensures that every member within the association maintains
                            credibility and professionalism. Verified membership strengthens
                            trust within the network and helps businesses collaborate with
                            reliable partners.
                        </p>

                        <ul className="space-y-3 mt-6">
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-sky-600" />
                                Authentic and verified industry network
                            </li>

                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-sky-600" />
                                Transparent membership approval process
                            </li>

                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-sky-600" />
                                Trusted collaboration opportunities
                            </li>
                        </ul>

                    </div>

                    {/* Experience Section */}
                    <div className="mt-20 bg-sky-900 text-white rounded-xl p-12 text-center">

                        <h2 className="text-3xl font-bold mb-6">
                            Over 20+ Years of Industry Experience
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                            With more than two decades of experience in supporting industries
                            and business development initiatives, IIBA has built strong
                            relationships with entrepreneurs, government bodies, and industry
                            leaders. The organization continues to work toward strengthening
                            India's industrial ecosystem by promoting collaboration,
                            innovation, and sustainable economic development.
                        </p>

                    </div>

                    {/* CTA */}
                    <div className="text-center mt-20">

                        <h2 className="text-3xl font-bold mb-6">
                            Become a Member of IIBA
                        </h2>

                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join the IIBA network today and become part of a professional
                            community dedicated to industrial growth, collaboration,
                            and innovation across India.
                        </p>

                        <a
                            href="/membership"
                            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                        >
                            Apply for Membership
                        </a>

                    </div>

                </div>

            </div>
        </>


    );
};

export default MembershipBenefits;
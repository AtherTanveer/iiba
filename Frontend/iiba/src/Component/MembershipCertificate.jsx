import React from "react";
import { Helmet } from "react-helmet";

const MembershipCertificate = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <Helmet>
                <title>IIBA Membership Certificate | Indian Industries & Business Association</title>

                <meta
                    name="description"
                    content="Get the official IIBA Membership Certificate from the Indian Industrial & Business Association. Recognizing businesses and professionals contributing to industrial development, infrastructure growth, and business excellence."
                />

                <meta
                    name="keywords"
                    content="IIBA certificate, IIBA membership certificate, Indian Industrial Business Association certificate, IIBA member recognition, business association certificate India"
                />

                <link
                    rel="canonical"
                    href="https://www.iibaorg.com/iiba-certificate"
                />
            </Helmet>

            {/* Hero Section */}
            <div className="text-center mb-14">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    IIBA Membership Certificate
                </h1>

                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    The Membership Certificate issued by the Indian Industrial & Business
                    Association (IIBA) represents recognition, credibility, and official
                    affiliation with a trusted industrial organization dedicated to
                    supporting business growth and development across India.
                </p>
            </div>


            {/* Certificate Preview */}
            <div className="bg-white border rounded-xl shadow-md p-10 mb-16">

                <h2 className="text-2xl font-semibold text-center mb-6">
                    Certificate of Membership
                </h2>

                <div className="text-center text-gray-700 leading-relaxed space-y-4">

                    <p>This is to certify that</p>

                    <p className="text-xl font-semibold">Your Name</p>

                    <p>From</p>

                    <p className="font-medium">(Company Name)</p>

                    <p className="max-w-3xl mx-auto">
                        is hereby certified as an esteemed member of the
                        <strong> Indian Industrial & Business Association (IIBA)</strong>,
                        in recognition of their active participation and valuable
                        contribution towards industrial development, business excellence,
                        and infrastructure growth.
                    </p>

                </div>

                <div className="flex justify-between mt-10 text-sm text-gray-600">
                    <p>Date: 29/03/2026</p>
                    <p>Authorized Signatory – IIBA Organization</p>
                </div>

            </div>


            {/* Info Sections */}

            <div className="grid md:grid-cols-2 gap-10">

                <div>
                    <h3 className="text-xl font-semibold mb-3">
                        Official Recognition
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        The IIBA Membership Certificate is awarded to verified members who
                        successfully complete the membership approval process. It confirms
                        the official association of a business or individual with the
                        Indian Industrial & Business Association and reflects their
                        participation in the organization’s mission to support industries
                        and entrepreneurs.
                    </p>
                </div>


                <div>
                    <h3 className="text-xl font-semibold mb-3">
                        Professional Credibility
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        Displaying the IIBA Membership Certificate demonstrates credibility
                        and trust. Businesses can showcase the certificate within offices,
                        company profiles, and websites to highlight their association with
                        a respected industrial network.
                    </p>
                </div>


                <div>
                    <h3 className="text-xl font-semibold mb-3">
                        Multi-State Network
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        IIBA operates across multiple regions including Uttar Pradesh,
                        Uttarakhand, and Haryana. Members who receive the certificate
                        become part of a broader network of professionals, industries, and
                        entrepreneurs working together for economic development.
                    </p>
                </div>


                <div>
                    <h3 className="text-xl font-semibold mb-3">
                        Commitment to Growth
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        The certificate symbolizes a commitment to industrial development,
                        business excellence, and infrastructure growth. Members contribute
                        to initiatives that strengthen industry collaboration and promote
                        sustainable economic progress.
                    </p>
                </div>

            </div>


            {/* Bottom Section */}
            <div className="mt-16 text-center">

                <h3 className="text-2xl font-semibold mb-4">
                    Become an IIBA Member
                </h3>

                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                    Join the Indian Industrial & Business Association and become part of
                    a professional network dedicated to strengthening industries,
                    supporting entrepreneurs, and promoting economic growth across
                    multiple states in India.
                </p>

                <a
                    href="/membership"
                    className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
                >
                    Apply for Membership
                </a>

            </div>

        </div>
    );
};

export default MembershipCertificate;
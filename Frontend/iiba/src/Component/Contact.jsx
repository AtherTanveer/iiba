import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>IIBA Contact Us | Indian Industries & Business Association</title>

        <meta
          name="description"
          content="Contact the Indian Industries & Business Association (IIBA). Get address, phone number, email and office location."
        />

        <meta
          name="keywords"
          content="IIBA contact, Indian industries association contact, IIBA office address, business association India"
        />
      </Helmet>

      <section className="w-full bg-gradient-to-br from-sky-50 via-white to-sky-100 py-16 px-6 md:px-16">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-950">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Indian Industries & Business Association (IIBA)
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* Address */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-sky-100">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold text-sky-950 mb-2">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                National Office: Mandi Samiti Road,<br />
                Saharanpur-247001, UttarParadesh, India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-sky-100">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold text-sky-950 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+917906856465" className="hover:text-sky-600">
                  +91 7906856465
                 
                </a>
                 <br />
                <a href="tel:+917906856465" className="hover:text-sky-600">
                  +91 9412480207
                 
                </a>
                 <br />
                <a href="tel:+917906856465" className="hover:text-sky-600">
                
                  +91 9058403030

                </a>
                
              </p>
            </div>

            {/* Email */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-sky-100">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-sky-950 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                <a
                  href="mailto:IIBA.association1966@gmail.com"
                  className="hover:text-sky-600"
                >
                  IIBA.association1966@gmail.com
                </a>
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-sky-100">
              <div className="text-3xl mb-4">🕒</div>
              <h3 className="font-semibold text-sky-950 mb-2">Working Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Sat <br />
                10:00 AM - 6:00 PM
              </p>
            </div>

          </div>

          {/* RIGHT SIDE MAP */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sky-200">

            <iframe
              title="IIBA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.9999957205937!2d77.53141083840016!3d29.979430122376296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea5fcb445f35%3A0x8ef8187f54d35893!2sMandi%20Samiti%20Rd%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1775066952290!5m2!1sen!2sin"
              className="w-full h-[300px] md:h-[450px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-sm font-medium text-sky-950">
              Our Office Location
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;
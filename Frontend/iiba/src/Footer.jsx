import React from "react";
import { Link } from "react-router-dom";
import IIBA_LOGO from "./assets/IIBA_logo1.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="bg-sky-950 text-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={IIBA_LOGO} alt="IIBA Logo" className="w-12" />
              <h2 className="text-xl font-semibold">IIBA</h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering industries, supporting MSMEs, and strengthening 
              business networks across India since 1985.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-sky-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/membership" className="hover:text-white transition">Membership</Link></li>
              <li><Link to="/mission" className="hover:text-white transition">Mission</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-sky-800 pb-2">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <IoLocationSharp /> India
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9876543210
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> info@iibaindia.org
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-sky-800 pb-2">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-3">
              <a href="#" className="bg-sky-800 p-3 rounded-full hover:bg-sky-700 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-sky-800 p-3 rounded-full hover:bg-sky-700 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-sky-800 p-3 rounded-full hover:bg-sky-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-sky-800 mt-10 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} IIBA. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

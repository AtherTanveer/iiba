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
           <p className="text-sm text-gray-300 leading-relaxed ">
  Empowering industries, supporting MSMEs, and strengthening business networks across India since 1999. <br />
  IIBA Bharat – Registered Semi-Government Business & Industry Association, India
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
              <li><Link to="/Members" className="hover:text-white transition">Members</Link></li>
              <li><Link to="/AboutIIBA" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/contactpage" className="hover:text-white transition">Contact</Link></li>
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
                <FaPhoneAlt /> +91 9412480207
              </li>
               <li className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9058403030
              </li>
              <li className="flex items-center gap-2">
                <MdEmail /> msranagroup07@gmail.com
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
  <p>© {new Date().getFullYear()} IIBA. All Rights Reserved.</p>

  <p className="mt-1">
    Designed & Developed by 
    <span className="text-sky-400 font-medium"> Ather Tanveer</span>
  </p>

  <p className="mt-1">
    📞 <a href="tel:+919027567822" className="hover:text-white">
      +91 9027567822
    </a>
    {" | "}
    ✉️ <a href="mailto:athertanveer6@gmail.com" className="hover:text-white">
      athertanveer6@gmail.com
    </a>
  </p>
</div>
      </footer>
    </>
  );
};

export default Footer;

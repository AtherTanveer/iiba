import React, { useState } from "react";
import IIBA_LOGO from "./assets/IIBA_logo1.png";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-sky-950 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to={"/"}>
              <img src={IIBA_LOGO} alt="IIBA Logo" className="w-10 md:w-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-lg items-center">

            <li>
              <Link to="/" className="hover:text-sky-300 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/WorkSection" className="hover:text-sky-300 transition">
                Our Work
              </Link>
            </li>

            <li>
              <Link to="/Members" className="hover:text-sky-300 transition">
                Members
              </Link>
            </li>

            {/* Membership Dropdown */}
            <li className="relative group">

              <button className="flex items-center gap-1 hover:text-sky-300 transition">
                Membership
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul className="absolute left-0 top-full mt-2 w-60 bg-white text-gray-700 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <li>
                  <Link
                    to="/membership"
                    className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-700 transition"
                  >
                    Become Member
                  </Link>
                </li>

                <li>
                  <Link
                    to="/membership-benefits"
                    className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-700 transition"
                  >
                    Membership Benefits
                  </Link>
                </li>

                <li>
                  <Link
                    to="/iiba-certificate"
                    className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-700 transition"
                  >
                    Membership Certificate
                  </Link>
                </li>

              </ul>

            </li>

            <li>
              <Link to="/AboutIIBA" className="hover:text-sky-300 transition">
                About
              </Link>
            </li>

            {/* News & Events Dropdown */}
            <li className="relative group">

              <button className="flex items-center gap-1 hover:text-sky-300 transition">
                News & Events
                <svg
                  className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <ul className="absolute left-0 top-full mt-2 w-60 bg-white text-gray-700 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <li>
                  <Link
                    to="/News"
                    className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-700 transition"
                  >
                    IIBA News
                  </Link>
                </li>

                <li>
                  <Link
                    to="/business-news"
                    className="block px-5 py-3 hover:bg-sky-50 hover:text-sky-700 transition"
                  >
                    Business News
                  </Link>
                </li>

              </ul>

            </li>

            <li>
              <Link to="/HelpPage" className="hover:text-sky-300 transition">
                Help
              </Link>
            </li>

          </ul>

          {/* Contact (Desktop Only) */}
          <div className="hidden md:block">
            <Link
              to="/contactpage"
              className="bg-white text-sky-950 px-4 py-2 rounded-lg font-medium hover:bg-sky-200 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl cursor-pointer">
            {menuOpen ? (
              <FiX onClick={() => setMenuOpen(false)} />
            ) : (
              <FiAlignJustify onClick={() => setMenuOpen(true)} />
            )}
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-sky-900 px-6 py-5 space-y-3 text-lg font-medium shadow-lg">

            <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Home
            </Link>

            <Link to="/WorkSection" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Our Work
            </Link>

            <Link to="/membership" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Become Member
            </Link>

            <Link to="/membership-benefits" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Membership Benefits
            </Link>

            <Link to="/iiba-certificate" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Membership Certificate
            </Link>

            <Link to="/Members" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Members
            </Link>

            <Link to="/AboutIIBA" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              About
            </Link>

            <Link to="/News" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              News
            </Link>

            <Link to="/business-news" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Business News
            </Link>

            <Link to="/HelpPage" onClick={() => setMenuOpen(false)} className="block py-2 border-b border-sky-700 hover:text-sky-300 transition">
              Help
            </Link>

            <Link
              to="/contactpage"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 bg-white text-sky-900 px-4 py-2 rounded-lg hover:bg-sky-200 transition mt-2"
            >
              Contact Us <IoIosCall className="text-xl" />
            </Link>

          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;
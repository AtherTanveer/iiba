import React, { useState } from "react";
import IIBA_LOGO from "./assets/IIBA_logo1.png";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-sky-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to={"/"}>
            <img src={IIBA_LOGO} alt="IIBA Logo" className="w-10 md:w-12" />
            </Link>
            
            
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-lg">
            <li><Link to="/" className="hover:text-sky-300 transition">Home</Link></li>
             <li><Link to="/WorkSection" className="hover:text-sky-300 transition">Our Work</Link></li>
             <li><Link to="/Members" className="hover:text-sky-300 transition">Members</Link></li>
            <li><Link to="/membership" className="hover:text-sky-300 transition">Membership</Link></li>
           
            <li><Link to="/AboutIIBA" className="hover:text-sky-300 transition">About</Link></li>
            <li><Link to="/News" className="hover:text-sky-300 transition">News & Events</Link></li>
            <li><Link to="/HelpPage" className="hover:text-sky-300 transition">Help</Link></li>
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
          <div className="md:hidden bg-sky-900 px-6 py-4 space-y-4 text-lg font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>
              <Link to="/WorkSection" onClick={() => setMenuOpen(false)} className="block">Our Work</Link>
            <Link to="/membership" onClick={() => setMenuOpen(false)} className="block">Membership</Link>
            <Link to="/Members" onClick={() => setMenuOpen(false)} className="block">Member</Link>
            <Link to="/AboutIIBA" onClick={() => setMenuOpen(false)} className="block">About</Link>
            <Link to="/News" onClick={() => setMenuOpen(false)} className="block">News</Link>
            <Link to="/HelpPage" onClick={() => setMenuOpen(false)} className="block">Help</Link>
            <Link
              to="/contactpage"
              onClick={() => setMenuOpen(false)}
              className="block text-white rounded-lg flex"
            >
              Contact Us <h1 className="text-2xl ps-2"><IoIosCall /></h1>
            </Link>
            
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

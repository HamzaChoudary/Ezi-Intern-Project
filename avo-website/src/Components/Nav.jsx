import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";


// Pages
import Home from "./Hero.jsx";
import About from "./about.jsx";
import Work from "./work.jsx";
import Blog from "./blog.jsx";
import Contact from "./contact.jsx";

// Icons
import { FaBars, FaTimes } from "react-icons/fa";

const NavContent = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // Navbar background on scroll
  const [activeMenu, setActiveMenu] = useState("/"); // Active menu item

  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Update active menu based on route
  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  // Navbar links with active state styling
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <div
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white text-black shadow-lg" : "bg-transparent text-white"
        }`}
      >
        <div className="flex justify-between  text-xl items-center text-center px-4 lg:px-8 py-3 mt-6">
          {/* Logo Section */}
          <div className="cursor-pointer px-56 ">
            <h1 className="font-bold text-3xl leading-relaxed tracking-wider">
              a<span className="text-red-700 font-semibold">v</span>o
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-10 px-72">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`cursor-pointer transition-colors duration-300 font-semibold text-gray-500 ${
                  activeMenu === link.path ? "text-red-700" : "hover:text-red-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col items-center bg-gray-50 text-gray-800 py-6 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center py-2 transition-colors duration-300 ${
                  activeMenu === link.path ? "text-red-700" : "hover:text-red-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
  </div>
  );
};

const Nav = () => (
  <Router>
    <NavContent />
    <div className="mt-screen"> {/* Pushes content below the hero section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

export default Nav;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Hero';
import Hotel from './Hotel';
import About from './About';
import Gallery from './Gallery';
import News from '../News/News';
import Contact from './Contact';

// add Animation 
import {motion } from 'framer-motion';

// Icons
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [Active, SetActive] = useState(false);

  // Function for toggling Menu
  const NavBarMenu = () => {
    SetActive((prev) => !prev);
  };

  return (
    <Router>
      <motion.div  initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}
       className="relative">
        {/* Nav Head */}
        <div className="flex justify-between w-full absolute top-0 left-0 font-extrabold mt-16 px-3 py-5 z-30">
          <h1 className="text-4xl text-white">Hepta</h1>
          <button onClick={NavBarMenu}>
            {Active ? (
              <IoMdClose className="text-6xl text-black z-40" />
            ) : (
              <IoReorderThreeOutline className="text-6xl text-white" />
            )}
          </button>
        </div>

        {/* Fullscreen Overlay for Menu */}
        {Active && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex justify-items-center justify-center ">
            {/* Menu */}
            <div className="bg-white md:w-screen lg:w-screen rounded-lg shadow-xl py-8 h-screen w-screen z-40">
              <ul className="list-none space-y-10 text-black text-4xl font-extrabold font-sans leading-relaxed pt-32 text-center">
                <li className="text-gray-700 hover:text-blue-500">
                  <Link to="/" onClick={NavBarMenu}>Home</Link>
                </li>
                <li className="text-gray-700 hover:text-blue-500">
                  <Link to="/hotel" onClick={NavBarMenu}>Hotel</Link>
                </li>
                <li className="text-gray-700 hover:text-blue-500">
                  <Link to="/about" onClick={NavBarMenu}>About Us</Link>
                </li>
                <li className="text-gray-700 hover:text-blue-500">
                  <Link to="/gallery" onClick={NavBarMenu}>Gallery</Link>
                </li>
                <li className="text-gray-700 hover:text-blue-500">
                  <Link to="/news" onClick={NavBarMenu}>News</Link>
                </li>
                <li className="text-gray-700 hover:text-blue-500">
                  <Link to="/contact" onClick={NavBarMenu}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </Router>
  );
};

export default Nav;

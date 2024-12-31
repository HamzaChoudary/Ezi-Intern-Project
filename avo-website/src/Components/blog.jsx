import React from 'react';
import { motion } from 'framer-motion';

// Images
import Bigpicture2 from './assets/bg_2.jpg';
import Image1 from './assets/image_1.jpg';
import Image2 from './assets/image_2.jpg';
import Image3 from './assets/image_3.jpg';
import Image4 from './assets/image_4.jpg';
import Image5 from './assets/image_5.jpg';
import Image6 from './assets/image_6.jpg';
import Image7 from './assets/image_7.jpg';
import Image8 from './assets/image_8.jpg';

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Blog = () => {
  return (
    <div id="blog">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute top-0 w-full h-full"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 65% 100%, 0% 90%)",
            backgroundImage: `url(${Bigpicture2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute w-full h-full flex flex-col items-start justify-end text-white text-start px-8 sm:px-16 md:px-32 lg:px-48 xl:px-64 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
          <ul className="flex justify-center text-sm sm:text-lg md:text-2xl">
            <li className="flex items-center pr-2 sm:pr-4 cursor-pointer hover:text-red-700">
              <a href="#Home">Home</a>
              <IoIosArrowForward className="text-red-700 font-bold" />
            </li>
            <li className="flex items-center">
              <a href="#about">BLOG</a>
              <IoIosArrowForward className="text-red-700 font-bold" />
            </li>
          </ul>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold pt-3 sm:pt-5 leading-relaxed tracking-wide">
            BLOG
          </h1>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="w-full bg-gray-100 text-gray-800 py-20 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8].map((image, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <a
                  href="#"
                  className="text-lg sm:text-xl md:text-2xl hover:text-red-700 font-semibold mb-4 block cursor-pointer"
                >
                  Amplify your blockchain team
                </a>
                <div className="mt-4">
                  <img
                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover mb-1 cursor-pointer"
                    src={image}
                    alt="Blog"
                  />
                </div>
                <div className="flex flex-row justify-start mb-4">
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed tracking-widest cursor-pointer">
                    June 01, 2020 ADMIN &#100011;3
                  </p>
                </div>
                <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-row justify-center items-center mt-12 sm:mt-16">
        <ul className="flex flex-row justify-center items-center space-x-2 md:space-x-4">
          <li className="border border-red-600 p-2 sm:p-3 md:p-4 bg-white hover:bg-red-700 hover:text-white rounded-full">
            <MdKeyboardArrowLeft />
          </li>
          {[1, 2, 3, 4, 5].map((page) => (
            <li
              key={page}
              className={`border border-red-600 p-2 sm:p-3 md:p-4 ${
                page === 1 ? "bg-red-700 text-white" : "bg-white"
              } hover:bg-red-700 hover:text-white rounded-full`}
            >
              <a href="#">{`0${page}`}</a>
            </li>
          ))}
          <li className="border border-red-600 p-2 sm:p-3 md:p-4 bg-white hover:bg-red-700 hover:text-white rounded-full">
            <MdKeyboardArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;

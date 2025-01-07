import React from "react";
import { motion } from "framer-motion";

// Import assets
import Work1 from "./assets/work-1.jpg";
import Work2 from "./assets/work-2.jpg";
import Work3 from "./assets/work-3.jpg";
import Work4 from "./assets/work-4.jpg";
import Work5 from "./assets/work-5.jpg";
import Work6 from "./assets/work-6.jpg";
import Person1 from "./assets/person_1.jpg";
import Person2 from "./assets/person_2.jpg";
import Person3 from "./assets/person_3.jpg";
import Bigpicture2 from "./assets/bg_2.jpg";

// Icons
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Works = () => {
  const workItems = [
    { image: Work1, title: "Web Design", project: "Cassette tape", person: Person1, name: "Jamie Jonson", website: "avo.com" },
    { image: Work2, title: "Application", project: "Miniwall Clock", person: Person2, name: "Jamie Jonson", website: "avo.com" },
    { image: Work3, title: "UI/UX Design", project: "Avo Portfolio Agency", person: Person3, name: "Jamie Jonson", website: "avo.com" },
    { image: Work4, title: "Web Development", project: "Hand Writing", person: Person1, name: "Jamie Jonson", website: "avo.com" },
    { image: Work5, title: "Illustration", project: "Keyboard", person: Person2, name: "Jamie Jonson", website: "avo.com" },
    { image: Work6, title: "Web Development", project: "Spiral", person: Person3, name: "Jamie Jonson", website: "avo.com" },
  ];

  return (
    <div>
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
        <div className="absolute w-full h-full flex flex-col items-start justify-end text-white px-6 sm:px-16 md:px-32 lg:px-64 pb-12 sm:pb-16 md:pb-32">
          <ul className="flex justify-center text-sm sm:text-lg md:text-2xl">
            <li className="flex items-center pr-2 sm:pr-4 cursor-pointer hover:text-red-700">
              <a href="#Home">Home</a>
              <IoIosArrowForward className="text-red-700 font-bold" />
            </li>
            <li className="flex items-center">
              <a href="#about">WORK</a>
              <IoIosArrowForward className="text-red-700 font-bold" />
            </li>
          </ul>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold pt-3 sm:pt-5 leading-relaxed tracking-wide">
            WORK
          </h1>
        </div>
      </div>

      {/* Works Section */}
      <div className="relative w-full flex justify-center mt-20 sm:mt-40">
        <div className="relative z-10 text-white flex flex-col items-center w-11/12 sm:w-10/12 mt-20 sm:mt-52 mb-20 sm:mb-60">
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-gray-500 text-center tracking-wider leading-relaxed mb-8 sm:mb-16"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            OUR WORKS
          </motion.h1>

          <div className="grid grid-cols-1 gap-y-16 sm:gap-y-20 gap-x-0 sm:gap-x-8 w-full">
            {workItems.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row items-center ${i % 2 !== 0 ? "sm:flex-row-reverse text-end" : ""}`}
                style={{ marginTop: i === 0 ? "0" : "-200px" }}
              >
                <img
                  className='h-64 sm:h-80 md:h-[100vh] w-full sm:w-2/5 object-cover rounded-md shadow-lg'
                  src={item.image}
                  alt={item.project}
                />
                <motion.div
                  className="flex flex-col justify-center mt-6 sm:mt-0 px-6 sm:px-12"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className="text-gray-800 text-lg sm:text-xl font-semibold">{item.title}</h2>
                  <h1 className="text-xl sm:text-3xl md:text-5xl text-gray-800 leading-relaxed tracking-widest mb-2 sm:mb-4">
                    {item.project}
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base md:text-xl mb-4 sm:mb-6 pr-2 sm:pr-14">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts.
                  </p>
                  <div className={`flex items-center space-x-4 ${i % 2 !== 0 ? "justify-end" : "justify-start"}`}>
                    <img
                      className="h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-full"
                      src={item.person}
                      alt={item.name}
                    />
                    <div>
                      <h1 className="text-base sm:text-lg md:text-xl text-gray-800">{item.name}</h1>
                      <p className="text-gray-500 text-sm sm:text-base">{item.website}</p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`bg-gray-100 text-gray-800 px-4 sm:px-6 py-2 rounded-md mt-4 sm:mt-6 shadow w-full sm:w-2/6 border border-gray-400 font-bold tracking-widest`}
                  >
                    VIEW PORTFOLIO
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 sm:mt-24">
        <ul className="flex items-center space-x-2 sm:space-x-4">
          <li className="border border-red-600 p-2 sm:p-3 bg-white hover:bg-red-700 hover:text-white rounded-full">
            <MdKeyboardArrowLeft />
          </li>
          {[1, 2, 3, 4, 5].map((page) => (
            <li
              key={page}
              className={`border border-red-600 p-2 sm:p-3 ${
                page === 1 ? "bg-red-700 text-white" : "bg-white"
              } hover:bg-red-700 hover:text-white rounded-full`}
            >
              <a href="#">{`0${page}`}</a>
            </li>
          ))}
          <li className="border border-red-600 p-2 sm:p-3 bg-white hover:bg-red-700 hover:text-white rounded-full">
            <MdKeyboardArrowRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Works;

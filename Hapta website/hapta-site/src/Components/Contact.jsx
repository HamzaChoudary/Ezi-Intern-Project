import React from 'react';

// Images
import Slide3 from '../Assets/slider-3.jpg.webp';
// Customer review
import Cimage1 from '../Assets/person_1.jpg.webp';
import Cimage2 from '../Assets/person_2.jpg.webp';
import Cimage3 from '../Assets/person_3.jpg.webp';

// add animation 
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>
      {/* 1st section for add content */}
      <section>
        <div className="relative w-full h-screen">
          <img
            src={Slide3}
            alt="Hotel Background"
            className="absolute inset-0 w-full h-5/6 object-cover z-0"
          />
        </div>

        {/* Overlay text and content on top of the image */}
        <div className="absolute inset-0 flex flex-col justify-start items-center mt-72 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold font-serif text-white">
            Contact
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-sans tracking-widest leading-relaxed text-white mt-6 md:mt-8 lg:mt-12">
            A free template by <span>Colorlib.</span> Download and share!
          </h2>
        </div>
      </section>

      {/* 2nd Section for Contact Form and Address */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4 md:py-20 md:px-12 lg:px-32">
        {/* Contact Form */}
        <form
          action=""
          className="bg-white flex flex-col shadow-lg px-6 py-10 md:px-10 md:py-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="Name"
                id="Name"
                className="text-lg md:text-xl font-semibold text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="Name"
                className="p-4 border-2 border-gray-300 focus:border-teal-500 rounded outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="Phone"
                id="Phone"
                className="text-lg md:text-xl font-semibold text-gray-600"
              >
                Phone
              </label>
              <input
                type="text"
                id="Phone"
                className="p-4 border-2 border-gray-300 focus:border-teal-500 rounded outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="Email"
              id="Email"
              className="text-lg md:text-xl font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="p-4 border-2 border-gray-300 focus:border-teal-500 rounded outline-none"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="message"
              id="message"
              className="text-lg md:text-xl font-semibold text-gray-600"
            >
              Write Message
            </label>
            <textarea
              name="message"
              id="message"
              maxLength={1000}
              minLength={500}
              className="border-2 border-gray-300 focus:border-teal-500 rounded outline-none h-40 md:h-72"
            />
          </div>
          <div className="flex justify-start mt-4">
            <button
              type="submit"
              className="text-lg md:text-xl px-6 py-3 border-4 border-gray-300 focus:border-teal-500 rounded hover:bg-teal-500 hover:text-white transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Address Info */}
        <aside className="text-lg md:text-xl">
          <h1 className="text-xl md:text-2xl font-bold text-teal-500 my-2">
            Address:
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold font-serif mb-16">
            98 West 21th Street, Suite 721 New York NY 10016
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-teal-500 my-2">
            Phone:
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold font-serif mb-16">
            +9212 3456789
          </p>
          <h1 className="text-xl md:text-2xl font-bold text-teal-500 my-2">
            Email:
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold font-serif">
            info@yourdomain.com
          </p>
        </aside>
      </section>

      {/* 4th section for Customer Reviews */}
      <section className="bg-gray-100 py-16 md:py-32">
        <div className="flex justify-center items-center py-8 md:py-16">
          <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="font-extrabold text-4xl md:text-6xl lg:text-7xl font-serif">
            Happy Customers
          </motion.h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12 lg:px-32">
          {/* Review One */}
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-start">
            <img
              src={Cimage1}
              alt="Customer Image"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-4"
            />
            <p className="text-gray-800 text-lg md:text-2xl leading-relaxed">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <h1 className="text-gray-400 text-base md:text-xl mt-2">
              — Clare Gupta
            </h1>
          </motion.div>
          {/* Review Two */}
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-start">
            <img
              src={Cimage2}
              alt="Customer Image"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-4"
            />
            <p className="text-gray-800 text-lg md:text-2xl leading-relaxed">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <h1 className="text-gray-400 text-base md:text-xl mt-2">
              — Rogie Slater
            </h1>
          </motion.div>
          {/* Review Three */}
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-start">
            <img
              src={Cimage3}
              alt="Customer Image"
              className="w-20 h-20 md:w-28 md:h-28 rounded-full mb-4"
            />
            <p className="text-gray-800 text-lg md:text-2xl leading-relaxed">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
            <h1 className="text-gray-400 text-base md:text-xl mt-2">
              — John Doe
            </h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

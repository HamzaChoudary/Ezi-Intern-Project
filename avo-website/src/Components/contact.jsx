import React from 'react';

// icons 
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";

// Images 
import Bigpicture2 from './assets/bg_2.jpg';

const Contact = () => {
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
        <div className="absolute w-full h-full flex flex-col items-start justify-end text-white text-start px-8 md:px-16 lg:px-32 pb-12 md:pb-32">
          <ul className='flex text-base md:text-xl'>
            <li className='flex items-center pr-4 cursor-pointer hover:text-red-700 '>
              <a href="#Home">Home</a>
              <IoIosArrowForward className='text-red-700 font-bold ml-2' />
            </li>
            <li className='flex items-center'>
              <a href="#about">CONTACT</a>
              <IoIosArrowForward className='text-red-700 font-bold ml-2' />
            </li>
          </ul>
          <h1 className='text-4xl md:text-6xl font-extrabold pt-4 leading-relaxed tracking-wide'>CONTACT</h1>
        </div>
      </div>

      {/* Content Section */}
      <motion.div 
      
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='text-center mt-16 md:mt-32 px-4  '>
        <h1 className='text-red-600 text-xl md:text-2xl'>Contact US</h1>
        <h3 className='text-3xl md:text-6xl font-bold mt-4'>Have a Project?</h3>
        <p className='text-gray-500 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mt-6'>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
      </motion.div>

      {/* Contact Form and Address Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-4 md:px-8 lg:px-16 xl:px-32 mt-10">
        {/* Contact Form */}
        <form className="bg-gray-200 flex flex-col shadow-lg px-6 py-8 md:px-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder='Your Name'
              className="p-4 border-2 border-gray-300 focus:border-teal-500 rounded outline-none"
            />
            <input
              type="email"
              placeholder='Email'
              className="p-4 border-2 border-gray-300 focus:border-teal-500 rounded outline-none"
            />
          </div>
          <input
            type="text"
            placeholder='Subject'
            className="p-4 border-2 border-gray-300 focus:border-teal-500 rounded outline-none mt-4"
          />
          <textarea
            placeholder='Message'
            maxLength={1000}
            className="border-2 border-gray-300 focus:border-teal-500 rounded outline-none h-40 md:h-72 mt-4"
          />
          <button
            type="submit"
            className="text-lg md:text-xl px-6 py-3 bg-red-700 text-white rounded hover:bg-red-800 mt-4"
          >
            Send Message
          </button>
        </form>

        {/* Address Info */}
        <motion.aside         
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-base md:text-lg lg:text-xl ml-16 space-y-16">
          {[
            { icon: IoLocationSharp, label: "Address", value:  '198 West 21th Street, Suite 721 New York NY 10016' },
            { icon: FaPhone, label: "Phone", value: "+9212 3456789" },
            { icon: MdOutlineMailOutline, label: "Email", value: "info@yourdomain.com" },
            { icon: HiGlobeAsiaAustralia, label: "Website", value: "yoursite.com" },
          ].map(({ icon: Icon, label, value }, index) => (
            <div key={index} className="flex items-start mb-10">
              <div className="text-white bg-red-700 p-4 rounded-full flex items-center justify-center mr-4">
                <Icon className="text-2xl" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">{label}:</h1>
                <p className="text-red-600 mt-8">{value}</p>
              </div>
            </div>
          ))}
        </motion.aside>
      </section>
    </div>
  );
};

export default Contact;

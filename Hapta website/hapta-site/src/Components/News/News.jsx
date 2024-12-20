import React from 'react';
// Images
import Slide1 from '../Assets/slider-1.jpg.webp';
import Slide2 from '../Assets/slider-2.jpg.webp';
import Slide3 from '../Assets/slider-3.jpg.webp';
// import Slide4 from '../Assets/slider-4.jpg.webp';
import Slide5 from '../Assets/slider-5.jpg.webp';
import Slide6 from '../Assets/slider-6.jpg.webp';

// Icons 
import { VscSearch } from 'react-icons/vsc';

// Add Animation 
import {motion} from 'framer-motion';

const News = () => {
  return (
    <div id='News' className='bg-gray-50'>
      {/* 1st section for header content */}
      <section>
        <div className="relative w-full h-screen">
          <img
            src={Slide2}
            alt="Hotel Background"
            className="absolute inset-0 w-full h-5/6 object-cover z-0"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
            <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
             className="text-6xl md:text-8xl font-extrabold text-white">Blog</motion.h1>
            <motion.h2 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-xl md:text-3xl font-sans tracking-widest leading-relaxed text-white mt-6">
              A free template by <span className="text-gray-400">Colorlib.</span> Download and share!
            </motion.h2>
          </div>
        </div>
      </section>

      {/* 2nd Section for content */}
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-8 mx-4 md:mx-16 lg:mx-32  py-10">
         {/* Right Side */}
         <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10 ">
          {[Slide5, Slide6, Slide6, Slide5, Slide5, Slide6].map((slide, index) => (
            <div key={index} className="bg-white shadow-lg">
              <img src={slide} alt={`Slide ${index}`} className="w-full object-cover" />
              <div className="p-6">
                <h4 className="text-gray-300 text-sm mb-2">February 26, 2018</h4>
                <h1 className="text-2xl font-serif font-bold">Free Template by Colorlib</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg mb-8">
            <div className="relative p-6">
              <i className="absolute right-9 top-10 text-2xl">
                <VscSearch />
              </i>
              <input
                type="search"
                placeholder="Search"
                className="w-full p-4 border border-gray-300 outline-none"
              />
            </div>
          </div>
          {/* For Popular Post  */}
         <div className='bg-white shadow-lg shadow-black-50 mb-4'>
          <h1 className='text-2xl font-serif p-4 ' >Popular Post</h1>
          <div className='flex justify-start items-center text-start bg-white shadow-lg shadow-black-50'>
                <img 
                src={Slide5} 
                alt="Customer Image"
                className=' w-36 h-24 object-cover px-4' />
                <div className="mt-3 text-xl pb-4">
                <h4 className='text-gray-300 p-1'>February 26, 2018</h4>              
                <h1 className='text-xl font-extrabold font-serif'>Free Template by Colorlib</h1>
                </div>
        </div>       
          <div className='flex justify-start items-center text-start bg-white shadow-lg shadow-black-50'>
                <img 
                src={Slide6} 
                alt="Customer Image"
                className=' w-36 h-24 object-cover px-4' />
                <div className="mt-3 text-xl pb-4">
                <h4 className='text-gray-300 p-1'>February 26, 2018</h4>              
                <h1 className='text-xl font-extrabold font-serif'>Free Template by Colorlib</h1>
                </div>
        </div>       
          <div className='flex justify-start items-center text-start bg-white shadow-lg shadow-black-50'>
                <img 
                src={Slide5} 
                alt="Customer Image"
                className=' w-36 h-24 object-cover px-4' />
                <div className="mt-3 text-xl pb-4">
                <h4 className='text-gray-300 p-1'>February 26, 2018</h4>              
                <h1 className='text-xl font-extrabold font-serif'>Free Template by Colorlib</h1>
                </div>
        </div>       
          <div className='flex justify-start items-center text-start bg-white shadow-lg shadow-black-50'>
                <img 
                src={Slide6} 
                alt="Customer Image"
                className=' w-36 h-24 object-cover p-3' />
                <div className="mt-3 text-xl pb-4">
                <h4 className='text-gray-300 p-1'>February 26, 2018</h4>              
                <h1 className='text-xl font-extrabold font-serif'>Free Template by Colorlib</h1>
                </div>
        </div>                
          <div className='flex justify-start items-center text-start bg-white shadow-lg shadow-black-50'>
                <img 
                src={Slide3} 
                alt="Customer Image"
                className=' w-36 h-24 object-cover p-3' />
                <div className="mt-3 text-xl pb-4">
                <h4 className='text-gray-300 p-1'>February 26, 2018</h4>              
                <h1 className='text-xl font-extrabold font-serif'>Free Template by Colorlib</h1>
                </div>
        </div>       
         </div>
         {/* Categories  */}
          <div className="bg-white shadow-lg mb-8">
            <h1 className="text-2xl font-serif px-6 py-4">Categories</h1>
            <div className="px-6">
              {[
                { name: 'Events', count: 12 },
                { name: 'Resto bar', count: 4 },
                { name: 'Celebration', count: 23 },
                { name: 'Promos', count: 8 },
              ].map((category, index) => (
                <div key={index} className="flex justify-between py-2 border-b">
                  <a href="#" className="text-teal-500 text-lg">
                    {category.name}
                  </a>
                  <span className="text-gray-500">({category.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center space-x-4 px-36 py-8">
      {/* Page 1 */}
      <a
        href="#"
        className="bg-teal-500 text-white rounded-full w-10 h-10 flex justify-center items-center text-lg hover:bg-teal-600"
      >
        1
      </a>
      {/* Page 2 */}
      <a
        href="#"
        className="w-10 h-10 flex justify-center items-center text-lg text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white"
      >
        2
      </a>
      {/* Page 3 */}
      <a
        href="#"
        className="w-10 h-10 flex justify-center items-center text-lg text-teal-500 border border-teal-500 rounded-full hover:bg-teal-500 hover:text-white"
      >
        3
      </a>
    </div>
    </div>
  );
};

export default News;

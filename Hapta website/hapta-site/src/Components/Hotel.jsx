import React, { useState, useEffect } from 'react';
// Images 
import Slide1 from '../Assets/slider-1.jpg.webp';
import Slide2 from '../Assets/slider-2.jpg.webp';
import Slide3 from '../Assets/slider-3.jpg.webp';
import Slide4 from '../Assets/slider-4.jpg.webp';
import Slide5 from '../Assets/slider-5.jpg.webp';
import Slide6 from '../Assets/slider-6.jpg.webp';
import Mainimg from '../Assets/slider-4.jpg.webp';
import Image1 from '../Assets/img_1.jpg.webp';
import Image2 from '../Assets/img_4.jpg.webp';
import Image3 from '../Assets/img_5.jpg.webp';
// Second part of images 
import Breakfast from '../Assets/001-Breakfast.svg';
import Planet from '../Assets/002-planet-earth.svg';
import Airplane from '../Assets/003-airplane.svg';
import Beach from '../Assets/004-beach.svg';
import Mountain from '../Assets/005-mountains.svg';
import Hotair from '../Assets/006-hot-air-balloon.svg';

// For add animations 
import {motion} from 'framer-motion';

// import { FaSortDown } from "react-icons/fa";
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";

const Hotel = () => {

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];
  const [ CurrentSlide, setcurrentSlide ] = useState(0);

  // Go to next slide function 
  const nextSlide = () => {
      setcurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // For Previuse 
  const prevSlide = () => {
      setcurrentSlide((prev) => (prev -1 + slides.length) % slides.length);
  };

  // Auto Slide Effect 
  useEffect(() => {
      const intervel = setInterval (nextSlide, 2000);
      return  () => clearInterval(intervel);
  }, []);

  return (
    <div>
      <section>
      <div className="relative w-full h-screen">
      <img
        src={Mainimg}
        alt="Hotel Background"
        className="absolute inset-0 w-full h-5/6 object-cover z-0"
      />
      </div>

      {/* Overlay text and content on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-start items-center mt-72 z-10">
        <h1 className="text-8xl font-extrabold text-white">Our Hotel</h1>
        <h2 className="text-3xl font-sans tracking-widest leading-relaxed text-white mt-12">
          A free template by <span className='text-gray-500'>Colorlib.</span> Download and share!
        </h2>
      </div>
      </section>

      {/* Second Section for add content  */}
      <section className="grid grid-rows-2 grid-cols-3 place-items-center gap-y-5 gap-x-5 my-32 mx-28">

            <motion.div className='flex flex-col justify-center items-center gap-y-4 ' 
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Breakfast}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit'/>
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='text-xl leading-relaxed text-gray-600 text-center m-3 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >
                <img 
                src={Planet}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Travel Anywhere
                 </h1>
                 <p className='text-xl leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Airplane}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='text-xl leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4' 
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Beach}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='text-xl leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4' 
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Mountain}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='text-xl leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4'
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Hotair}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='text-xl leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>            
            </section>

        {/* 3rd section for add content  */}
        <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-white ">
      {/* Left Image Section */}
      <div className="md:w-1/2 mb-6 md:mb-0 ">
        <img
          src={Slide1}
          alt="Mountain Landscape"
          className="w-svw h-svh object-cover pl-52 pr-10"
        />
      </div>

      {/* Right Content Section */}
      <motion.div className="md:w-1/2 w-full text-center md:text-left mx-8 space-y-7 pr-20"
      initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl md:text-4xl font-extrabold font-sans text-gray-900 mb-4">
        Family Room
        </h1>
        <p className="text-gray-700 text-2xl mb-4 leading-relaxed pr-40 text-start">
          Far far away, behind the word mountains, far from the Separated they
          live in Bookmarksgrove of the Semantics, a large
          language ocean.
        </p>
        <p className="text-gray-700 text-2xl pr-40 mb-6 ">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <p className='text-xl border-spacing-3 border border-teal-400 px-6 py-2 inline-block hover:bg-teal-400 hover:text-white leading-relaxed mb-4'>
          Learn More
        </p>
      </motion.div>
    </section>

    {/* 4th Section for add content  */}
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-white mb-28">
      {/* Left Content Section */}
      <motion.div className="md:w-1/2 w-full text-end md:text-left mx-8 space-y-7 ml-52 mt-20"
       initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-4xl font-extrabold font-sans text-gray-900 mb-4">
        Presidential Room
        </h1>
        <p className="text-gray-700 text-2xl mb-4 leading-relaxed  pr-40 text-start">
          Far far away, behind the word mountains, far from the Separated they
          live in Bookmarksgrove of the Semantics, a large
          language ocean.
        </p>
        <p className="text-gray-700 text-2xl pr-40 mb-10 ">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <p className='text-xl border-spacing-3 border border-teal-400 px-6 py-2 inline-block hover:bg-teal-400 hover:text-white leading-relaxed'>
          Learn More
        </p>
      </motion.div>    

      {/* right Image Section */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0 ">
        <img
          src={Slide2}
          alt="Mountain Landscape"
          className="w-svw h-svh object-cover pr-52"
        />
      </div>
      </section>

      {/* 5th Section for add Contant with Slide Show  */}
      <section className='bg-gray-100 py-28 '>
        <motion.div className=' flex flex-col justify-center items-center text-center' 
         initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className='font-bold font-serif text-8xl p-5'>Hotel Gallery</h1>
            <p className='w-2/3 text-3xl text-gray-600 p-7'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</p>
        </motion.div>
      {/* Slideshow Section */}
      <motion.div className="relative w-full bg-gray-100"
       initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
      >
      <div className="flex items-center justify-center w-full h-[920px] ">
        {/* Slides */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 px-24 pt-12 ${
              index === CurrentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-12 text-2xl p-2 rounded-full shadow-md z-10 "
        >
          <RiArrowLeftWideFill />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-12 text-2xl p-2 rounded-full shadow-md z-10 "
        >
          <RiArrowRightWideFill />
        </button>
      </div>
    </motion.div>
    </section>

    {/* 6th Section for add Contant  */}
    <section>
           <div className="w-full py-52 px-20 bg-gray-100">
        <div className="relative">
          <div className="text-center mb-8 ">
            <motion.h2  initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
            className="text-7xl font-extrabold text-black">More Hotel Features</motion.h2>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
            className="text-gray-600 mt-6 px-3  text-2xl max-w-4xl mx-auto active:text-white pb-16"
            >
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:px-12 px-24">
            {/* Blog Card 1 */}
            <motion.div className="bg-white shadow-lg overflow-hidden pb-8"
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <img
                src={Image1}
                alt="Blog 1"
                className="w-full h-3/4 object-cover"
              />
              <div className="px-8 pt-5">
                <h3 className="font-extrabold font-serif text-4xl text-gray-800 mt-3 ">
                Five Reasons to Stay at Villa Resort
                </h3>                
              </div>
            </motion.div>
            {/* Blog Card 2 */}
            <motion.div className="bg-white shadow-lg overflow-hidden pb-8"
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <img
                src={Image2}
                alt="Blog 2"
                className="w-full h-3/4 object-cover"
              />
              <div className="px-8 pt-5">
                <h3 className="font-extrabold font-serif text-4xl text-gray-800 mt-3">
                Five Reasons to Stay at Villa Resort
                </h3>
              </div>
            </motion.div>
            {/* Blog Card 3 */}
            <motion.div className="bg-white shadow-lg overflow-hidden pb-8"
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <img
                src={Image3}
                alt="Blog 3"
                className="w-full h-3/4 object-cover"
              />
              <div className="px-8 pt-5">
                <h3 className="font-extrabold font-serif text-4xl text-gray-800 mt-3">
                Five Reasons to Stay at Villa Resort
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hotel
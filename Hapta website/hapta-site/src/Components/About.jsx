import React, {useState, useEffect} from 'react'

// Image 
import Slide1 from '../Assets/slider-1.jpg.webp';
import Slide2 from '../Assets/slider-2.jpg.webp';
import Slide3 from '../Assets/slider-3.jpg.webp';
import Slide4 from '../Assets/slider-4.jpg.webp';
import Slide5 from '../Assets/slider-5.jpg.webp';
import Slide6 from '../Assets/slider-6.jpg.webp';
// Customer review 
import Cimage1 from '../Assets/person_1.jpg.webp';
import Cimage2 from '../Assets/person_2.jpg.webp';
import Cimage3 from '../Assets/person_3.jpg.webp';

// Icons 
import { RiArrowRightWideFill } from "react-icons/ri";
import { RiArrowLeftWideFill } from "react-icons/ri";

// for add animations 
 import {motion} from 'framer-motion';

const About = () => {

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
      {/* 1st Section for add Contant  */}
      <section>
      <div className="relative w-full h-screen">
      <img
        src={Slide2}
        alt="Hotel Background"
        className="absolute inset-0 w-full h-5/6 object-cover z-0"
      />
      </div>

      {/* Overlay text and content on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-start items-center mt-72 z-10">
        <h1 className="text-8xl font-extrabold font-serif text-white">About Us</h1>
        <h2 className="text-3xl font-sans  tracking-widest leading-relaxed text-white mt-12">
          A free template by <span className=''>Colorlib.</span> Download and share!
        </h2>
      </div>
      </section>

        {/* 2nd section for add content  */}
              <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-white my-20 ">
      {/* Left Image Section */}      
      <div className="">
        <img 
        src={Slide1} 
        alt="Landscape"
        className='h-svh w-11/12 object-cover pl-40 ' />
      </div>

      {/* Right Content Section */}
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
      className="md:w-1/2 w-full text-center md:text-left mx-8 space-y-7 pr-28">
        <h1 className="text-8xl md:text-5xl font-extrabold font-serif text-gray-900 mb-4">
        Welcome Travel & Tours
        </h1>
        <p className="text-gray-700 text-2xl mb-4 leading-relaxed text-start">
          Far far away, behind the word mountains, far from the Separated they
          live in Bookmarksgrove of the Semantics, a large
          language ocean.
        </p>
        <p className="text-gray-700 text-2xl mb-20 pb-10 ">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <p className='text-xl border-2 border-teal-400 px-9 py-2 inline-block hover:bg-teal-400 hover:text-white leading-relaxed tracking-widest mb-4'>
          Learn More
        </p>
      </motion.div>
    </section>

     {/* 3rd Section for add Contant with Slide Show  */}
     <section className='bg-gray-100 py-28 '>
        <div className=' flex flex-col justify-center items-center text-center'>
            <motion.h1 
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='font-bold font-serif text-9xl p-5'>Hotel Gallery</motion.h1>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='w-2/3 text-3xl text-gray-600 p-7'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</motion.p>
        </div>
      {/* Slideshow Section */}
      <div className="relative w-full bg-gray-100">
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
       className="flex items-center justify-center w-full h-[920px] ">
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
      </motion.div>
    </div>
    </section>

     {/* 4th section for Review of Customer of Hepta  */}
     <section className="bg-gray-200 py-32 ">
        <div className='flex flex-col justify-center items-center py-16 font-serif'>
            <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
             className='font-extrabold text-7xl'>Team</motion.h1>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
             className='text-gray-800 text-center text-2xl py-5 leading-relaxed w-1/2'>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
             </motion.p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:px-12 mx-32 pb-20'>
            {/* Review One  */}
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-start '>
                <img 
                src={Cimage3} 
                alt="Customer Image"
                className='p-2 object-cover' />
                <div className="p-5 mt-4 text-2xl">
                <h4 className='text-gray-400'>CEO, Co-Founder</h4>              
                <h1 className='text-3xl font-extrabold font-serif'>Vince Richardson</h1>
                </div>
            </motion.div>
            {/* Review Two  */}
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-start '>
                <img 
                src={Cimage1} 
                alt="Customer Image"
                className='p-2 object-cover' />
                <div className="p-5 mt-4 text-2xl">
                <h4 className='text-gray-400'>CTO, Co-Founder</h4>    
                <h1 className='text-3xl font-extrabold font-serif'>Jean Love</h1>
                </div>
            </motion.div>
            {/* Review Third  */}
            <motion.div 
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-start '>
                <img 
                src={Cimage2} 
                alt="Customer Image"
                className='p-2 object-cover' />
                <div className="p-5 mt-4 text-2xl">
                <h4 className='text-gray-400'>Marketer, Co-Founder</h4>              
                <h1 className='text-3xl font-extrabold font-serif'>Jeff Stark</h1>
                </div>
            </motion.div>
            {/* Review Forth  */}
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-start '>
                <img 
                src={Cimage3} 
                alt="Customer Image"
                className='p-2 object-cover' />
                <div className="p-5 mt-4 text-2xl">
                <h4 className='text-gray-400'>CEO, Co-Founder</h4>              
                <h1 className='text-3xl font-extrabold font-serif'>Vince Richardson</h1>
                </div>
            </motion.div>
            {/* Review Fiveth  */}
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-start '>
                <img 
                src={Cimage1} 
                alt="Customer Image"
                className='p-2 object-cover' />
                <div className="p-5 mt-4 text-2xl">
                <h4 className='text-gray-400'>CTO, Co-Founder</h4>    
                <h1 className='text-3xl font-extrabold font-serif'>Jean Love</h1>
                </div>
            </motion.div>
            {/* Review Sixth  */}
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-start '>
                <img 
                src={Cimage2} 
                alt="Customer Image"
                className='p-2 object-cover' />
                <div className="p-5 mt-4 text-2xl">
                <h4 className='text-gray-400'>Marketer, Co-Founder</h4>              
                <h1 className='text-3xl font-extrabold font-serif'>Jeff Stark</h1>
                </div>
            </motion.div>
        </div>
        {/* second layer  */}
       
    </section>
    </div>
  )
}

export default About
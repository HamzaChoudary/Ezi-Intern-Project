import React, {useState, useEffect} from 'react';
// CSS file 
// import '../Hero/Hero.css';
import Image from '../Assets/back-img-1.jpg';
import SImage from '../Assets/img_1_long.jpg.webp';
import Breakfast from '../Assets/001-Breakfast.svg';
import Planet from '../Assets/002-planet-earth.svg';
import Airplane from '../Assets/003-airplane.svg';
import Beach from '../Assets/004-beach.svg';
import Mountain from '../Assets/005-mountains.svg';
import Hotair from '../Assets/006-hot-air-balloon.svg';

// Slide Image
import Slide1 from '../Assets/slider-1.jpg.webp';
import Slide2 from '../Assets/slider-2.jpg.webp';
import Slide3 from '../Assets/slider-3.jpg.webp';
import Slide4 from '../Assets/slider-4.jpg.webp';
import Slide5 from '../Assets/slider-5.jpg.webp';
import Slide6 from '../Assets/slider-6.jpg.webp';
// Blog Image 
import Image1 from '../Assets/img_1.jpg.webp';
import Image2 from '../Assets/img_4.jpg.webp';
import Image3 from '../Assets/img_5.jpg.webp';
// Customer image 
import Cimage1 from '../Assets/person_1.jpg.webp';
import Cimage2 from '../Assets/person_2.jpg.webp';
import Cimage3 from '../Assets/person_3.jpg.webp';
// Icons 
import { FaSortDown } from "react-icons/fa";
import { IoMdPlay } from "react-icons/io";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";

// Adding Animation and transformation we want 
import { motion } from "framer-motion";



function Hero() {

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
    <div id='Home'>  
      {/* Hero Area with Image */}
      <section>
      <div className="relative w-full h-screen"
     
      >
      <img
        src={Slide1}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      </div>

      {/* Overlay text and content on top of the image */}
      <div className="absolute inset-0 flex flex-col justify-start items-center top-20 gap-y-5 mt-44 z-10">
        <h1 className="text-7xl font-extrabold text-white">Travel & Tours</h1>
        <h2 className="text-3xl font-serif font-semibold tracking-widest text-white mt-12">
          A free template by Colorlib. Download and share!
        </h2>
        <button className="text-xl font-semibold mt-16 text-white border  border-white px-9 py-4 mb-16 tracking-widest leading-relaxed hover:bg-white hover:text-black transition">
          <a href="#">Visit Colorlib</a>
        </button>

        {/* Scroll Down Icon */}
        <div className="flex flex-col items-center mt-1.5">
          <i className="text-2xl text-gray-400"><FaSortDown /></i>
          <p className="mt-2 text-white">Scroll Down</p>
        </div>
      </div>
      </section>

        {/* Second Section for Add content  */}
    <section 
    className=" flex flex-col md:flex-row items-center justify-center md:justify-between px-10 py-16 bg-white"    
    >
      {/* Left Image Section */}
      <motion.div 
      className="md:w-1/2 w-full mb-6 md:mb-0 p-12"
      initial={{ y: 100, opacity: 0 }} // Start position: below the screen
    animate={{ y: 0, opacity: 1 }} // End position: normal
    transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      >
        <img
          src={SImage}
          alt="Mountain Landscape"
          className="w-full shadow-lg object-cover"
        />
      </motion.div>

      {/* Right Content Section */}
      <motion.div 
      className="md:w-1/2 w-full text-center md:text-left mx-4 space-y-7"
      initial={{ y: 100, opacity: 0 }} // Start position: below the screen
    animate={{ y: 0, opacity: 1 }} // End position: normal
    transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
      >
        <h1 className="text-3xl md:text-4xl font-extrabold font-serif text-gray-900 mb-4">
          Welcome To Our Website
        </h1>
        <p className="text-gray-700 mb-4 leading-relaxed mr-5 font-semibold">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p className="text-gray-700 mb-6 font-semibold">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>

        {/* Video Button */}
        <button
          className="flex items-center gap-2 text-green-900 font-medium fonts-bold"
          onClick={() => alert("Play Video")}
        >
          <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 hover:border-black hover:text-black font-extrabold">
          <IoMdPlay />
          </span>
          WATCH THE VIDEO
        </button>
      </motion.div>
    </section>

    {/* Third Section for Add content */}
    <section className='bg-gray-100 py-24 px-20'>
        {/* Right Text Area  */}
        <motion.div 
        className=" flex flex-col justify-center items-center  mb-8" 
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <div className='flex flex-col justify-center items-center my-6 '>
            <h1 className='text-3xl font-serif font-extrabold mb-3 '>Experience Once In Your Life Time</h1>
            <p className='w-2/3 text-2xl text-center text-gray-600 m-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>            
            </div>
            </motion.div>
            {/* Second Text Area in Third Section   */}
            <div
             className="grid grid-rows-2 grid-cols-3 place-items-center gap-y-5 gap-x-5  mb-8"
             >

            <motion.div className='flex flex-col justify-center items-center gap-y-4 '
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
            >
                <img 
                src={Breakfast}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit'/>
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4'
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
            >
                <img 
                src={Planet}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Travel Anywhere
                 </h1>
                 <p className='leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>
            <motion.div className='flex flex-col justify-center items-center gap-y-4'
            initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
            >
                <img 
                src={Airplane}
                 alt="BreakFast Image"
                 className='h-20 w-20 object-fit' />
                 <h1 className="font-extrabold text-2xl" >
                 Good Foods
                 </h1>
                 <p className='leading-relaxed text-gray-600 text-center m-4 '>
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
                 <p className='leading-relaxed text-gray-600 text-center m-4 '>
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
                 <p className='leading-relaxed text-gray-600 text-center m-4 '>
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
                 <p className='leading-relaxed text-gray-600 text-center m-4 '>
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                 </p>
            </motion.div>            
        </div>
    </section>

    {/* 4th Section for add Hero page Content  */}
    <section className='bg-white py-28 '>
        <motion.div 
        className=' flex flex-col justify-center items-center text-center'
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
        >
            <h1 className='font-bold font-serif text-9xl p-5'>International Tour Management.</h1>
            <p className='w-2/3 text-3xl text-gray-600 p-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        </motion.div>
      {/* Slideshow Section */}
      <motion.div className="relative w-full bg-white"
       initial={{ y: 100, opacity: 0 }} // Start position: below the screen
       animate={{ y: 0, opacity: 1 }} // End position: normal
       transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
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

           {/*5th Blog Post Section */}
           <section>
           <div 
           className="w-full py-52 px-20 bg-teal-500"
           initial={{ y: 100, opacity: 0 }} // Start position: below the screen
           animate={{ y: 0, opacity: 1 }} // End position: normal
           transition={{ duration: 1, ease: "easeOut" }} // Animation duration and easing
           >
        <div className="relative">
          <div className="text-center mb-8 ">
            <motion.h2 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
             className="text-7xl font-extrabold text-black">Recent Blog Post</motion.h2>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-gray-600 mt-6 px-3  text-3xl max-w-4xl mx-auto active:text-white pb-16">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:px-12 px-24">
            {/* Blog Card 1 */}
            <motion.div className="bg-white shadow-lg overflow-hidden pb-56" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <img
                src={Image1}
                alt="Blog 1"
                className="w-full h-5/6 object-cover"
              />
              <div className="px-8 pt-5">
                <p className="text-xl text-gray-300 pt-2">February 25, 2018</p>
                <h3 className="font-extrabold text-4xl text-gray-800 mt-3 ">
                  45 Best Places To Unwind
                </h3>
                <p className="text-gray-600 mt-6 text-start text-2xl pl-3 ">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </motion.div>
            {/* Blog Card 2 */}
            <motion.div className="bg-white shadow-lg overflow-hidden pb-56" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <img
                src={Image2}
                alt="Blog 2"
                className="w-full h-5/6 object-cover"
              />
              <div className="px-8 pt-5">
                <p className="text-xl text-gray-300 pt-2">February 25, 2018</p>
                <h3 className="font-extrabold text-4xl text-gray-800 mt-3">
                  45 Best Places To Unwind
                </h3>
                <p className="text-gray-600 mt-6 text-start text-2xl pl-3 ">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </motion.div>
            {/* Blog Card 3 */}
            <motion.div className="bg-white shadow-lg overflow-hidden pb-56" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >
              <img
                src={Image3}
                alt="Blog 3"
                className="w-full h-5/6 object-cover"
              />
              <div className="px-8 pt-5">
                <p className="text-xl text-gray-300 pt-2">February 25, 2018</p>
                <h3 className="font-extrabold text-4xl text-gray-800 mt-3">
                  45 Best Places To Unwind
                </h3>
                <p className="text-gray-600 mt-6 text-start text-2xl pl-3 ">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
           </section>

    {/* 6th section for Review of Customer of Hepta  */}
    <section>
      <div className="bg-gray-200 py-32 ">
        <motion.div className='flex justify-center items-center py-16 font-serif' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className='font-extrabold text-7xl'>Happy Customers</h1>
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-1  md:px-12 mx-32 pb-20'>
            {/* Review One  */}
            <motion.div className='text-start ' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} >
                <img 
                src={Cimage1} 
                alt="Customer Image"
                className='w-28 h-28 rounded-full p-2' />
                <p className='w-11/12 text-gray-800 text-2xl py-5 text-start leading-relaxed'>
                “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p>
                <h1 className='text-gray-400 text-xl'>— Clare Gupta</h1>
            </motion.div>
            {/* Review Two  */}
            <motion.div className='text-start' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Cimage2} 
                alt="Customer Image"
                className='w-28 h-28 rounded-full p-2' />
                <p className='w-11/12 text-gray-800 text-2xl py-5 text-start leading-relaxed'>
                “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p>
                <h1 className='text-gray-400 text-xl' >— Rogie Slater</h1>
            </motion.div>
            {/* Review Third  */}
            <motion.div className='text-start' initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Cimage3} 
                alt="Customer Image"
                className='w-28 h-28 rounded-full p-2' />
                <p className='w-11/12 text-gray-800 text-2xl py-5 text-start leading-relaxed'>
                “Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                </p>
                <h1 className='text-gray-400 text-xl'>— John Doe</h1>
            </motion.div>
        </div>
        </div>
    </section>

            {/* 7th Section for Our Destination spots  */}
    <section className='bg-white py-36'>
        <div className='flex flex-col justify-center items-center '>
            <motion.h1 initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='font-extrabold text-5xl font-serif py-5'>Top Destination</motion.h1>
            <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='w-2/3 text-center font-sans text-2xl text-gray-500 leading-relaxed px-20 pb-16'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor, iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam alias. Sed.</motion.p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8  md:px-12 mx-24 pb-20'
        >
          {/* 1 desti  */}
            <motion.div 
        initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img
                src={Slide6} 
                alt="Destinatin Spot" 
                className='pb-4' />
                <h1 className='font-extrabold font-sans text-2xl py-2'>Food & Wines</h1>
                <div className='flex justify-between'>
                    <p className='text-teal-800 text-xl '>⭐⭐⭐⭐</p>
                    <span className='text-gray-300 text-xl'>3,239 reviews</span>
                </div>
            </motion.div>
            {/* 2desitnation  */}
            <motion.div 
        initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img 
                src={Slide5} 
                alt="Destinatin Spot" 
                className='pb-4' />
                <h1 className='font-extrabold font-sans text-2xl py-2'>Resort & Spa</h1>
                <div className='flex justify-between'>
                    <p className='text-teal-800 text-xl '>⭐⭐⭐⭐</p>
                    <span className='text-gray-300 text-xl'>4,921 reviews</span>
                </div>
            </motion.div>
            <motion.div 
        initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img
                src={Image2} 
                alt="Destinatin Spot" 
                className='pb-4' />
                <h1 className='font-extrabold font-sans text-2xl py-2'>Hotel Rooms</h1>
                <div className='flex justify-between'>
                    <p className='text-teal-800 text-xl '>⭐⭐⭐⭐</p>
                    <span className='text-gray-300 text-xl'>2,211 reviews</span>
                </div>
            </motion.div>
            <motion.div 
        initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <img
                src={Image3} 
                alt="Destinatin Spot" 
                className='pb-4' />
                <h1 className='font-extrabold font-sans text-2xl py-2'>Mountain Climbing</h1>
                <div className='flex justify-between'>
                    <p className='text-teal-800 text-xl '>⭐⭐⭐⭐</p>
                    <span className='text-gray-300 text-xl'>6,981 reviews</span>
                </div>
            </motion.div>
            
        </div>

        
    </section>



    </div>
  );
}

export default Hero;

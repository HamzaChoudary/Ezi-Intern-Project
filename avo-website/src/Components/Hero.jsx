import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

// Import assets
import Work1 from './assets/work-1.jpg';
import Work2 from './assets/work-2.jpg';
import Work3 from './assets/work-3.jpg';
import Work4 from './assets/work-4.jpg';
import Work5 from './assets/work-5.jpg';
import Work6 from './assets/work-6.jpg';
import Person1 from './assets/Person_1.jpg';
import Person2 from './assets/Person_2.jpg';
import Person3 from './assets/Person_3.jpg';
import Image1 from './assets/image_1.jpg';
import Image2 from './assets/image_2.jpg';
import Image3 from './assets/image_3.jpg';
import Image4 from './assets/image_4.jpg';
import Back1 from './assets/bg_1.jpg';
import About from './assets/about.jpg';

// Icons
import { LuPenTool } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { TbSeo } from "react-icons/tb";

import Bgpicture1 from "./assets/bg_1.jpg"; // First image
import Bgpicture2 from "./assets/bg_2.jpg"; // Second image for the slider


const Hero = () => {

  const [currentImage, setCurrentImage] = useState(Bgpicture1); // Background slider
  const [counter, setCounter] = useState(0); // Counter for stats

  const images = [Bgpicture1, Bgpicture2]; // Array of images for the slider
    const targets = [400, 21]; // Target counts for each image

    // Counter logic for stats
  useEffect(() => {
    setCounter(0);
    const target = currentImage === Bgpicture1 ? targets[0] : targets[1];
    const incrementInterval = 20;
    const step = Math.ceil(target / (4000 / incrementInterval));

    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter + step >= target) {
          clearInterval(interval);
          return target;
        }
        return prevCounter + step;
      });
    }, incrementInterval);

    return () => clearInterval(interval);
  }, [currentImage]);

  const workItems = [
    { image: Work1, title: 'Web Design', project: 'Cassette tape', person: Person1, name: 'Jamie Jonson', website: 'avo.com' },
    { image: Work2, title: 'Application', project: 'Miniwall Clock', person: Person2, name: 'Jamie Jonson', website: 'avo.com' },
    { image: Work3, title: 'UI/UX Design', project: 'Avo Portfolio Agency', person: Person3, name: 'Jamie Jonson', website: 'avo.com' },
    { image: Work4, title: 'Web Development', project: 'Hand Writing', person: Person1, name: 'Jamie Jonson', website: 'avo.com' },
    { image: Work5, title: 'Illustration', project: 'Keyboard', person: Person2, name: 'Jamie Jonson', website: 'avo.com' },
    { image: Work6, title: 'Web Development', project: 'Spiral', person: Person3, name: 'Jamie Jonson', website: 'avo.com' },
  ];

  const reviews = [
    { image: Person1, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person2, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person3, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person1, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person1, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person2, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person3, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person1, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person2, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person3, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
    { image: Person1, name: "Roger Scott", role: "Marketing Manager", feedback: "Far far away, behind the word mountains, their support is amazing." },
  ];

  const blogs = [
    {title: "Amplify your blockchain team", image: Image1, date: "June 01, 2020 Admin  3", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."},
    {title: "Amplify your blockchain team", image: Image2, date: "June 01, 2020 Admin  3", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."},
    {title: "Amplify your blockchain team", image: Image3, date: "June 01, 2020 Admin  3", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."},
    {title: "Amplify your blockchain team", image: Image4, date: "June 01, 2020 Admin  3", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."},
  ]

    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleDotClick = (index) => {
      setCurrentSlide(index);
    };

    // Counter logic for stats
      useEffect(() => {
        setCounter(0);
        const target = currentImage === Bgpicture1 ? targets[0] : targets[1];
        const incrementInterval = 20;
        const step = Math.ceil(target / (4000 / incrementInterval));
    
        const interval = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter + step >= target) {
              clearInterval(interval);
              return target;
            }
            return prevCounter + step;
          });
        }, incrementInterval);
    
        return () => clearInterval(interval);
      }, [currentImage]);

      // Background slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === Bgpicture1 ? Bgpicture2 : Bgpicture1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
 {/* Hero Section */}
<div id='Home' className="relative h-screen">
  <div
    className="absolute top-0 w-full h-full "
    style={{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 65% 100%, 0% 90%)",
      backgroundImage: `url(${currentImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Overlay Text */}
  <div className="absolute w-full h-full flex items-center justify-center text-white px-6">
    <motion.div
      className="flex flex-col justify-center space-y-4 px-6 md:px-16 lg:px-52"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
        We Create Modern & Minimal Websites
      </h1>
      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-6">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </p>
      <button className="bg-red-600 w-fit text-white px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl rounded-lg transition">
        {currentImage === Bgpicture1 ? "Start Project" : "Explore Projects"}
      </button>
    </motion.div>

    {/* Right Area */}
    <motion.div
      className="flex flex-col justify-start items-end pr-6 sm:pr-16 lg:pr-52"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        {counter}
        <span className="text-red-600">|</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-500">
        {currentImage === Bgpicture1 ? (
          <div className="text-xl sm:text-2xl text-end pl-0 sm:pl-20 lg:pl-80 leading-relaxed tracking-normal font-semibold">
            More than a hundred successful projects
          </div>
        ) : (
          <div className="text-xl sm:text-2xl text-end pl-0 sm:pl-20 lg:pl-96 leading-relaxed tracking-normal font-semibold">
            Years of Experience
          </div>
        )}
      </p>
    </motion.div>
  </div>
</div>

{/* About Us  = 1st */}
<div className='mb-28'>
  <motion.div className='mt-40'
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className='text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-relaxed text-gray-600 mb-14'>
      About Us
    </h1>
    <ul className='flex flex-wrap justify-center sm:justify-evenly items-center px-4 sm:px-16 space-x-5'>
      <li className='flex flex-col items-center space-y-4'>
        <i className='text-3xl'><LuPenTool /></i>
        <h2 className='text-xl sm:text-2xl font-semibold'>UI/UX Design</h2>
      </li>
      <li className='flex flex-col items-center space-y-4'>
        <i className='text-3xl'><FaLaptopCode /></i>
        <h2 className='text-xl sm:text-2xl font-semibold'>Web Development</h2>
      </li>
      <li className='flex flex-col items-center space-y-4'>
        <i className='text-3xl'><AiFillProduct /></i>
        <h2 className='text-xl sm:text-2xl font-semibold'>Product Design</h2>
      </li>
      <li className='flex flex-col items-center space-y-4'>
        <i className='text-3xl'><MdDeveloperMode /></i>
        <h2 className='text-xl sm:text-2xl font-semibold'>Mobile Apps</h2>
      </li>
      <li className='flex flex-col items-center space-y-4'>
        <i className='text-3xl'><TbSeo /></i>
        <h2 className='text-xl sm:text-2xl font-semibold'>SEO</h2>
      </li>
    </ul>
  </motion.div>
</div>

{/* 2nd 3 columns */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-6 sm:mx-16 lg:mx-36 justify-items-center'>
  {/* first col */}
  <motion.div className='text-end pr-8'
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4 pl-4 sm:pl-16 lg:pl-28 leading-normal'>
      Welcome to AVO A Personal Portfolio Web Agency
    </h1>
    <p className='text-lg sm:text-xl lg:text-xl text-gray-400 pl-4 sm:pl-16 lg:pl-28 leading-normal mb-4'>
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
    </p>
  </motion.div>

  {/* Second col */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <img
      className='h-full w-full object-cover justify-items-center'
      src={About}
      alt="About-Image"
    />
  </motion.div>

  {/* Third col */}
  <motion.div className='text-start'
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <p className='text-lg sm:text-xl lg:text-xl text-gray-400 leading-normal mb-8 pr-8 sm:pr-16 lg:pr-28'>
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
    </p>
    <motion.button className='bg-red-700 px-6 py-3 sm:px-8 sm:py-4 text-white leading-relaxed text-lg sm:text-xl rounded'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      View all projects
    </motion.button>
  </motion.div>
</div>

{/* 3rd */}
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mx-6 sm:mx-16 lg:mx-36 mt-10 mb-28'>
  {/* Counter 1 */}
  <motion.div className=''
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className='flex items-center'>
      <h1 className='text-red-700 text-4xl sm:text-6xl p-2 m-2 border-b-2 border-red-200'>
        01
      </h1>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-gray-800 pr-14'>
        Search Engine Optimization
      </h1>
    </div>
    <p className='pl-8 sm:pl-16 lg:pl-24 text-lg sm:text-xl text-gray-400'>
      Far far away, behind the word mountains
    </p>
  </motion.div>

  {/* Counter 2 */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className='flex items-center'>
      <h1 className='text-red-700 text-4xl sm:text-6xl p-2 m-2 border-b-2 border-red-200'>
        02
      </h1>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-gray-800 pr-14'>
        Web Development
      </h1>
    </div>
    <p className='pl-8 sm:pl-16 lg:pl-24 text-lg sm:text-xl text-gray-400'>
      Far far away, behind the word mountains
    </p>
  </motion.div>

  {/* Counter 3 */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className='flex items-center'>
      <h1 className='text-red-700 text-4xl sm:text-6xl p-2 m-2 border-b-2 border-red-200'>
        03
      </h1>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-gray-800 pr-14'>
        Product Design
      </h1>
    </div>
    <p className='pl-8 sm:pl-16 lg:pl-24 text-lg sm:text-xl text-gray-400'>
      Far far away, behind the word mountains
    </p>
  </motion.div>
</div>
   {/* OUR WORKS */}
<div className="relative w-full min-h-[150vh] flex justify-center mt-40">
  {/* Polygon Background */}
  <div className="absolute inset-0 bg-gray-300 opacity-50"
    style={{ clipPath: "polygon(25% 0%, 100% 5%, 100% 97%, 65% 100%, 0% 95%, 0% 4%)" }}>
  </div>

  {/* Overlay Content */}
  <div className="relative z-10 text-white flex flex-col items-center w-10/12 mt-52 mb-60">
    <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-500 text-center tracking-wider leading-relaxed mb-16"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      OUR WORKS
    </motion.h1>

    {/* Work Sections Grid */}
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
{/* Clients Reviews */}
<div className="mt-56 w-full flex flex-col items-center px-4">
  <h1 className="text-4xl sm:text-5xl text-center text-gray-700 font-bold mb-6">Clients Says About Us?</h1>     

  {/* Carousel Wrapper */}
  <div className="relative w-full max-w-6xl overflow-hidden">
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {reviews.map((review, index) => (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          key={index}
          className="flex flex-col items-center justify-center text-center w-full sm:w-2/3 lg:w-1/3 flex-shrink-0 mt-16"
          style={{ gap: '10px', background: "gray" }} // 3 columns
        >
          <p className="text-gray-600 italic mt-4 px-6">{review.feedback}</p>
          <div className="flex justify-center items-center text-center py-3">
            <img
              src={review.image}
              alt={review.name}
              className="h-24 w-24 rounded-full object-cover shadow-lg mb-4"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">{review.name}</h2>
              <p className="text-sm text-gray-900">{review.role}</p>
            </div>
          </div>             
        </motion.div>
      ))}
    </div>
  </div>

  {/* Dots for Navigation */}
  <div className="flex justify-center mt-8 space-x-2">
    {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
      <button
        key={index}
        onClick={() => handleDotClick(index)}
        className={`w-3 h-3 rounded-full border ${currentSlide === index ? "bg-red-700" : "bg-gray-400"}`}
      ></button>
    ))}
  </div>
</div>

{/* Image with Overlay Text */}
<motion.div 
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }} 
  className="relative w-full px-6 sm:px-16 md:px-24 mt-32 gap-y-2 mb-20"
>
  <img 
    className="h-96 w-full object-cover"
    src={Back1} alt="Background-image" 
  />
  
  <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-16 md:px-20 w-2/3 gap-y-2 pl-10 sm:pl-20">
    <h2 className="text-red-700 text-lg sm:text-xl">Get Started</h2>
    <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-relaxed pr-20">
      Fill in the brief and get the project estimate
    </h1>
    <p className="text-gray-500 text-xl leading-relaxed tracking-wider">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
    </p>
    <button className="bg-red-700 text-white p-2 rounded cursor-pointer text-lg sm:text-xl">
      Get Started
    </button>
  </div>
</motion.div>

{/* Blogs */}
<div className="w-full bg-gray-100 text-white pt-60 pb-40" style={{ clipPath: 'polygon(25% 0%, 100% 5%, 100% 100%, 0% 100%, 0% 10%)'}}>
  <motion.h1 
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }} 
    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-20"
  >
    RECENT BLOG
  </motion.h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-4 sm:mx-10 md:mx-20">
    {blogs.map((blog, index) => (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        key={index}
        className="flex flex-col items-center "
      >
        <a href="#" className="text-xl sm:text-2xl text-gray-800 hover:text-red-700 font-semibold mb-4 cursor-pointer">
          {blog.title}
        </a>
        <div className="mt-4">
          <img className="w-full h-[200px] sm:h-60 mb-1 cursor-pointer" src={blog.image} alt="Blog-Images" />
        </div>
        <div className="flex flex-row justify-start mb-4">
          <p className="leading-relaxed text-gray-800 tracking-widest cursor-pointer">{blog.date}</p>
        </div>
        <p className="text-gray-400 text-lg sm:text-xl">{blog.description}</p>
      </motion.div>
    ))}
  </div>
</div>
   
    </div>
  )
  }

  export default Hero
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Icons
import { LuPenTool } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { AiFillProduct } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { TbSeo } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

// Image 
import Image from "./assets/about.jpg";
import Bigpicture2 from './assets/bg_2.jpg';
// import Back1 from './assets/bg_1.jpg';
import Person1 from './assets/Person_1.jpg';
import Person2 from './assets/Person_2.jpg';
import Person3 from './assets/Person_3.jpg';
// Team Images 
import Team1 from './assets/team-1.jpg';
import Team2 from './assets/team-2.jpg';
import Team3 from './assets/team-3.jpg';
import Team4 from './assets/team-4.jpg';
import Team5 from './assets/team-5.jpg';
import Team6 from './assets/team-6.jpg';
import Team7 from './assets/team-7.jpg';
import Team8 from './assets/team-8.jpg';

const About = () => {

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
  ];
  const ExpertTeam = [
    { image: Team1, name: "JOHN WILSON", role: "Web Designer" },
    { image: Team2, name: "ROBBERT WILLS", role: "Web Developer" },
    { image: Team3, name: "MIKE SMITH", role: "Graphic Designer" },
    { image: Team4, name: "ADRIAN HENDERSON", role: "System Analyst" },
    { image: Team5, name: "JOHN WILSON", role: "Web Programmer" },
    { image: Team6, name: "ROBBERT WILLS", role: "Web Designer" },
    { image: Team7, name: "MIKE SMITH", role: "Graphic Designer" },
    { image: Team8, name: "ADRIAN HENDERSON", role: "SEO" },
  ];
  

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id='about'>
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
        <div className="absolute w-full h-full flex flex-col items-start justify-end text-white text-start px-8 sm:px-16 md:px-32 lg:px-64 pb-32">
          <ul className='flex justify-center text-xl md:text-2xl'>
            <li className='flex justify-center items-center pr-4 cursor-pointer hover:text-red-700'>
              <a href="#Home">Home</a><IoIosArrowForward className='text-red-700 font-bold' />
            </li>
            <li className='flex justify-center items-center'>
              <a href="#about">About</a><i><IoIosArrowForward className='text-red-700 font-bold' /></i>
            </li>
          </ul>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold pt-5 leading-relaxed tracking-wide'>ABOUT US</h1>
        </div>
      </div>

      {/* About Us  */}
      <div>
        <motion.div className='mt-40'>
          <h1 className='text-center text-4xl sm:text-5xl md:text-6xl font-bold leading-relaxed text-gray-600 mb-14'>
            About Us
          </h1>
          <ul className='flex flex-wrap justify-evenly items-center px-8 sm:px-16 md:px-36 space-x-5'>
            <li className='text-center space-y-8'>
              <i className='text-3xl'><LuPenTool /></i>
              <h2 className='text-xl sm:text-2xl font-semibold'>UI/UX Design</h2>
            </li>
            <li className='text-center space-y-8'>
              <i className='text-3xl'><FaLaptopCode /></i>
              <h2 className='text-xl sm:text-2xl font-semibold'>Web Development</h2>
            </li>
            <li className='text-center space-y-8'>
              <i className='text-3xl'><AiFillProduct /></i>
              <h2 className='text-xl sm:text-2xl font-semibold'>Product Design</h2>
            </li>
            <li className='text-center space-y-8'>
              <i className='text-3xl'><MdDeveloperMode /></i>
              <h2 className='text-xl sm:text-2xl font-semibold'>Mobile Apps</h2>
            </li>
            <li className='text-center space-y-8'>
              <i className='text-3xl'><TbSeo /></i>
              <h2 className='text-xl sm:text-2xl font-semibold'>SEO</h2>
            </li>
          </ul>
        </motion.div>

        {/* Second Section - 3 Columns */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8 sm:mx-16 md:mx-36 mt-20'>
          <motion.div className='text-end'>
            <h1 className='text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 mb-4'>Welcome to AVO A Personal Portfolio Web Agency</h1>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-400'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
          </motion.div>
          <motion.div>
            <img className='h-[500px] w-full object-cover' src={Image} alt="" />
          </motion.div>
          <motion.div>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-400 mb-8'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <motion.button className='bg-red-700 px-3 py-2 text-white text-lg sm:text-xl md:text-2xl rounded'>
              View All Projects
            </motion.button>
          </motion.div>
        </div>

      {/* Expert Team Section */}
<div className="relative w-full min-h-[220vh] flex justify-center mt-40 pt-20">
  <div className="absolute inset-0 bg-gray-200" style={{ clipPath: "polygon(25% 0%, 100% 5%, 100% 97%, 65% 100%, 0% 95%, 0% 4%)" }}>
    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed text-center pt-52 text-gray-800'>
      EXPERT TEAM
    </h1>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-32 mx-8 sm:mx-16 md:mx-36 my-20'>
      {ExpertTeam.map((teamMember, index) => (
        <div key={index} className='relative group w-[280px] h-[400px] '>
          {/* Image of the team member */}
          <img className='w-full h-full object-cover' src={teamMember.image} alt={`Team member ${index + 1}`} />
          
          {/* Icons on hover */}
          <div className="absolute inset-0 flex flex-col justify-start items-start bg-opacity-50 opacity-0 group-hover:opacity-100 space-y-2 pt-6 pl-6 transition-opacity duration-300">
            <FaTwitter className="bg-white rounded-full p-2 hover:text-white text-red-700 hover:bg-red-700 text-4xl" />
            <FaFacebookF className="bg-white rounded-full p-2 hover:text-white text-red-700 hover:bg-red-700 text-4xl" />
            <GrGoogle className="bg-white rounded-full p-2 hover:text-white text-red-700 hover:bg-red-700 text-4xl" />
            <FaInstagram className="bg-white rounded-full p-2 hover:text-white text-red-700 hover:bg-red-700 text-4xl" />
          </div>
          
          {/* Team member name and role */}
          <h1 className='text-2xl sm:text-3xl font-bold text-black mt-5 text-center group-hover:text-red-600'>
            {teamMember.name}
          </h1>
          <p className='text-lg text-gray-500 text-center'>
            {teamMember.role}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Reviews Section */}
        <div className="mt-36 mb-12 flex flex-col justify-center ">
          <h1 className='text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 mb-4 text-center '>Clients Says About Us?</h1>
          <div className="flex overflow-hidden">
            <div className="flex space-x-4">
              {reviews.map((review, index) => (
                <div key={index} className={`w-[300px] h-[350px] px-8 py-4 rounded-lg bg-gray-200`}>
                  <img className="w-16 h-16 rounded-full object-cover mx-auto" src={review.image} alt={review.name} />
                  <h2 className="text-lg font-semibold text-center mt-3">{review.name}</h2>
                  <p className="text-center text-gray-600">{review.role}</p>
                  <p className="text-gray-600 text-center mt-4">{review.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

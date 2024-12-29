import React from 'react'


// Icons 
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";



function footer() {
  return (
    
    <footer className='absolute w-full h-[1000px] bg-black text-white py-60 ' 
    style={{ clipPath: 'polygon(65% 20%, 100% 5%, 100% 100%, 0% 100%, 0% 10%)'}}>
        <div className=" ">
        <div className='grid grid-cols-5 place-content-center m-10 px-40' >
            {/* 1st For AVO Section  */}
            <section className='flex flex-col justify-start'>
                <h2 className='font-extrabold text-xl pt-10'>avo</h2>
                <p className='text-xl pr-14 py-16 leading-10 text-gray-500 font-semibold'>Far far away, behind the word mountains, far from the countries.</p>
                <div className='flex justify-around text-start pr-20'>
                <i className='bg-gray-500 p-3 rounded-full'>
                    <a href="https://www.twitter.com/" className='text-xl font-bold'><TiSocialTwitter /></a>
                </i>
                <i className='bg-gray-500 p-3 rounded-full'>
                    <a href="https://www.facebook.com/" className='text-xl font-bold'><FaFacebookF /></a>
                </i>
                <i className='bg-gray-500 p-3 rounded-full'>
                    <a href="https://www.instagram.com/" className='text-xl font-bold'><FaInstagram /></a>
                </i>
                </div>
            </section>
            {/* 2nd For Community Section  */}
            <section>
                <h2 className='font-extrabold text-xl pt-10 py-14 list-none '>Community</h2>
                <ul className=''>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                    <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                            Projects 
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                        <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                            Team 
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                        <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             Reviews
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                    <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i> 
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                           FAQs 
                        </a>
                    </li>
                </ul>
            </section>
            {/* 2th About Section */}
            <section>
                <h2 className='font-extrabold text-xl pt-10 py-14 list-none '>About Us</h2>
                <ul>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                        <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             Our Story 
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                    <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#"className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             Meets the team
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                    <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             Careers
                        </a>
                    </li>
                </ul>
            </section>
            {/* 3rd For Company Section  */}
            <section>
                <h2 className='font-extrabold text-xl pt-10 py-14 list-none '>Company</h2>
                <ul>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                        <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             About Us
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                    <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                            Press
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                        <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             Contacts
                        </a>
                    </li>
                    <li className='flex items-center text-gray-500 font-semibold py-1'>
                    <i className='font-extrabold text-2xl'><RiArrowRightSLine /></i>
                        <a href="#" className='leading-relaxed whitespace-pre tracking-wider text-xl'>
                             Careers
                        </a>
                    </li>
                </ul>
            </section>
            {/* 4th For Hava a Question Section*/}
            <section>
                <h2 className='font-extrabold text-xl pt-10 py-14 list-none '>Have a Questions?</h2>
                <div>
                    <ul>
                        <li className='flex items-start text-gray-500'>
                            <i className='text-xl font-bold px-1 '><FaMap /></i>
                            <p className='text-lg font-bold leading-relaxed tracking-wide pr-16 pl-6 pb-2'>	203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </li>
                        <li className='flex items-center text-gray-500 py-2'>                            
                            <i className='text-xl font-bold px-1 '><BsFillTelephoneFill /></i>
                            <p className='text-lg font-bold leading-relaxed tracking-wide pr-10 pl-6 '> +2 392 3929 210</p>
                        </li>
                        <li className='flex items-center text-gray-500 py-2'>                            
                            <i className='text-xl font-bold px-1 '><IoMail /></i>
                            <p className='text-lg font-bold leading-relaxed tracking-wide pr-10 pl-6 '>	info@yourdomain.com</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <div className='flex justify-center items-center '>
            <p className='text-xl font-semibold text-gray-500 leading-relaxed tracking-normal '>
            Copyright &copy;2024 All rights reserved | This template is made with <span className="text-white">&hearts;</span>  by <span className='text-red-700'>Colorlib</span></p>
        </div>
        </div>
    </footer>
  )
}

export default footer
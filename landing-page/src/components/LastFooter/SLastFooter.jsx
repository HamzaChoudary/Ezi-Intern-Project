import React from 'react';
import client1 from "../assets/IB1.jpg";

// Replace with actual image paths
import PSEBLogo from '../assets/footlog.png';
// import POSHALogo from '../assets/footlog1.png';
// import GoogleReviews from '../assets/google-reviews.png';
// import Guarantee from '../assets/footlog2.png';

const Footer = () => {
  return (
    <div className="bg-gray-900 md:flex-col text-white py-10 gap-x-14 text-sm px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-4">ABOUT</h2>
          <p>Tech House Having 100+ Quality Products and Innovations at national and international markets. Rated as Best Software House in Region</p>
          <div className="mt-4">
            <img src={PSEBLogo} alt="PSEB Logo" className="inline-block mr-2" />
            
          </div>
        </div>
        <div className=" ">        
        <h2 className="text-xl  font-bold mb-4">RECENT POSTS</h2>
        <ul>
          <div className='flex flex-row'>          
          <img src={client1} alt="image" style={{height:30, width: 30}} className='rounded-2xl m-6 ' />
            <li className="mb-4 flex flex-col">              
              <h3 className="text-sm">16th Anniversary</h3>
              <p className="text-blue-400 text-sm">February 4, 2024</p>
            </li>
            </div>            
            <div className="flex flex-row">
            <img src={client1} alt="image" style={{height:30, width: 30}} className='rounded-2xl m-6 ' />
            <li className="mb-4">
              <h3 className="text-sm ">Presidential Awards Won by Eziline Software House in IT Sector</h3>
              <p className="text-blue-400 text-sm">February 20, 2023</p>
            </li>            
            </div>
            <div className="flex flex-row">
            <img src={client1} alt="image" style={{height:30, width: 30}} className='rounded-2xl m-6 '/>              
            <li>
              <h3 className="text-sm">Eziline Exhibited at LEAP 2023 Saudi Arabia</h3>
              <p className="text-blue-400 text-sm">February 7, 2023</p>
            </li>
            </div>

          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold mb-4">CONTACT</h2>
          <p><strong>PK Office:</strong> 304-G, Amna Plaza Pesh Rd Rawalpindi</p>
          <p><strong>US Office:</strong> 16192 Coastal Highway Lewes, DE</p>
          <p><strong>UK Office:</strong> Intl. House, 776-778 Barking Rd London</p>
          <p><strong>FR Office:</strong> 5 avenue Pierre Salvi 95500 Gonesse Paris</p>
          <p className="mt-4 text-gray-300"><strong>Ph:</strong> +92 51 5491184 / +92 51 8772888</p>
          <p className='text-gray-300 '><strong>Email:</strong> info@eziline.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

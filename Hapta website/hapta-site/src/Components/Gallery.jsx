import React from 'react';
// Images 
import Slide1 from '../Assets/slider-1.jpg.webp';
import Slide2 from '../Assets/slider-2.jpg.webp';
import Slide4 from '../Assets/slider-4.jpg.webp';
import Slide5 from '../Assets/slider-5.jpg.webp';
import Slide6 from '../Assets/slider-6.jpg.webp';

import Image2 from '../Assets/img_4.jpg.webp';
import Image3 from '../Assets/img_5.jpg.webp';

const Gallery = () => {
  return (
    <div>
      {/* 1st section for add content  */}
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
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white">Gallery</h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl font-sans tracking-widest leading-relaxed text-white mt-6 md:mt-8 lg:mt-12">
            A free template by <span>Colorlib.</span> Download and share!
          </h2>
        </div>
      </section>

      {/* 2nd Section for add Gallery stuff */}
      <section className="py-10 px-4 md:py-20 md:px-12 lg:px-32">
        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-8">
          <div>
            <img src={Slide6} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Slide5} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Image2} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Image3} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Image2} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Image3} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Slide6} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Slide5} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Two big images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
          <div>
            <img src={Slide4} alt="" className="w-full h-full" />
          </div>
          <div>
            <img src={Slide5} alt="" className="w-full h-full" />
          </div>
        </div>

        {/* Small images grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div>
            <img src={Image2} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Image3} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Slide6} alt="" className="w-full h-auto" />
          </div>
          <div>
            <img src={Slide5} alt="" className="w-full h-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

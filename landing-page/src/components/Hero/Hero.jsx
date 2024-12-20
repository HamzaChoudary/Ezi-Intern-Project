import React from "react";

const AboutEziline = () => {
  return (
    <div className="relative bg-gradient-to-b from-orange-400 to-purple-700 py-10 px-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="flex justify-items-start ml-10 text-white text-4xl font-bold">
          ABOUT <span className="text-blue-400">EZILINE</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-white space-y-4 lg:w-1/2">
          <p className="flex items-center text-lg">
            <span className="text-red-500 mr-2">&#9733;</span>
            Eziline is an independent Pakistan-based company.
          </p>
          <p className="flex items-center text-lg">
            <span className="text-red-500 mr-2">&#9733;</span>
            Operating since 2007 – Eziline has been in profit since the beginning.
          </p>
          <p className="flex items-center text-lg">
            <span className="text-red-500 mr-2">&#9733;</span>
            We are website specialists (web design, dynamic web solutions, graphics design,
            multimedia development).
          </p>
          <p className="flex items-center text-lg">
            <span className="text-red-500 mr-2">&#9733;</span>
            A close-knit team of 350+ designers
          </p>
          <p className="flex items-center text-lg">
            <span className="text-red-500 mr-2">&#9733;</span>
            Programmer's
          </p>
          <p className="flex items-center text-lg">
            <span className="text-red-500 mr-2">&#9733;</span>
            A close-knit team of 350+ designers, programmers, system analysts, and marketing
            executives.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative lg:w-1/2">
          {/* Video Embed */}
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <iframe
              className="w-full h-48 sm:h-64 md:h-72"
              src="https://www.youtube.com/embed/PTqcbyRa9..."
              title="Eziline Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>        
        </div>
      </div>

      {/* Footer Decorative Image */}
      {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"> */}
        {/* Add custom decorations or background if needed */}
      {/* </div> */}
    </div>
  );
};

export default AboutEziline;

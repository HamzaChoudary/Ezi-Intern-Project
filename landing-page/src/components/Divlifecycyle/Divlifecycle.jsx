import React from 'react';

// Import images or icons if needed
import ClockImage from '../assets/clock.jpeg'; 
import PlantImage from '../assets/plant.jpeg';  

const DevLifeCycle = () => {
  return (
    <div className="bg-teal-500 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-white text-4xl font-bold">SOFTWARE DEV LIFE CYCLE</h1>
        <p className="text-white text-lg">We use Agile / Scrum methodology</p>
      </div>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="absolute top-0 left-0 text-white text-xl font-bold">PLANNING</div>
        <div className="absolute top-0 right-0 text-white text-xl font-bold">DESIGNING</div>
        <div className="absolute top-1/4 left-1/4 text-white text-xl font-bold">DEFINING</div>
        <div className="absolute top-1/2 left-0 text-white text-xl font-bold">BUILDING</div>
        <div className="absolute top-1/2 right-0 text-white text-xl font-bold">TESTING</div>
        <div className="absolute bottom-1/4 left-1/4 text-white text-xl font-bold">DEPLOYMENT</div>
        <div className="absolute bottom-1/4 right-1/4 text-white text-xl font-bold">MAINTENANCE</div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold bg-red-500 p-2 rounded">SDLC</div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <div className="bg-gray-200 p-4 rounded-full">
          <img src={ClockImage} alt="Clock" className="w-16 h-16" />
        </div>
        <div className="bg-gray-200 p-4 rounded-full ml-4">
          <img src={PlantImage} alt="Plant" className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
}

export default DevLifeCycle;

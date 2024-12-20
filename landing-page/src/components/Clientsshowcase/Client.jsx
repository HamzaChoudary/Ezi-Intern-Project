import React, { useEffect, useState } from "react";

import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import Logo5 from "../assets/logo5.png";
import Logo6 from "../assets/logo6.png";
import Logo7 from "../assets/logo7.png";
import Logo8 from "../assets/logo8.png";
import Logo9 from "../assets/logo9.png";
import Logo10 from "../assets/logo10.png";
import Logo11 from "../assets/logo11.png";
import Logo12 from "../assets/logo12.png";
import Logo13 from "../assets/logo13.png";
import Logo14 from "../assets/logo14.png";
import Logo15 from "../assets/logo15.png";
import Logo16 from "../assets/logo16.png";

const ClientSlider = () => {
  const clients = [
    { id: 1, logo: Logo1, alt: "Client 1" },
    { id: 2, logo: Logo2, alt: "Client 2" },
    { id: 3, logo: Logo3, alt: "Client 3" },
    { id: 4, logo: Logo4, alt: "Client 4" },
    { id: 5, logo: Logo5, alt: "Client 5" },
    { id: 6, logo: Logo6, alt: "Client 6" },
    { id: 7, logo: Logo7, alt: "Client 7" },
    { id: 8, logo: Logo8, alt: "Client 8" },
    { id: 9, logo: Logo9, alt: "Client 9" },
    { id: 10, logo: Logo10, alt: "Client 10" },
    { id: 11, logo: Logo11, alt: "Client 11" },
    { id: 12, logo: Logo12, alt: "Client 12" },
    { id: 13, logo: Logo13, alt: "Client 13" },
    { id: 14, logo: Logo14, alt: "Client 14" },
    { id: 15, logo: Logo15, alt: "Client 15" },
    { id: 16, logo: Logo16, alt: "Client 16" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="bg-white py-8">
      <h2 className="text-center text-orange-500 font-bold text-lg mb-6">
        OUR CLIENTS
      </h2>
      <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentSlide * 10}%)`,
            width: `${clients.length * 10}%`, // Ensure all slides fit side-by-side
          }}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex-shrink-0 w-full flex justify-center"
              style={{ width: "10%" }} // Each slide takes full width
            >
              <img
                src={client.logo}
                alt={client.alt}
                className="h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? clients.length - 1 : prev - 1
            )
          }
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          &#8592;
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) => (prev + 1) % clients.length)
          }
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ClientSlider;

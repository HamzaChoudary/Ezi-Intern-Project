import React from "react";

import Mobliedevice from "../assets/eziline-device-moblie.png";

const ServicesShowcase = () => {
  const servicesLeft = [
    {
      title: "Website Development",
      description:
        "Developing a website is fun and anyone can do this but very few understand how to build websites.",
      icon: "🌐", // Replace with actual icon or SVG
    },
    {
      title: "Web App Development",
      description:
        "Web applications have been changing the ways of business operates across the globe.",
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      description:
        "In this modern era, businesses should not ignore to have a business mobile app.",
      icon: "📱",
    },
  ];

  const servicesRight = [
    {
      title: "Cloud Services",
      description:
        "Modernize your workflow and improve your application's performance by migrating to the Cloud.",
      icon: "☁️",
    },
    {
      title: "Digital Marketing",
      description:
        "Are you looking for ways to make your pitch inspirational to social media audience?",
      icon: "📈",
    },
    {
      title: "Startup Solutions",
      description:
        "We help entrepreneurs turn their vision into reality and guide them throughout their business life cycle.",
      icon: "🚀",
    },
  ];

  return (
    <div className=" py-10 px-6bg-gray-300 bg-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Section */}
        <div className="lg:w-1/3 space-y-6 bg-gray-300">
          {servicesLeft.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-300 p-4 shadow rounded-lg"
            >
              
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="text-blue-500 text-4xl">{service.icon}</div>
            </div>
          ))}
        </div>

        {/* Center Section */}
        <div className="lg:w-1/3 flex justify-center py-10 lg:py-0">
          <div className="relative w-56 h-96 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img
              src={Mobliedevice}
              alt="Mobile Mockup"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 space-y-6 bg-gray-300">
          {servicesRight.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-300 p-4 shadow rounded-lg"
            >
              <div className="text-blue-500 text-4xl">{service.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;

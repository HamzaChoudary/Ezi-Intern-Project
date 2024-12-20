import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Button */}
      <button>
        Home
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full ml-0 mt-3 w-60 p-3  bg-gray-100 shadow-md rounded">
          <a
            href="#about"
            className="inline-block  p-4 text-sm text-gray-500  line-clamp-1 border-b-2 hover:bg-gray-100"
          >
            About Us
          </a>
          <a
            href="#services"
            className="block p-4 text-sm text-gray-500 line-clamp-1 border-b-2 hover:bg-gray-100"
          >
            Print Media
          </a>
          <a
            href="#contact"
            className="block p-4 text-sm text-gray-500 line-clamp-1 border-b-2 hover:bg-gray-100"
          >
            Our Team
          </a>
          <a
            href="#contact"
            className="block p-4 text-sm text-gray-500 line-clamp-1 border-b-2 hover:bg-gray-100"
          >
            Our Technologies
          </a>
          <a
            href="#contact"
            className="block text-sm text-gray-500 p-4 hover:bg-gray-100"
          >
            Ezi Soft Code
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

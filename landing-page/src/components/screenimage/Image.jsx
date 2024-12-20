import React from "react";

import Image from '../assets/award-pic.png';

const SideScrollingImage = () => {
  return (
    <div className="hidden sm:flex">
      {/* Side Image */}
      <div className="fixed top-1/2 left-10 z-50 transform -translate-y-1/2">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
          <img
            src={Image}
            alt="Side Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SideScrollingImage;

import React from "react";

import { MdOutlinePayments } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";

const Nav = () => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center md:items-stretch">
        {/* Card 1 */}
        <div className="flex flex-col items-center h-auto md:h-60 w-full md:w-1/3 bg-purple-500 p-6 mb-4 md:mb-0">
          <div className="rounded p-3 text-4xl">
            <i className="text-white">
              <MdOutlinePayments />
            </i>
          </div>
          <h2 className="text-lg md:text-xl font-bold mt-2 p-2 text-center">
            FLEXIBLE PRICE
          </h2>
          <p className="text-center mt-2 text-sm md:text-xl">
            Our pricing plan is created by our clients. Market Competitive.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center h-auto md:h-60 w-full md:w-1/3 bg-blue-500 p-6 mb-4 md:mb-0">
          <div className="rounded p-3 text-4xl">
            <i className="text-white">
              <FaRegLightbulb />
            </i>
          </div>
          <h2 className="text-lg md:text-xl font-bold mt-2 p-2 text-center">
            QUALITY WORK
          </h2>
          <p className="text-center mt-2 text-sm md:text-xl">
            Quality assurance & testing before every project delivery.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center h-auto md:h-60 w-full md:w-1/3 bg-green-500 p-6">
          <div className="rounded p-3 text-4xl">
            <i className="text-white">
              <TfiCup />
            </i>
          </div>
          <h2 className="text-lg md:text-xl font-bold mt-2 p-2 text-center">
            QUICK DELIVERY
          </h2>
          <p className="text-center mt-2 text-sm md:text-xl">
            40 days initial delivery on custom mega projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";

import Dashboard from "../assets/dashboard.png";
const ProjectManagement = () => {
  return (
    <div className="relative bg-white py-10 px-6 mt-10 mb-10">

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Section: iMac Mockup */}
        <div className="relative lg:w-1/2 flex justify-center">
          <img
            className="w-1/4 lg:w-full"
            src={Dashboard}
            alt="Dashboard Mockup"
          />
        </div>

        {/* Right Section: Features List */}      
        <div className="lg:w-1/2">
        {/* Header  */}
        <div className="text-center mb-8">
        <h1 className="flex justify-end mr-32 text-gray-900 text-3xl font-bold">
          OUR PROJECT MANAGEMENT
        </h1>
        <div className="w-20 h-0.5 bg-blue-400 mx-auto  mt-5"></div>

      </div>
          <ul className="space-y-4">
            {[
              "Project and Milestone tracking",
              "Task management with SMS/email notification",
              "24/7 online service & support",
              "Billing/invoicing transparent management",
              "Discussion board for project management",
              "HR/Payroll & complete office management",
              "Cloud-based & robust technology",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">&#9733;</span>
                <p className="text-gray-700 text-lg">{item}</p>
              </li>
            ))}
          </ul>
          {/* Tag Buttons */}
          <div className="flex gap-4 mt-6">
            {["STAFF", "INTERN", "CLIENT"].map((role, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md font-semibold text-white ${
                  role === "STAFF"
                    ? "bg-red-500 hover:bg-red-600"
                    : role === "INTERN"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;

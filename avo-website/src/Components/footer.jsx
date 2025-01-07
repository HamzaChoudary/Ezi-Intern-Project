import React from "react";

// Icons
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF, FaInstagram, FaMap } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

function Footer() {
  return (
    <footer
      className="relative w-full h-[1000px] bg-black text-white py-60"
      style={{
        clipPath: "polygon(65% 20%, 100% 5%, 100% 100%, 0% 100%, 0% 10%)",
      }}
    >
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AVO Section */}
          <section>
            <h2 className="font-extrabold text-xl lg:text-xl pt-4">avo</h2>
            {/* 'font-extrabold text-xl pt-10' */}
            <p className="text-base lg:text-lg py-6 text-gray-500">
              Far far away, behind the word mountains, far from the countries.
            </p>
            <div className="flex space-x-4">
              <i className="bg-gray-500 p-3 rounded-full">
                <a
                  href="https://www.twitter.com/"
                  className="text-lg lg:text-xl font-bold"
                >
                  <TiSocialTwitter />
                </a>
              </i>
              <i className="bg-gray-500 p-3 rounded-full">
                <a
                  href="https://www.facebook.com/"
                  className="text-lg lg:text-xl font-bold"
                >
                  <FaFacebookF />
                </a>
              </i>
              <i className="bg-gray-500 p-3 rounded-full">
                <a
                  href="https://www.instagram.com/"
                  className="text-lg lg:text-xl font-bold"
                >
                  <FaInstagram />
                </a>
              </i>
            </div>
          </section>

          {/* Community Section */}
          <section>
            <h2 className="font-extrabold text-lg lg:text-xl pt-4">Community</h2>
            <ul className="mt-6 space-y-3">
              {["Projects", "Team", "Reviews", "FAQs"].map((item) => (
                <li key={item} className="flex items-center text-gray-500">
                  <i className="text-2xl">
                    <RiArrowRightSLine />
                  </i>
                  <a href="#" className="text-base lg:text-lg ml-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* About Us Section */}
          <section>
            <h2 className="font-extrabold text-lg lg:text-xl pt-4">About Us</h2>
            <ul className="mt-6 space-y-3">
              {["Our Story", "Meet the Team", "Careers"].map((item) => (
                <li key={item} className="flex items-center text-gray-500">
                  <i className="text-2xl">
                    <RiArrowRightSLine />
                  </i>
                  <a href="#" className="text-base lg:text-lg ml-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Company Section */}
          <section>
            <h2 className="font-extrabold text-lg lg:text-xl pt-4">Company</h2>
            <ul className="mt-6 space-y-3">
              {["About Us", "Press", "Contacts", "Careers"].map((item) => (
                <li key={item} className="flex items-center text-gray-500">
                  <i className="text-2xl">
                    <RiArrowRightSLine />
                  </i>
                  <a href="#" className="text-base lg:text-lg ml-2">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Have a Questions Section */}
          <section>
            <h2 className="font-extrabold text-lg lg:text-xl pt-4">
              Have a Questions?
            </h2>
            <ul className="mt-6 space-y-4 text-gray-500">
              <li className="flex items-start">
                <i className="text-xl">
                  <FaMap />
                </i>
                <p className="text-sm lg:text-base ml-4">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </li>
              <li className="flex items-center">
                <i className="text-xl">
                  <BsFillTelephoneFill />
                </i>
                <p className="text-sm lg:text-base ml-4">+2 392 3929 210</p>
              </li>
              <li className="flex items-center">
                <i className="text-xl">
                  <IoMail />
                </i>
                <p className="text-sm lg:text-base ml-4">
                  info@yourdomain.com
                </p>
              </li>
            </ul>
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center mt-10">
          <p className="text-sm lg:text-base text-gray-500 text-center">
            Copyright &copy;2024 All rights reserved | This template is made
            with <span className="text-white">&hearts;</span> by{" "}
            <span className="text-red-700">Colorlib</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

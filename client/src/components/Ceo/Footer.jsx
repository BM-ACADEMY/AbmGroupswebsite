import React, { useEffect } from "react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <footer
      className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-black to-[#000000e1]"
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Left Column: Logo, Description, Social */}
        <div className="flex-1 min-w-[200px] md:min-w-[250px]">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              ABM
            </span>
            <span className="text-2xl font-bold text-yellow-400 tracking-tight">
              GROUPS
            </span>
          </a>
          <p className="max-w-sm mt-6 text-gray-300 text-sm md:text-base">
            We are dedicated to delivering excellence through innovation, collaboration, and purposeful growth across all our ventures.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6 text-white">
            <a href="https://www.facebook.com/bm.kamar4" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-yellow-400 transition" />
            </a>
            <a href="https://www.instagram.com/kamarudeen_bm?utm_source=ig_web_button_share_sheet&igsh=MW9lYmc0aTFrNWt2Zg==" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-yellow-400 transition" />
            </a>
          </div>
        </div>

        {/* Right Column: Quick Links + Map */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] gap-6 md:gap-10">
          {/* Quick Links */}
          <div className="flex-1 min-w-[120px] md:min-w-[150px]">
            <h3 className="font-semibold text-base text-gray-300 mb-3 md:mb-5">
              Quick Links
            </h3>
            <ul className="text-sm space-y-2">
              <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="#brands" className="hover:text-yellow-400 transition">Brands</a></li>
              <li><a href="#roadmap" className="hover:text-yellow-400 transition">Roadmap</a></li>
              <li><a href="#reviews" className="hover:text-yellow-400 transition">Reviews</a></li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex-1 min-w-[200px] md:min-w-[250px]">
            <div className="relative w-full h-48 md:h-48 lg:h-64 aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9605.494660602379!2d79.83609451294072!3d11.961680735595172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53636a1752dc05%3A0xaa5795ccc1815bf7!2sBM%20Academy%20-%20Digital%20Marketing%2C%20Full%20Stack%20Development%2C%20IT%20%26%20Skill%20Training%20Institute!5e1!3m2!1sen!2sin!4v1749880774336!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        © <span id="year"></span>{" "}
        <a
          href="https://bmtechx.in/"
          target="_blank"
          className="hover:underline text-yellow-400"
        >
           BMTechx.in
        </a>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;


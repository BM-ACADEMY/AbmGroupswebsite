
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Added
import EnquiryModal from "./EnquiryModal"; // Adjust path if needed

import Alamaanath from "../assets/images/AL_AMAANATH.png";
import Bmacademy from "../assets/images/BM_ACADEMY.png";
import Bmtech from "../assets/images/BM_TECHX.png";
import Dada from "../assets/images/DADAS.png";
import Haramain from "../assets/images/HARAMAIN.png";
import Foundation from "../assets/images/foundation.png";
import Travel from "../assets/images/travell.png";
import CoreTalent from "../assets/images/core.png";
import Edu from "../assets/images/edu.png";

import Men1 from '../assets/images/per1.jpg';
import Men2 from '../assets/images/per2.png';
import Men3 from '../assets/images/per3.jpg';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const logos = [
    <img
      src={Alamaanath}
      alt="Alamaanath"
      className="h-32 w-auto mx-12"
      key="1"
    />,
    <img
      src={Bmacademy}
      alt="Bmacademy"
      className="h-32 w-auto mx-12"
      key="2"
    />,
    <img src={Bmtech} alt="Bmtech" className="h-32 w-auto mx-12" key="3" />,
    <img src={Dada} alt="Dada" className="h-32 w-auto mx-12" key="4" />,
    <img src={Haramain} alt="Haramain" className="h-32 w-auto mx-12" key="5" />,
    <img
      src={Foundation}
      alt="foundation"
      className="h-32 w-auto mx-12"
      key="6"
    />,
    <img src={Travel} alt="travel" className="h-32 w-auto mx-12" key="7" />,
    <img src={CoreTalent} alt="travel" className="h-20 w-auto mx-12" key="7" />,
    <img src={Edu} alt="travel" className="h-32 w-auto mx-12" key="7" />,
  ];

  return (
    <section
      className="flex flex-col items-center bg-gradient-to-b from-black to-[#000000e1] text-white pb-16 text-sm relative min-h-screen"
      id="home"
    >
      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridPatternBg.svg"
        alt="hero-bg"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      />

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            ABM
          </span>
          <span className="text-2xl font-bold text-yellow-400 tracking-tight">
            GROUPS
          </span>
        </a>

        <div
          className={`text-white max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium ${
            isMenuOpen ? "max-md:w-full" : "max-md:w-0"
          }`}
        >
          <a
            href="#home"
            className="hover:text-gray-300"
            onClick={handleNavLinkClick}
          >
            Home
          </a>
          <a
            href="#achievements"
            className="hover:text-gray-300"
            onClick={handleNavLinkClick}
          >
            Achievements
          </a>

          <Link
            to="/ceo.html"
            className="hover:text-gray-300"
            onClick={handleNavLinkClick}
          >
            CEO
          </Link>
          <a
            href="#moments"
            className="hover:text-gray-300"
            onClick={handleNavLinkClick}
          >
            Moments
          </a>
          <a
            href="#brands"
            className="hover:text-gray-300"
            onClick={handleNavLinkClick}
          >
            Brands
          </a>
          
          
          <button
            onClick={toggleMenu}
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <X size={24} strokeWidth={2} color="white" />
          </button>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-medium transition"
        >
          Contact
        </button>

        <button
          onClick={toggleMenu}
          className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <Menu size={24} strokeWidth={2} color="white" />
        </button>
      </nav>

      {/* Community avatars */}
      <div className="flex flex-wrap items-center justify-center p-1.5 mt-32 rounded-full border border-yellow-600 text-xs">
        <div className="flex items-center">
          <img
            className="size-7 rounded-full border-3 border-white"
            src={Men1}
            alt="userImage1"
          />
          <img
            className="size-7 rounded-full border-3 border-white -translate-x-2"
            src={Men2}
            alt="userImage2"
          />
          <img
            className="size-7 rounded-full border-3 border-white -translate-x-4"
            src={Men3}
            alt="userImage3"
          />
        </div>
        <p className="-translate-x-2 text-white">
          Join community of 2K+ happy customers
        </p>
      </div>

      {/* Hero heading and description */}
      <h1 className="text-4xl md:text-6xl text-center font-medium mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Welcome to ABM <span className="text-[#facc15]">Groups</span>
      </h1>
      <p className="text-[#facc15] md:text-base max-md:px-2 text-center max-w-xl mt-3">
        Rooted in Kottakuppam | Impacting Anywhere!
      </p>
      <p className="text-slate-200 md:text-base text-center max-w-3xl mt-4 px-4">
        ABM GROUPS is a progressive business collective with a mission to
        empower communities, inspire innovation, and deliver value through our
        diverse verticals— education, technology, real estate, food services,
        travel, and social development. Every brand we build is a commitment to
        excellence, integrity, and long-term impact.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => {
          document
            .getElementById("achievements")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 mt-8 rounded-full transition"
      >
        <span className="text-black">get started</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4.166 10h11.667m0 0L9.999 4.167M15.833 10l-5.834 5.834"
            stroke="black"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Marquee Section */}
      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-16">
        <div className="absolute left-0 top-0 h-full w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-[#00000005] to-transparent"></div>
        <Marquee
          direction="left"
          pauseOnClick={false}
          speed={100}
          gradient={false}
          className="py-4"
          pauseOnHover={false}
        >
          {logos.map((logo, index) => (
            <div key={index} className="grayscale">
              {logo}
            </div>
          ))}
        </Marquee>
        <div className="absolute right-0 top-0 h-full w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-[#00000005] to-transparent"></div>
      </div>

      {/* Font Import */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
        * {
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default HeroSection;

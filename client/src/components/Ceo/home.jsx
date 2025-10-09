import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import image from "../../assets/images/ceoiamge2.jpg";
import { Link } from "react-router-dom"; // ✅ Added
import Marquee from "react-fast-marquee";
import Bmacademy from "../../assets/images/BM_ACADEMY.png";
import Bmtech from "../../assets/images/BM_TECHX.png";
import Dada from "../../assets/images/DADAS.png";
import Travel from "../../assets/images/travell.png";
import CoreTalent from "../../assets/images/core.png";
import Edu from "../../assets/images/edu.png";
import EnquiryModal from "../EnquiryModal"; // Adjust path if needed

const Homeceo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavLinkClick = () => isMenuOpen && setIsMenuOpen(false);

  const logos = [
    <img
      src={Bmacademy}
      alt="Bmacademy"
      className="h-32 w-auto mx-12"
      key="1"
    />,
    <img src={Bmtech} alt="Bmtech" className="h-32 w-auto mx-12" key="2" />,
    <img src={Dada} alt="Dada" className="h-32 w-auto mx-12" key="3" />,

    <img src={Travel} alt="Travel" className="h-32 w-auto mx-12" key="5" />,
       <img src={CoreTalent} alt="travel" className="h-20 w-auto mx-12" key="7" />,
        <img src={Edu} alt="travel" className="h-32 w-auto mx-12" key="7" />,
  ];

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-black to-[#000000e1] text-white min-h-screen relative pt-8 overflow-x-hidden"
    >
      <img
        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridPatternBg.svg"
        alt="hero-bg"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      />
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            ABM
          </span>
          <span className="text-2xl font-bold text-yellow-400 tracking-tight">
            GROUPS
          </span>
        </Link>

        {/* Mobile Offcanvas Menu */}
        <div
          className={`max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen 
                max-md:bg-black/90 max-md:backdrop-blur-sm max-md:flex-col 
                flex items-center justify-center gap-8 font-medium 
                transition-all duration-300 z-50
                ${isMenuOpen ? "flex" : "hidden md:flex"}`}
        >
          {["Home", "Brands", "Roadmap", "Reviews"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-gray-300"
              onClick={handleNavLinkClick}
            >
              {link}
            </a>
          ))}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-md"
          >
            <X size={24} />
          </button>
        </div>

        {/* Desktop Right Side */}
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setModalOpen(true)}
            className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full font-medium transition"
          >
            Contact
          </button>

          <button
            onClick={toggleMenu}
            className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Hero Main */}
      <main className="flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between pb-16 pt-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto w-full gap-12">
        {/* Left Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:flex-1 mt-12">
          <button
            type="button"
            className="mb-6 flex items-center space-x-2 border border-yellow-500 text-yellow-500 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-yellow-100 hover:text-black transition"
          >
            <span>Explore how we help grow brands</span>
            <span className="flex items-center justify-center size-6 p-1 rounded-full bg-yellow-500 text-white">
              <svg
                width="14"
                height="11"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hello, I'm <span className="text-yellow-400">Kamarudeen</span>
          </h2>

          <p className="mt-3 text-lg md:text-xl text-yellow-300 font-medium">
            Entrepreneur | Brand Builder | Visionary
          </p>

          <p className="mt-4 text-gray-300 max-w-xl text-sm sm:text-base">
            Transforming ideas into successful brands with innovative strategies
            and creative solutions.
          </p>

          <div className="flex flex-col md:flex-row items-center mt-8 gap-3">
            <a
              href="#visionmisson"
              className="text-yellow-500 border border-yellow-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 hover:text-white transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end lg:flex-1 mt-12">
          <div className="relative">
            {/* Image */}
            <img
              src={image}
              alt="CEO"
              className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-lg transition duration-300 object-cover shadow-lg"
            />

            {/* Tagline */}
            <div className="absolute left-0 top-[75%] -translate-y-1/2 bg-black/60 text-white text-sm px-4 py-2 rounded-r-lg shadow-md backdrop-blur-sm">
              Chief Executive Officer
            </div>
          </div>
        </div>
      </main>
      {/* Marquee Section */}
      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none mt-10">
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

export default Homeceo;

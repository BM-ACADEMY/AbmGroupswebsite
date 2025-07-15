import React, { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

// Import images
import Alamaanath from "../../assets/images/AL_AMAANATH.png";
import Academy from "../../assets/images/BM_ACADEMY.png";
import Bmtechx from "../../assets/images/BM_TECHX.png";
import Travel from "../../assets/images/travel.png";
import Foundation from "../../assets/images/foundation.png";
import Haramain from "../../assets/images/HARAMAIN.png";
import Dada from "../../assets/images/DADAS.png";
import Edu from '../../assets/images/edu.png'

// Updated TrustBrands Component with New Grid Styles
const TrustBrands = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#000000e1] py-12" id="brands">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-16 px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Our Brands at a
          <span className="text-[#facc15] not-italic"> Glance</span>
        </h1>
      </motion.div>

     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-16 w-max mx-auto">
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-t-0 border-x-0">
          <a
            href="https://www.instagram.com/al_amaanath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="alamaanath-tooltip"
            data-tooltip-place="top"
          >
            <img src={Alamaanath} alt="Al Amaanath" className="max-h-24 object-contain mx-auto" />
          </a>

        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-t-0 border-r-0">
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden md:block md:border-t-0 md:border-r-0">
           <a
            href="https://thebmacademy.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="academy-tooltip"
            data-tooltip-place="top"
          >
            <img src={Academy} alt="BM Academy" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden lg:block lg:border-t-0 lg:border-r-0">
         
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden xl:block xl:border-t-0 xl:border-r-0">
            <a
            href="https://bmtechx.in/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="bmtechx-tooltip"
            data-tooltip-place="top"
          >
            <img src={Bmtechx} alt="BM TECHx" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        <div className="hover:bg-slate-800 flex items-center justify-center h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-t-0 border-x-0">
          
        </div>
        <div className="hover:bg-slate-800 flex items-center justify-center h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-t-0 border-r-0">
          <a
            href="https://travellersneed-client.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="travel-tooltip"
            data-tooltip-place="top"
          >
            <img src={Travel} alt="Travel" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        <div className="hover:bg-slate-800 flex items-center justify-center h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-t-0 border-x-0 md:border-l">
          
        </div>
        <div className="hover:bg-slate-800 flex items-center justify-center h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-t-0 border-r-0 md:border-l-0 md:border-b-0 lg:border-l lg:border-b">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="foundation-tooltip"
            data-tooltip-place="top"
          >
            <img src={Foundation} alt="Foundation" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        <div className="hover:bg-slate-800 flex items-center justify-center h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-y-0 border-x-0 md:border-l lg:border-l-0 xl:border-l xl:border-b">
          
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden lg:block lg:border-r-0 lg:border-y-0 xl:border-l-0">
          <a
            href="https://www.instagram.com/haramain_haj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="haramain-tooltip"
            data-tooltip-place="top"
          >
            <img src={Haramain} alt="Haramain" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden lg:block lg:border-r-0 lg:border-y-0">
          
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden xl:block xl:border-r-0 xl:border-y-0">
          <a
            href="https://www.instagram.com/_dadaskitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="dada-tooltip"
            data-tooltip-place="top"
          >
            <img src={Dada} alt="Dada" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 hidden xl:block xl:border-r-0 xl:border-y-0">
          
        </div>
        <div className="hover:bg-slate-800 h-20 w-48 sm:w-64 sm:h-24 border border-slate-600 border-y-0 border-r-0 lg:border-b-0">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            data-tooltip-id="edu"
            data-tooltip-place="top"
          >
            <img src={Edu} alt="edu" className="max-h-24 object-contain mx-auto" />
          </a>
        </div>
        
        
      </div>

      {/* Tooltips */}
      <Tooltip id="alamaanath-tooltip" className="z-50">
        <p>Building Dreams, Brick by Brick</p>
      </Tooltip>
      <Tooltip id="academy-tooltip" className="z-50">
        <p>Empowering Minds, Shaping Futures</p>
      </Tooltip>
      <Tooltip id="bmtechx-tooltip" className="z-50">
        <p>Innovate. Integrate. Inspire.</p>
      </Tooltip>
      <Tooltip id="dada-tooltip" className="z-50">
        <p>Authentic Flavors, Memorable Meals</p>
      </Tooltip>
      <Tooltip id="haramain-tooltip" className="z-50">
        <p>Your Sacred Journey, Our Commitment</p>
      </Tooltip>
      <Tooltip id="foundation-tooltip" className="z-50">
        <p>Serving Humanity, Uplifting Communities</p>
      </Tooltip>
      <Tooltip id="travel-tooltip" className="z-50">
        <p>Travel Made Personal</p>
      </Tooltip>
      <Tooltip id="edu" className="z-50">
        <p>Edu Consultants</p>
      </Tooltip>
    </div>
  );
};

// BrandMarquee Component (Unchanged)
const BrandMarquee = () => {
  const brands = [
    {
      src: Alamaanath,
      alt: "Alamaanath",
      tooltip: "Building Dreams, Brick by Brick",
      url: "https://www.instagram.com/al_amaanath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      src: Academy,
      alt: "BM Academy",
      tooltip: "Empowering Minds, Shaping Futures",
      url: "https://thebmacademy.com/",
    },
    {
      src: Bmtechx,
      alt: "BM TECHx",
      tooltip: "Innovate. Integrate. Inspire.",
      url: "https://bmtechx.in/",
    },
    {
      src: Dada,
      alt: "Dada's Kitchen",
      tooltip: "Authentic Flavors, Memorable Meals",
      url: "https://www.instagram.com/_dadaskitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      src: Haramain,
      alt: "Haramain",
      tooltip: "Your Sacred Journey, Our Commitment",
      url: "https://www.instagram.com/haramain_haj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      src: Foundation,
      alt: "BM Foundation",
      tooltip: "Serving Humanity, Uplifting Communities",
      url: "#",
    },
    {
      src: Travel,
      alt: "TravellersNeed",
      tooltip: "Travel Made Personal",
      url: "https://travellersneed-client.onrender.com/",
    },
    {
      src: Edu,
      alt: "Edu Consultants",
      tooltip: "Edu Consultants",
      url: "",
    },
  ];

  return (
    <section className="bg-gradient-to-t from-black to-[#000000e1]">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-16 px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Our Brands at a
          <span className="text-[#facc15] not-italic"> Glance</span>
        </h1>
      </motion.div>
      <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none">
        <div className="absolute left-0 top-0 h-full w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-r from-[#ffffff05] to-transparent" />
        <Marquee
          direction="left"
          pauseOnClick={true}
          speed={100}
          gradient={false}
          className="py-4"
          pauseOnHover={true}
        >
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="mx-12 relative group">
              <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="h-20 w-auto transition-transform duration-300 hover:scale-105"
                  draggable={false}
                />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-800 text-xs px-2 py-1 rounded whitespace-nowrap shadow-md">
                  {brand.tooltip}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </a>
            </div>
          ))}
        </Marquee>
        <div className="absolute right-0 top-0 h-full w-24 md:w-48 z-10 pointer-events-none bg-gradient-to-l from-[#ffffff05] to-transparent" />
      </div>
    </section>
  );
};

// Wrapper Component to Switch Between TrustBrands and BrandMarquee
const ResponsiveBrands = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint is 1024px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen ? <TrustBrands /> : <BrandMarquee />;
};

export default ResponsiveBrands;
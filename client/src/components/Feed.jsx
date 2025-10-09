import React from "react";
import { motion } from "framer-motion";

// Placeholder InstagramEmbed component with responsive iframe
const InstagramEmbed = ({ permalink }) => {
  // Clean Instagram URL by removing query parameters
  const cleanUrl = permalink.split("?")[0] + "embed";
  return (
    <div className="w-full relative pt-[125%] sm:pt-[100%]"> {/* 4:5 aspect ratio for mobile, 1:1 for larger screens */}
      <iframe
        src={cleanUrl}
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        frameBorder="0"
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
        title="Instagram Embed"
      />
    </div>
  );
};

const InstagramFeeds = () => {
  const instagramLinks = [
    "https://www.instagram.com/bmacademypondy/",
    "https://www.instagram.com/bmtechxpondy_/",
    "https://www.instagram.com/_dadaskitchen_/",
    "https://www.instagram.com/al_amaanath/",
    "https://www.instagram.com/haramain_haj/",
    "https://www.instagram.com/travellers_need/",
    "https://www.instagram.com/edu_consultant2013/",
    "https://www.instagram.com/core_talents/",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-gradient-to-b from-black to-[#000000e1] overflow-hidden" id="moments">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 max-w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Instagram <span className="text-yellow-400">Moments</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white">
            Follow us for more updates and behind-the-scenes content
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {instagramLinks.map((link, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="w-full transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              <InstagramEmbed permalink={link} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeeds;
import React from "react";
import InstagramEmbed from "./InstagramEmbed";
import { motion } from "framer-motion";

const InstagramFeeds = () => {
  const instagramLinks = [
    "https://www.instagram.com/bmacademypondy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "https://www.instagram.com/bmtechxpondy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "https://www.instagram.com/_dadaskitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "https://www.instagram.com/al_amaanath?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "https://www.instagram.com/haramain_haj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
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
    <section className="bg-gradient-to-b from-black to-[#000000e1]" id="moments">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Instagram <span className="text-yellow-400">Moments</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white">
            Follow us for more updates and behind-the-scenes content
          </p>
        </div>

        {/* First Row - 3 center aligned */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {instagramLinks.slice(0, 3).map((link, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              <InstagramEmbed permalink={link} />
            </motion.div>
          ))}
        </div>

        {/* Second Row - 2 center aligned */}
        <div className="flex flex-wrap justify-center gap-8">
          {instagramLinks.slice(3).map((link, idx) => (
            <motion.div
              key={idx + 3}
              custom={idx + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="transform hover:scale-105 transition-transform duration-300 ease-out"
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

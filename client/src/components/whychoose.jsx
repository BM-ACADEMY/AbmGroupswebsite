import React from "react";
import {
  Globe,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />, title: "Multi-sector expertise" },
  { icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />, title: "Strong local presence" },
  { icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />, title: "Proven track record" },
  { icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />, title: "Ethical and transparent practices" },
  { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />, title: "Community-first approach" },
];

export default function WhyChooseABM() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const rows = [
    features.slice(0, 3),
    features.slice(3),
  ];

  return (
    <section className="relative bg-gradient-to-b from-black to-[#000000e1] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-16 px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Why Choose ABM 
          <span className="text-[#facc15] not-italic"> GROUPS?</span>
        </h1>
      </motion.div>

      <motion.div
        className="space-y-6 sm:space-y-8 max-w-6xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-6 sm:gap-8"
          >
            {row.map(({ icon, title }, idx) => (
              <motion.article
                key={idx}
                className="flex items-center space-x-4 sm:space-x-5 p-5 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl group cursor-pointer hover:scale-105 transition-all duration-300 border border-gray-700 "
                variants={item}
              >
                <div className="flex-shrink-0 rounded-full bg-gray-900 p-3 sm:p-4 flex items-center justify-center ring-2 ring-gray-700 group-hover:ring-white transition-all duration-300">
                  {icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white   transition-colors duration-300">
                  {title}
                </h3>
              </motion.article>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

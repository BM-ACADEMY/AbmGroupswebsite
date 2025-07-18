import React from "react";
import { motion } from "framer-motion";

const Review = () => {
  const cardsData = [
    {
      name: "Deepa S.",
      handle: "@deepastudent",
      content:
        "BM Academy helped me land a job right after graduation. The team truly cares about each student.",
      role: "Student",
    },
    {
      name: "Rajeev M.",
      handle: "@rajeevglobalbiz",
      content:
        "BM Techx built our dream website and helped us scale internationally. Highly recommended.",
      role: "Business Owner",
    },
    {
      name: "Fatima N.",
      handle: "@fatimawedding",
      content:
        "The catering from DADA’s Kitchen was the highlight of our wedding! Authentic and unforgettable.",
      role: "Client",
    },
    {
      name: "Aakash M.",
      handle: "@asifplanner",
      content:
        "DADA’s Kitchen served the best food at our event—flavorful, timely, and loved by all our guests.",
      role: "Event Planner",
    },

    {
      name: "Sneha R.",
      handle: "@snehatravel",
      content:
        "Thanks to TravellersNeed, our family trip to Kashmir was smooth, scenic, and super safe.",
      role: "Traveller",
    },
  ];

  // Function to get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // Function to generate a consistent color based on name
  const getColorFromName = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
    ];
    const hash = name
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return colors[hash % colors.length];
  };

  const CreateCard = ({ card }) => {
    const initials = getInitials(card.name);
    const bgColor = getColorFromName(card.name);

    return (
      <div className="p-6 bg-white rounded-lg mx-4 shadow-lg hover:shadow-xl transition-all duration-200 w-80 shrink-0 border border-gray-100">
        <div className="flex gap-3 items-center">
          <div
            className={`${bgColor} size-12 rounded-full flex items-center justify-center text-white font-semibold`}
          >
            {initials}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-gray-900">{card.name}</p>
              <svg
                className="mt-0.5"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                  fill="#2196F3"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-500">{card.role}</span>
          </div>
        </div>
        <p className="text-gray-700 py-4 italic">"{card.content}"</p>
        <div className="flex items-center justify-between text-gray-500 text-xs border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1">
            <span>Posted on CEO</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-t from-black to-[#000000e1]" id="reviews">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16 px-4 md:px-8"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Our
            <span className="text-[#facc15] not-italic"> Testimonials</span>
          </h1>
        </motion.div>

        <style>{`
                    @keyframes marqueeScroll {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(-50%); }
                    }
                    .marquee-inner {
                        animation: marqueeScroll 30s linear infinite;
                    }
                    .marquee-reverse {
                        animation-direction: reverse;
                    }
                `}</style>

        <div className="marquee-row w-full mx-auto overflow-hidden relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          {/* Marquee content */}
          <div className="marquee-inner flex transform-gpu min-w-[200%] py-8 animate-marquee">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>

          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="marquee-row w-full mx-auto overflow-hidden relative mt-2">
          <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-8 animate-marquee-reverse">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-black/70 via-black/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Review;

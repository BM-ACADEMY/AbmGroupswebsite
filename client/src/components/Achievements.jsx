import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import leftLaurel from '../assets/images/left.png';
import rightLaurel from '../assets/images/right.png';

const CountUpItem = ({ target, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <span className="block text-3xl md:text-5xl font-bold text-white">
        {count}+
      </span>
      <span className="block text-sm md:text-base text-gray-300 mt-2">
        {label}
      </span>
    </div>
  );
};

export default function AwardHeadingWithStats() {
  return (
    <div className="bg-gradient-to-t from-black to-[#000000e1] w-full" id='achievements'>
      {/* Award Heading */}
      <div className="flex items-center justify-center gap-4 md:gap-6 py-8 px-4 text-center">
        <img
          src={leftLaurel}
          alt="Left Laurel"
          className="w-14 md:w-14 h-auto object-contain"
        />
        <h2 className="text-base md:text-3xl font-extrabold leading-tight">
          <span className="block text-white">Our Achievements</span>
        </h2>
        <img
          src={rightLaurel}
          alt="Right Laurel"
          className="w-14 md:w-14 h-auto object-contain"
        />
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <CountUpItem target={1100} label="students trained at BM Academy" />
          <CountUpItem target={12000} label="meals delivered by Dada's Kitchen" />
          <CountUpItem target={750} label="websites & marketing projects executed by BM TECHx" />
          <CountUpItem target={750} label="happy travelers served by TravellersNeed since 2013" />
        </div>
      </div>
    </div>
  );
}
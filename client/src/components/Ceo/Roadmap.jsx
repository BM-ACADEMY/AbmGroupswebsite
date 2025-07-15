import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const roadmap = [
   {
    year: "2012",
    subtitle: "TravellersNeed is a travel-based initiative focused on seamless journey planning",
    bgColor: "#0ea5e9", // Light blue for travel
  },
  {
    year: "2013",
    subtitle: "EduConsultants Study Abroad & College Admission Experts",
    bgColor: "#f97316", // Orange for education
  },
  {
    year: "2022",
    subtitle: "Foundation of ABM Groups",
    bgColor: "#1e3a8a",
  },
  {
    year: "2023",
    subtitle: "Growth across four core sectors: Web, Academy, Food, and EdTech",
    bgColor: "#2563eb",
  },
  {
    year: "2024",
    subtitle: "Brand consolidation and market expansion",
    bgColor: "#9333ea",
  },
  {
    year: "2025",
    subtitle:
      "Automations, global training programs, and franchising opportunities",
    bgColor: "#16a34a",
  },
];

const CeoRou = () => {
  return (
    <section className="bg-gradient-to-t from-black to-[#000000e1]" id="roadmap">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-center mb-16 px-4 md:px-8"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Our {" "}
              <span className="text-[#facc15] not-italic">Roadmap</span>
            </h1>
            <p className="text-base md:text-xl text-gray-300 mt-3 md:mt-4">
              Milestones that shaped our journey
            </p>
          </motion.div>

          <VerticalTimeline>
            {roadmap.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                date={item.year}
                dateClassName="font-bold text-xl text-white"
                contentStyle={{
                  background: item.bgColor,
                  borderRadius: "0.75rem",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${item.bgColor}`,
                }}
                iconStyle={{
                  background: item.bgColor,
                  color: "#fff",
                  boxShadow: `0 0 0 4px #111827, 0 4px 12px rgba(0,0,0,0.2)`,
                }}
                icon={<CalendarDays className="w-6 h-6 text-white" />}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="text-lg font-medium text-white">
                    {item.subtitle}
                  </h4>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </section>
  );
};

export default CeoRou;

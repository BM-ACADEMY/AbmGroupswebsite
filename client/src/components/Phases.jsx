import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Utensils,
  LandPlot,
  Plane,
  HeartHandshake,
  Laptop,
  Globe,
  Rocket,
  BookOpen,
  Home,
  Users,
  Globe2,
  Smartphone,
  CalendarCheck,
  Network,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Utility to lighten a hex color
const lightenDarkenColor = (hex, amt) => {
  let col = hex.startsWith("#") ? hex.slice(1) : hex;
  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;
  let g = ((num >> 8) & 0x00ff) + amt;
  let b = (num & 0x0000ff) + amt;

  r = Math.max(Math.min(255, r), 0);
  g = Math.max(Math.min(255, g), 0);
  b = Math.max(Math.min(255, b), 0);

  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
};

const BusinessRoadmap = () => {
  const phases = [
    {
      year: "2025",
      title: "Expansion & Training",
      subtitle: "Strengthen Local Roots (India-wide)",
      contentBgHex: "#1e3a8a",
      iconBgHex: "#2563eb",
      icon: <BookOpen className="w-6 h-6 text-white" />,
      items: [
        {
          icon: <GraduationCap className="w-5 h-5 text-indigo-100" />,
          bg: "bg-indigo-600",
          text: "BM Academy: Launch 5 new training centers across Tamil Nadu and South India",
        },
        {
          icon: <Utensils className="w-5 h-5 text-amber-100" />,
          bg: "bg-amber-600",
          text: "Dada's Kitchen: Expand to Chennai & Ambour with cloud kitchen models",
        },
        {
          icon: <Home className="w-5 h-5 text-emerald-100" />,
          bg: "bg-emerald-600",
          text: "Al Amaanath Promoters: Develop 50+ residential plots across Pondicherry suburbs",
        },
        {
          icon: <Plane className="w-5 h-5 text-sky-100" />,
          bg: "bg-sky-600",
          text: "Al Haramain: Open 2 new branches for Haj & Umrah service",
        },
        {
          icon: <HeartHandshake className="w-5 h-5 text-rose-100" />,
          bg: "bg-rose-600",
          text: "BM Foundation: Launch 3 new scholarship schemes for underprivileged youth",
        },
        {
          icon: <Laptop className="w-5 h-5 text-violet-100" />,
          bg: "bg-violet-600",
          text: "BM TECHx: Scale social media & website services across India",
        },
        {
          icon: <Globe className="w-5 h-5 text-teal-100" />,
          bg: "bg-teal-600",
          text: "TravellersNeed: Add 20+ new domestic and international custom tour packages",
        },
      ],
    },
    {
      year: "2026",
      title: "Digitization & Innovation",
      subtitle: "Automate. Scale. Go Digital.",
      contentBgHex: "#581c87",
      iconBgHex: "#9333ea",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      items: [
        {
          icon: <GraduationCap className="w-5 h-5 text-indigo-100" />,
          bg: "bg-indigo-600",
          text: "BM Academy: Smart e-learning app + AI career advisor",
        },
        {
          icon: <Utensils className="w-5 h-5 text-amber-100" />,
          bg: "bg-amber-600",
          text: "Dada's Kitchen: App for orders, event booking & AI menu curation",
        },
        {
          icon: <Home className="w-5 h-5 text-emerald-100" />,
          bg: "bg-emerald-600",
          text: "Al Amaanath Promoters: Property portal with virtual tours",
        },
        {
          icon: <CalendarCheck className="w-5 h-5 text-blue-100" />,
          bg: "bg-blue-600",
          text: "Al Haramain: One-click Haj/Umrah booking system + spiritual reminders",
        },
        {
          icon: <Network className="w-5 h-5 text-fuchsia-100" />,
          bg: "bg-fuchsia-600",
          text: "BM TECHx: SaaS products for startups & creative agencies",
        },
        {
          icon: <Globe className="w-5 h-5 text-teal-100" />,
          bg: "bg-teal-600",
          text: "TravellersNeed: App for trip planning, real-time itinerary updates, AI trip suggestions",
        },
      ],
    },
    {
      year: "2027",
      title: "Impact & Global Entry",
      subtitle: "Go Global, Give Back",
      contentBgHex: "#064e3b",
      iconBgHex: "#16a34a",
      icon: <Globe2 className="w-6 h-6 text-white" />,
      items: [
        {
          icon: <Users className="w-5 h-5 text-rose-100" />,
          bg: "bg-rose-600",
          text: "BM Foundation: Partner with 10+ NGOs for skill missions",
        },
        {
          icon: <Network className="w-5 h-5 text-fuchsia-100" />,
          bg: "bg-fuchsia-600",
          text: "BM TECHx: 100+ international clients (UAE, Qatar, Malaysia, UK)",
        },
        {
          icon: <Plane className="w-5 h-5 text-sky-100" />,
          bg: "bg-sky-600",
          text: "Al Haramain: Tie-ups with Gulf-based travel agents for end-to-end logistics",
        },
        {
          icon: <Globe className="w-5 h-5 text-teal-100" />,
          bg: "bg-teal-600",
          text: "TravellersNeed: Launch Gulf & Europe-based packages + multilingual concierge service",
        },
        {
          icon: <Rocket className="w-5 h-5 text-orange-100" />,
          bg: "bg-orange-600",
          text: "Future Leaders Fellowship: Incubate 10,000+ youth across all sectors",
        },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-t from-black to-[#000000e1]">
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
              Business Roadmap (
              <span className="text-[#facc15] not-italic">2025–2027</span>)
            </h1>

            <p className="text-base md:text-xl text-gray-300 mt-3 md:mt-4">
              Vision-driven. Brand-powered. Community-focused.
            </p>
          </motion.div>

          <VerticalTimeline>
            {phases.map((phase, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: phase.contentBgHex,
                  borderRadius: "0.75rem",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${phase.contentBgHex}`,
                }}
                date={phase.year}
                dateClassName="font-bold text-xl text-white"
                iconStyle={{
                  background: phase.iconBgHex,
                  color: "#fff",
                  boxShadow: `0 0 0 4px #111827, 0 4px 12px rgba(0,0,0,0.2)`,
                }}
                icon={phase.icon}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-extrabold mb-1 text-white">
                    {phase.title}
                  </h3>
                  <h4 className="text-lg font-medium mb-4 text-gray-300">
                    {phase.subtitle}
                  </h4>

                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * itemIndex }}
                        className="flex items-start gap-3 p-3 rounded-lg transition group cursor-default"
                        style={{ backgroundColor: phase.contentBgHex }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            lightenDarkenColor(phase.contentBgHex, 20))
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            phase.contentBgHex)
                        }
                      >
                        <span
                          className={`flex items-center justify-center p-2 rounded-full ${item.bg}`}
                        >
                          {React.cloneElement(item.icon, {
                            className: `${item.icon.props.className} w-4 h-4 flex-shrink-0`,
                          })}
                        </span>
                        <span className="text-gray-200 leading-snug group-hover:text-white transition-colors">
                          {item.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessRoadmap;

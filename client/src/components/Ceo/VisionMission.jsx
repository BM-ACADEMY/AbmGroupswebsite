import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const BlinkingEye = motion(Eye);
const SmashingTarget = motion(Target);

export default function VisionMission() {
  return (
    <section
      className="bg-gradient-to-t from-black to-[#000000e1] text-white py-20 px-4 sm:px-8 lg:px-20"
      id="visionmisson"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-16 px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Our Vision &{" "}
          <span className="text-[#facc15] not-italic">Mission</span>
        </h1>
      </motion.div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <BlinkingEye
                className="text-yellow-400 w-8 h-8"
                animate={{
                  scaleY: [1, 0.1, 1],
                  filter: [
                    "drop-shadow(0 0 6px #facc15)",
                    "drop-shadow(0 0 10px #facc15)",
                    "drop-shadow(0 0 6px #facc15)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              />
              <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To create purpose-driven businesses that improve lives and build
              lasting value across sectors.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <SmashingTarget
                className="text-yellow-400 w-8 h-8 drop-shadow-[0_0_6px_#facc15]"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 8, -8, 0],
                  opacity: [1, 0.8, 1],
                  filter: [
                    "drop-shadow(0 0 6px #facc15)",
                    "drop-shadow(0 0 10px #facc15)",
                    "drop-shadow(0 0 6px #facc15)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />

              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To empower 10,000+ people every year through education,
              innovation, service, and community upliftment.
            </p>
          </motion.div>
        </div>

        {/* Vertical divider */}
        <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-yellow-500/30 z-0" />
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Plane, Cpu, School, Network } from "lucide-react";

const opportunities = [
  {
    icon: <Plane className="w-6 h-6 text-white" />,
    title: "Hajj & Umrah Services",
    desc: "Dedicated services for South India pilgrims with enhanced logistics and support.",
    color: "bg-rose-600"
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "AI-Based Automation",
    desc: "Smart tools and automations tailored for SMEs and growing enterprises.",
    color: "bg-indigo-600"
  },
  {
    icon: <School className="w-6 h-6 text-white" />,
    title: "Franchise Models",
    desc: "Scaling education and catering ventures through franchise networks.",
    color: "bg-emerald-600"
  },
  {
    icon: <Network className="w-6 h-6 text-white" />,
    title: "Web Learning",
    desc: "Immersive, creator-focused experiences powered by blockchain and decentralization.",
    color: "bg-yellow-600"
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const OpportunitiesGrid = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#000000e1]">
      <div className="max-w-7xl mx-auto">
         <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-center mb-16 px-4 md:px-8"
                >
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                    Future
                    <span className="text-[#facc15] not-italic"> Opportunities</span>
                  </h1>
                   <p className="mt-4 text-lg text-gray-300">
            Kamarudeen is exploring new opportunities in
          </p>
                </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="relative"
            >
              <div className={`absolute -inset-1 rounded-lg ${opportunity.color} blur-sm opacity-40`}></div>

              <div className="relative h-full bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className={`p-6 ${opportunity.color} transition-all duration-300 group-hover:bg-opacity-90`}>
                  <div className="w-14 h-14 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{opportunity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{opportunity.desc}</p>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OpportunitiesGrid;

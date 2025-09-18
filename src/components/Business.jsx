import { motion } from "motion/react";
import { staggerContainer, scale, slideIn } from "../ultiles/motion";
export default function Business() {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <motion.div
      variants={staggerContainer(0.3, 0.5)}
      initial="hidden"
      whileInView="show"
      className="overflow-hidden container mx-auto py-16 md:py-20 flex flex-col gap-10 px-10 sm:px-20 md:px-32 lg:px-40"
    >
      <motion.div
        variants={scale(0.5)}
        className="flex flex-col items-center gap-4"
      >
        <h2 className="text-3xl font-bold text-center">
          How can we help your Business ?
        </h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-2">
        {features.map((item, index) => {
          return (
            <motion.div
              variants={slideIn("left", "spring", 0.4, 1)}
              className="flex flex-col items-center gap-3 md:gap-4"
            >
              <div
                className="rounded-full text-2xl p-3"
                style={{
                  backgroundColor:
                    index == 0 ? "#F1EFFD" : index == 1 ? "#FEE7E7" : "#FFF3E4",
                }}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-center">{item.title}</h3>
              <p className="text-gray-700 text-center">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
      {/* /Icon Boxes */}
      <motion.div variants={scale(0.7)} className="flex justify-center">
        <button className="bg-blue-600 text-white rounded-2xl px-4 py-1 hover:shadow-xl hover:shadow-blue-300 hover:bg-blue-700  duration-700 cursor-pointer transition-all">
          Become a Partner
        </button>
      </motion.div>
      {/* /button */}
    </motion.div>
  );
}

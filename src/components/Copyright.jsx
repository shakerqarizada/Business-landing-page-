import { motion } from "motion/react";
import { staggerContainer, slideIn } from "../ultiles/motion";
export default function Copyright() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <motion.section
      variants={staggerContainer(0.5, 0.6)}
      initial="hidden"
      whileInView="show"
      className="flex justify-between container mx-auto px-10 py-5 text-sm"
    >
      <motion.div variants={slideIn("right", "spring")}>
        <p className="text-gray-700">Developed by Ahmad Shaker Qarizada</p>
      </motion.div>
      <motion.div variants={slideIn("left", "spring")}>
        <p className="text-gray-700">All rights reserved @ {year}</p>
      </motion.div>
    </motion.section>
  );
}

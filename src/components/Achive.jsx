import { motion } from "motion/react";
import { staggerContainer, scale } from "../ultiles/motion";
export default function Achive() {
  return (
    <div className="w-full  bg-gray-50" id="about">
      <motion.section
        variants={staggerContainer(0.6, 0.6)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col sm:flex-row py-16 md:py-20 container mx-auto px-10 sm:px-20 md:px-32 lg:px-40 gap-10 "
      >
        <motion.div variants={scale(0.5)} className="">
          <a href="" className="text-purple-600">
            achive more
          </a>
          <h2 className="text-3xl font-bold capitalize">
            Purpose of a convey is to keep your team
          </h2>
        </motion.div>
        <motion.div variants={scale(0.5)} className="">
          <h3 className="text-xl font-bold capitalize">Bulid for Impact</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            inventore.
          </p>
        </motion.div>
        <motion.div variants={scale(0.5)} className="">
          <h3 className="text-xl font-bold capitalize">In sync with you</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            inventore.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
}

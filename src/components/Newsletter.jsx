import { motion } from "motion/react";
import { scale } from "../ultiles/motion";
export default function Newsletter() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={scale(0.5)}
      className="flex flex-col lg:flex-row w-3/4 items-center gap-8 bg-blue-600 rounded-lg container mx-auto px-5 md:px-8 py-6 md:py-12"
    >
      <div className="text-white w-full lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold">Subscribe Newsletter</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, nobis.
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <form action="">
          <input
            className="bg-white px-1 sm:px-2 md:px-3 max-w-2/3 outline-none py-2 rounded-tl-xl rounded-bl-xl"
            type="email"
            placeholder="enter your email"
          />
          <button className="bg-green-400 overflow-hidden text-nowrap px-1 sm:px-2 md:px-3 max-w-1/3 py-2 rounded-tr-xl rounded-br-xl text-white cursor-pointer hover:bg-green-500 duration-700">
            Discover &rarr;
          </button>
        </form>
      </div>
    </motion.div>
  );
}

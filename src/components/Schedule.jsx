import statusimg from "../assets/stats.webp";
import { motion } from "motion/react";
import { staggerContainer, fadeIn } from "../ultiles/motion";
export default function Schedule() {
  return (
    <motion.div
      variants={staggerContainer(0.5, 0.5)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col md:flex-row container mx-auto px-10 sm:px-20 md:px-24 lg:px-40 py-16 md:py-20 gap-8 md:gap-4"
    >
      <motion.div
        variants={fadeIn("right", 0.6)}
        id="schedule_img"
        className="w-full md:w-1/2"
      >
        <img
          src={statusimg}
          alt=""
          className="h-full w-full hover:scale-[101%] duration-500 transition-all"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.6)}
        id="schedule_writting"
        className="w-full md:w-1/2 flex flex-col justify-center gap-4"
      >
        <a href="" className="text-orange-400 font-medium ">
          Schedule
        </a>
        <h2 className="text-2xl md:text-lg lg:text-3xl font-bold">
          Streamline your business with smart scheduling solutions
        </h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          laudantium tempora at pariatur molestiae modi voluptatem, a magni
          unde? Iste cumque quibusdam ratione assumenda, facere natus amet
          asperiores sit repellat!
        </p>
        <div className="flex gap-2 items-center hover:gap-3 duration-700">
          <a href="" className="text-blue-600 font-medium">
            Explore scheduling features
          </a>
          <span className="text-blue-600 text-xl"> &rarr; </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

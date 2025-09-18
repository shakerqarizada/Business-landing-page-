import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import woocommerce from "../assets/woocommerce.png";
import { motion } from "motion/react";
import { staggerContainer, slideIn } from "../ultiles/motion";
export default function Companies() {
  const logo = [slack, amazon, meundies, sitepoint, woocommerce];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer(0.6, 0.4)}
      className="flex flex-col md:flex-row gap-10 md:gap-3 container mx-auto mt-16 md:mt-20 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden "
    >
      <motion.div
        variants={slideIn("left", "spring")}
        className="px-5 border-l-2 border-blue-600 md:w-1/6 "
      >
        <p className="capitalize">
          Proud Partaner at <br /> hubspot and uber
        </p>
      </motion.div>
      {/* -------------- */}
      <motion.div
        variants={slideIn("righ", "spring")}
        className=" overflow-hidden flex "
      >
        <div className="n flex items-center whitespace-nowrap animate-marquee">
          {logo.map((ind) => {
            return (
              <img
                className="w-32 h-10 mx-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100  duration-500 cursor-pointer transition-all"
                key={ind}
                src={ind}
              />
            );
          })}
          {logo.map((ind) => {
            return (
              <img
                className="w-32 h-10 mx-8 grayscale opacity-80 hover:grayscale-0 hover:opacity-100  duration-500 cursor-pointer transition-all"
                key={`duplicate${ind}`}
                src={ind}
              />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

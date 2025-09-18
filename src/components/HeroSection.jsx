import { LuAlarmClock } from "react-icons/lu";
import { motion } from "motion/react";
import { textVariant, fadeIn, slideIn, scale } from "../ultiles/motion";
import { useState } from "react";

import heroimg from "../assets/hero-image.png";
import { text } from "motion/react-m";
export default function HeroSection() {
  const [email, setEamil] = useState("");
  function handleEmail(event) {
    setEamil(event.target.value);
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  return (
    <div className="overflow-hidden pt-16 md:pt-20 relative" id="home">
      <div className=" absolute bg-gradient-to-br w-1/2 md:w-1/3 h-1/3 md:h-1/2 -z-10 from-indigo-500/20 to-pink-500/20 rounded-br-full blur-3xl "></div>
      <section className="flex flex-col md:flex-row justify-between pb-6 px-4 sm:px-6 lg:px-8 mx-auto container">
        <div
          id="left-col "
          className="w-full md:w-1/2  mt-16 flex flex-col space-y-5"
        >
          <motion.div
            variants={slideIn("left", "tween", 0.1, 0.3)}
            initial="hidden"
            whileInView="show"
            id="star"
            className="flex space-x-2 px-3 rounded-full bg-gray-50 w-fit items-center group hover:bg-gray-100 duration-700 cursor-pointer"
          >
            <span className="text-blue-600 font-medium text-lg group-hover:scale-110 group-hover:text-amber-400 duration-700">
              &#9733;
            </span>
            <span className="text-sm font-medium">Jump start your growth</span>
          </motion.div>
          <div id="main-writing">
            <motion.h1
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView="show"
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight capitalize"
            >
              We Boost the Growth for
              <div className="text-blue-600 border-b-1 border-blue-200/50">
                Startup to fortune 500
                {/* <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-200/20"></span> */}
              </div>
              Companies <LuAlarmClock className="inline animate-pulse" />
            </motion.h1>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={textVariant(0.2)}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, debitis voluptates! Tempora reiciendis, dicta
              explicabo deserunt commodi odio et nostrum debitis inventore
            </p>
          </motion.div>
          <motion.div variants={scale(0.3)} initial="hidden" whileInView="show">
            <form action="" className="flex gap-3">
              <input
                className="border-gray-200 border-1 w-2/3 p-2 rounded-xl md:1/3 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all duration-700"
                type="email"
                placeholder="ahmad@gmial.com"
                value={email}
                onChange={handleEmail}
              />
              <input
                className=" rounded-xl py-2 font-bold transition-all hover:shadow-xl hover:shadow-blue-300 cursor-pointer px-4 text-white text-xl bg-blue-600 hover:bg-blue-700 duration-700"
                type="submit"
                value="&rarr;"
              />
            </form>
          </motion.div>
        </div>
        {/* left-col */}
        <div id="right-co" className="w-full md:w-1/2 mt-10 ">
          <motion.img
            variants={slideIn("right", "tween", 0, 0.3)}
            initial="hidden"
            whileInView="show"
            src={heroimg}
            alt=""
            className="relative hover:scale-[1.02] duration-500 transition-all md:mx-2 w-11/12 h-10/12"
          />
        </div>
        {/* right-col */}
      </section>
    </div>
  );
}

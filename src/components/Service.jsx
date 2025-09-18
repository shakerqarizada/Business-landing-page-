import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "motion/react";
import { staggerContainer, textVariant, slideIn } from "../ultiles/motion";
export default function () {
  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={staggerContainer(0, 0.4)}
        className="flex flex-col md:flex-row gap-16 container mx-auto px-10 sm:px-20 md:px-24 lg:px-40 py-16 md:py-20"
        id="services"
      >
        <motion.div
          variants={textVariant(0.5)}
          id="left"
          className="w-full md:w-1/2 flex flex-col gap-5"
        >
          <h2 className="text-3xl font-bold max-w-11/12">
            Future of support with new Shape
          </h2>
          <p className="text-gray-700 max-w-9/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            tempora assumenda nisi.
          </p>
          <ul>
            <li className="flex gap-3 items-center">
              <div className="w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-700"></div>
              </div>
              UX Design Strategy
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-4 h-4 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-indigo-700"></div>
              </div>
              Development bring
            </li>
          </ul>
          <button className="bg-blue-600 text-white rounded-full px-4 py-1 hover:shadow-xl hover:shadow-blue-300 hover:bg-blue-700  duration-700 cursor-pointer transition-all w-fit">
            Get Started
          </button>
        </motion.div>

        {/* --- /Left Side --- */}

        <div
          id="right"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-1/2"
        >
          {services.map((item) => {
            return (
              <motion.div
                variants={slideIn("down", "spring", 0.2, 0)}
                key={item.title}
                className="flex flex-col gap-3 hover:shadow-xl p-3 rounded-lg hover:scale-[101%] shadow-gray-300 duration-700 "
              >
                <i>{item.icon}</i>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
                <a
                  className="uppercase text-indigo-600 font-semibold hover:text-indigo-700"
                  href={item.link}
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
        {/* --- /Right Side --- */}
      </motion.section>
    </>
  );
}

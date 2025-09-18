import { BiCategory } from "react-icons/bi";
import { BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";

import { motion } from "motion/react";
import { staggerContainer, slideIn } from "../ultiles/motion";

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerContainer(0.6, 0.6)}
      className="flex flex-col md:flex-row container mx-auto px-10 sm:px-20 md:px-24 lg:px-40 py-16 md:py-20 gap-10 justify-between"
    >
      <motion.div
        variants={slideIn("left", "spring", 0.7)}
        className="md:max-w-1/3 gap-4 flex flex-col"
      >
        <h4 className="text-lg font-bold">
          <img src="fav-icon.png" alt="" className="inline" />
          The Next Design
        </h4>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          distinctio?
        </p>
        <div id="icons" className="flex gap-3">
          <a href="">
            <BsFacebook className="text-xl" />
          </a>
          <a href="">
            <BsLinkedin className="text-xl" />
          </a>
          <a href="">
            <BsTwitterX className="text-xl" />
          </a>
        </div>
      </motion.div>
      <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
        {Object.entries(footerLinks).map(([catagory, links], index) => {
          return (
            <motion.div
              variants={slideIn("down", "spring", 0.7)}
              key={catagory}
              className="flex flex-col gap-4"
            >
              <h3 className="text-2xl font-bold capitalize">{catagory}</h3>
              <ul>
                {links.map((link, index) => {
                  return (
                    <li
                      key={index}
                      className="text-gray-700 hove:text-gray-900 duration-700 mb-1.5"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "motion/react";
import { fadeIn } from "../ultiles/motion";

export default function Navbar() {
  const [isSelected, setIsSelected] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function menuToggle() {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonial", label: "Testimonial" },
  ];
  return (
    <>
      <motion.nav
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        className="overflow-hidden w-full fixed top-0 z-50 border-b border-gray-300 bg-gray-50"
      >
        <div className=" container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8 h-16 md:h-20">
          <div id="icon">
            <img src="./fav-icon.png" alt="" />
          </div>
          <div id="nav-menu" className="hidden md:block">
            {navLinks.map((link, ind) => {
              return (
                <a
                  className={`mx-4 text-sm relative after:absolute after:bg-blue-800 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:h-0.5 after:transition-all after:duration-700 ${
                    isSelected === link.href
                      ? "text-blue-700 after:w-full font-medium"
                      : "text-gray-600 hover:text-gray-900 duration-700"
                  }`}
                  key={ind}
                  href={link.href}
                  onClick={() => {
                    setIsSelected(link.href);
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* /Navlinks */}

          <div>
            <button className="bg-blue-600 text-sm text-white rounded-lg px-3 py-1.5 hidden md:block hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:shadow-blue-100 duration-700 cursor-pointer">
              <a>Get in touch</a>
            </button>
          </div>

          {/* /Get in Touch Button */}

          <div className=" md:hidden" id="mobile-nav">
            <button className="" onClick={menuToggle}>
              {isMenuOpen ? (
                <HiX className="size-6" />
              ) : (
                <HiMenu className="size-6" />
              )}
            </button>

            {isMenuOpen && (
              <div
                id="toggleDiv"
                className="fixed top-16 w-full right-0 z-50 border-t border-gray-100 py-4 px-4 space-y-3 bg-gray-100"
              >
                {navLinks.map((link, ind) => {
                  return (
                    <a
                      key={ind}
                      className={`block  ${
                        isSelected === link.href
                          ? "text-blue-600 font-medium"
                          : "text-gray-600 hover:text-gray-900 duration-700"
                      }`}
                      href={link.href}
                      onClick={() => {
                        setIsSelected(link.href);
                        menuToggle();
                      }}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <button className="bg-blue-600 text-sm text-white rounded-lg mx-0.5 py-1.5  hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:shadow-blue-100 duration-700 cursor-pointer w-full">
                  <a>Get in touch</a>
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.nav>
    </>
  );
}

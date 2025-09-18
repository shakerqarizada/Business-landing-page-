import { useState } from "react";
import { motion } from "motion/react";
import { fadeIn, scale } from "../ultiles/motion";
export default function () {
  const [products, setProducts] = useState(1);
  function productHandle(event) {
    setProducts(event.target.value);
  }
  const starterPrice = products * 30;
  const businessPrice = products * 50;
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center container mx-auto px-10 sm:px-20 md:px-24 lg:px-40 py-16 md:py-20 gap-10"
      >
        <motion.h2 variants={scale(0.5)} className="text-3xl font-bold">
          Pricing
        </motion.h2>

        <motion.div className="w-full flex flex-col items-center sm:flex-row gap-5">
          <motion.div
            variants={fadeIn("right", 0.5)}
            className="shadow-xl rounded-lg shadow-gray-200 px-4 py-5 w-4/5 sm:w-1/2"
          >
            <p className="text-gray-700">starter</p>
            <h3 className="text-2xl font-bold">{starterPrice}$/Month</h3>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            className="shadow-xl rounded-lg shadow-gray-200 px-4 py-5 w-4/5 sm:w-1/2"
          >
            <p className="text-gray-700">Business</p>
            <h3 className="text-2xl font-bold">{businessPrice}$/Month</h3>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeIn("up", 0.6)} className="w-full">
          <form action="" className="flex flex-col gap-2 ">
            <label htmlFor="items" className="text-center text-gray-700">
              {products} Products
            </label>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">1</span>
              <input
                type="range"
                name="items"
                className="cursor-pointer w-full accent-blue-600 appearance-none rounded-lg h-2 bg-gray-200"
                onChange={productHandle}
                min={1}
                max={50}
                value={products}
              />
              <span className="text-sm text-gray-700">50</span>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.7)}
          className="flex flex-col gap-2 items-center"
        >
          <p className="capitalize font-medium text-gray-700">
            ready to get started ?
          </p>
          <button className="bg-blue-600 text-white rounded-lg px-4 py-1 hover:shadow-xl hover:shadow-blue-300 hover:bg-blue-700  duration-700 cursor-pointer transition-all w-fit">
            Get Started
          </button>
        </motion.div>
      </motion.section>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "motion/react";
import { scale } from "../ultiles/motion";

const testimonials = [
  {
    id: 1,
    name: "Robin Ayala Doe",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
  },
  {
    id: 2,
    name: "John De marli",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
  },
  {
    id: 5,
    name: "Michael Chen",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
  },
];

export default function Testimonial() {
  return (
    <motion.section
      variants={scale(0.4)}
      initial="hidden"
      whileInView="show"
      id="testimonial"
      className="flex flex-col gap-20 container mx-auto px-10 sm:px-20 md:px-24 lg:px-40 py-16 md:py-20"
    >
      <div id="header" className="flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">What Our Happy Clients Say</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit.</p>
      </div>
      {/*  */}
      <div>
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="flex justify-center gap-10"
        >
          <div>
            {testimonials.map((items, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <div className="flex flex-col items-center gap-3 py-10">
                    <img className="rounded-full" src={items.image} />
                    <span>
                      {[...Array(5)].map((_, starIndex) => {
                        return (
                          <span
                            key={starIndex}
                            className="text-yellow-400 inline text-xl"
                          >
                            &#9733;
                          </span>
                        );
                      })}
                    </span>
                    <h3 className="text-2xl font-bold">{items.name}</h3>
                    <p className="text-gray-700 text-center">{items.text}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </motion.section>
  );
}

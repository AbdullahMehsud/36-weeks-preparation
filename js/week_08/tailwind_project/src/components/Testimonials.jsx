import React from "react";
import person1 from "../assets/person-1.jpg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../App.css";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      name: "Maria Jones",
      title: "CEO, Co-Founder, XYZ Inc.",
    },
    {
      id: 2,
      quote:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      name: "John Smith",
      title: "CTO, Tech Solutions",
    },
    {
      id: 3,
      quote:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      name: "Sarah Wilson",
      title: "Marketing Director",
    }
  ];

  return (
    <div className="w-full py-30">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-2">Testimonials</h1>
        <div className="w-full max-w-6xl px-2">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            centeredSlides={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <div className="w-full">
                  <blockquote className="text-center py-8 text-gray-600 px-48">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <img src={person1} className="rounded-full w-14" alt="" />
                    <p className="text-md font-semibold">{testimonial.name}</p>
                    <p className="text-sm pb-10 text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

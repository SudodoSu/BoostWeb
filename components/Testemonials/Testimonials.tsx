"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsContent } from "@/lib/Testimonials";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import "./testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="pt-32">
      <div className="container">
        <div className="flex justify-center font-Montserrat mb-16">
          <h2 className="text-sec text-4xl font-medium">
            What our customers think
          </h2>
        </div>

        <Swiper
          allowTouchMove={false}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className={`swiper-container-free-mode  `}
        >
          {TestimonialsContent.images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-wrapper">
              <div
                className={`flex justify-center flex-col bg-white/15 p-10 rounded-3xl
                    `}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="w-[100px] h-[100px] ">
                    <Image src={image.src} alt={image.alt} />
                  </div>
                  <div>
                    <FaQuoteLeft className="text-3xl" />
                  </div>
                </div>
                <div className="text-sec">
                  <h2 className="mb-5 text-xl font-Montserrat">{image.name}</h2>
                  <p className="font-Inter">{image.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

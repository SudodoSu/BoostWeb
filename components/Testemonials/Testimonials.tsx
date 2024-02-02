"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsContent } from "@/lib/Testimonials";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

function Testimonials() {
  return (
    <section>
      <div className="container">
        <div>
          <h2>What Our Clints Say</h2>
        </div>
        <div>
          <Swiper
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            effect={""}
            modules={[Autoplay]}
            slidesPerView={1}
          >
            {TestimonialsContent.images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center flex-col bg-white/15 p-10 rounded-3xl gap-4">
                  <h2 className="text-xl">{image.text}</h2>
                  <div className="w-[50%]">
                    <Image src={image.src} alt={image.alt} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

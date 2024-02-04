"use client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Content } from "@/lib/Content";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

function About() {
  return (
    <section className="pt-12 " id="about">
      <div className="flex flex-col gap-16 text-white font-Montserrat">
        <div className="flex flex-col container">
          <div className="blur_div_blue !bottom-[-20rem] !w-[250px] !left-[15rem] opacity-50 !blur-[150px]"></div>
          <div className="blur_div_orange !bottom-[-20rem] !w-[250px] !left-0 opacity-50 !bg-sec !blur-[150px]"></div>
          <p className="text-xl ">
            We're taking your digital strategy to the next level, together.
          </p>
          <div className="flex justify-between items-end">
            <h1>What we are up to</h1>
            <Link href="/" className="inline rounded-xl text-black ">
              <div className="btn2 btn2_hover bg-sec rounded-full text-lg">
                <div className="rounded-full bg-gradient-primary p-3">
                  <IoIosArrowRoundForward className="text-xl" />
                </div>
                <p className="font-Montserrat">Ask Us</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="z-10">
          <Swiper
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {Content.images.map((image, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <div
                    className={`flex justify-center flex-col bg-grey/30 p-10 rounded-3xl gap-4 ${
                      isActive ? "!bg-black/40" : ""
                    }`}
                  >
                    <h2 className="text-xl">{image.text}</h2>
                    <div className="w-[50%]">
                      <Image src={image.src} alt={image.alt} />
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
export default About;

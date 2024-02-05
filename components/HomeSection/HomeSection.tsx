import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./homesection.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

function HomeSection() {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container relative flex font-Montserrat">
        <div className="flex flex-col items-start z-10 gap-10">
          <p className="text-xl text-white font-Montserrat">
            Our mantere is simple:
          </p>
          <h1 className="font-Montserrat text-8xl font-Bold leading-snug text-white">
            Fuel Your <br /> Digital Evolution
          </h1>
          <Link href="/" className="inline rounded-xl">
            <div className="btn2 btn2_hover bg-sec rounded-full text-lg">
              <div className="rounded-full bg-gradient-primary p-3">
                <IoIosArrowRoundForward className="text-xl" />
              </div>
              <p className="font-Montserrat">Let's colaborate</p>
            </div>
          </Link>

          <a href="#about">
            <button className="p-4 bg-sec text-dark_blue border-grey border-[2px] border-solid rounded-full mt-40 btn2_hover">
              <IoIosArrowRoundDown size={30} />
            </button>
          </a>
        </div>
        <div className="absolute right-0">
          <div>
            <Image
              src="/assets/images/cubes_boostweb.png"
              alt="Cubes Home - Boost Web"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <ul className="flex flex-col gap-4 justify-start items-end">
              <li className="bg-black/40 border-grey border-[2px] border-solid rounded-full text-white py-1.5 px-3">
                SEO
              </li>
              <li className="bg-black/40 border-grey border-[2px] border-solid rounded-full text-white py-1.5 px-3">
                Design
              </li>
              <li className="bg-black/40 border-grey border-[2px] border-solid rounded-full text-white py-1.5 px-3">
                Development
              </li>
              <li className="bg-black/40 border-grey border-[2px] border-solid rounded-full text-white py-1.5 px-3">
                UI/UX Technologies
              </li>
            </ul>
          </div>
          <div className="blur_div_blue !right-[-20rem] !left-auto !bottom-auto top-[-10rem]"></div>
          <div className="blur_div_blue !right-[-5rem] !left-auto !bottom-auto top-[0rem]"></div>
          <div className="blur_div_blue !bottom-[20rem]"></div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

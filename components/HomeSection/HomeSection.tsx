import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./homesection.css";
import { IoIosArrowRoundForward } from "react-icons/io";

function HomeSection() {
  return (
    <section className="pt-20">
      <div className="container relative flex">
        <div className="flex flex-col items-start z-10 gap-4">
          <p className="text-xl text-white font-Montserrat">
            Our mantere is simple:
          </p>
          <h1 className="font-Montserrat text-8xl font-Bold text-white">
            Inovate
            <br /> some more
            <br /> Problem solving
          </h1>
          <Link href="/" className="inline rounded-xl">
            <div className="btn2 bg-sec rounded-full text-lg">
              <div className="rounded-full bg-gradient-primary p-3">
                <IoIosArrowRoundForward className="text-xl" />
              </div>
              <p className="font-Montserrat">Let's colaborate</p>
            </div>
          </Link>
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
          <div className="blur_div_blue"></div>
          <div className="blur_div_blue !bottom-0"></div>
          <div className="blur_div_orange"></div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;

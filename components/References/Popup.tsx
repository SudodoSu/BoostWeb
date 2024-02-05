"use client";
import Image, { StaticImageData } from "next/image";
import "./popup.css";
import { useGlobalContext } from "./References";
import { IoIosArrowRoundForward } from "react-icons/io";

interface PopupProps {
  title: string;
  image_src: StaticImageData;
  alt: string;
  des: string;
}

function Popup({ title, image_src, alt, des }: PopupProps) {
  const { openIndex, setOpenIndex } = useGlobalContext();
  return (
    <section className="inste-0 h-screen w-screen">
      <div className="container !max-w-[600px] bg-sec rounded-3xl border-grey border-[2px] border-solid">
        <div>
          <h2 className="text-3xl font-Montserrat font-medium">{title}</h2>
        </div>
        <div className="scrollable-content">
          <Image src={image_src} alt={alt} />
        </div>
        <div className="flex justify-between">
          <p className="font-Inter">{des}</p>
          <button
            onClick={() => setOpenIndex(!openIndex)}
            className="inline rounded-xl"
          >
            <div className="btn2 btn2_hover bg-sec rounded-full text-lg">
              <div className="rounded-full bg-gradient-primary p-3">
                <IoIosArrowRoundForward className="text-xl" />
              </div>
              <h2 className="text-sec text-xl font-Inter font-medium">Close</h2>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Popup;

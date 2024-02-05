"use client";
import { DesignSamples } from "@/lib/DesignSamples";
import Image from "next/image";
import Link from "next/link";
import { useState, createContext, useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Popup from "./Popup";

export type AppContextType = {
  openIndex: boolean;
  setOpenIndex: (_value: boolean) => void;
};

export const AppContext = createContext<AppContextType>({
  openIndex: false,
  setOpenIndex: (_value: boolean) => {},
});

export const useGlobalContext = () => useContext(AppContext);

function References() {
  const [openIndex, setOpenIndex] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleArticleClick = (index: number) => {
    setActiveIndex(index);
    setOpenIndex(!openIndex);
  };

  return (
    <section className="pt-32" id="references">
      <div className="container flex flex-col gap-8 text-sec font-Montserrat">
        <div className="mb-16 flex items-center justify-center flex-col relative">
          <h2 className="text-4xl mb-2 font-medium">Our Portfolio</h2>
          <p className="before_sub relative text-primary">
            250+ Successful Projects
          </p>
        </div>
        <AppContext.Provider value={{ openIndex, setOpenIndex }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DesignSamples.images.map(
              (item, index) =>
                index <= 5 && (
                  <article
                    key={index}
                    onClick={() => handleArticleClick(index)}
                    className="cursor-pointer"
                  >
                    <div className="flex justify-center">
                      <Image src={item.src} alt={item.alt} />
                    </div>
                  </article>
                )
            )}
            {openIndex && (
              <Popup
                image_src={DesignSamples.images[activeIndex].full_image_src}
                alt={DesignSamples.images[activeIndex].alt}
                title={DesignSamples.images[activeIndex].title}
                des={DesignSamples.images[activeIndex].text}
              />
            )}
          </div>
        </AppContext.Provider>
        <div className="flex justify-center">
          <Link href="/" className="inline rounded-xl">
            <div className="btn2 btn2_hover bg-sec rounded-full text-lg">
              <div className="rounded-full bg-gradient-primary p-3">
                <IoIosArrowRoundForward className="text-xl" />
              </div>
              <p className="font-Montserrat text-black">Load More</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default References;

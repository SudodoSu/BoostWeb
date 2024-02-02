import Image from "next/image";
import { HowItWorksContent } from "@/lib/HowItWorks";

function HowItWorks() {
  return (
    <section className="pt-32">
      <div className="container text-white font-Montserrat">
        <div className="mb-8 flex items-center justify-center flex-col relative">
          <h2 className="text-4xl mb-2">How It Works</h2>
          <p className="before_sub text-lg  relative text-primary">
            3 Simple Steps to Go
          </p>
        </div>
        <div className="flex gap-5">
          {HowItWorksContent.images.map((image, index) => (
            <article key={index} className="w-1/3">
              <div className="p-12 bg-grey rounded-3xl flex flex-col justify-center items-center gap-10 h-full">
                <div>
                  <Image src={image.src} alt={image.alt} />
                </div>
                <div className="text-center flex flex-col gap-4 items-center justify-center">
                  <h3 className="text-2xl">{image.title}</h3>
                  <p className="font-Inter">{image.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

import Image from "next/image";
import { HowItWorksContent } from "@/lib/HowItWorks";

function HowItWorks() {
  return (
    <section className="pt-20">
      <div className="container text-white">
        <div className="mb-4 flex items-center justify-center">
          <h2 className="text-4xl">How It Works</h2>
        </div>
        <div className="flex gap-5">
          {HowItWorksContent.images.map((image, index) => (
            <article key={index}>
              <div className="p-12 bg-grey rounded-3xl flex flex-col gap-10 h-full">
                <div>
                  <Image src={image.src} alt={image.alt} />
                </div>
                <div>
                  <h3>{image.title}</h3>
                  <p>{image.text}</p>
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

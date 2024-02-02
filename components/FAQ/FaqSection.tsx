import Image from "next/image";
import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="pt-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-center flex-col relative font-Montserrat">
          <h2 className="text-4xl mb-2 text-sec">Faq</h2>
          <p className="text-lg before_sub after:!right-[-40%] before:!left-[-40%] relative text-primary">
            Still not sure
          </p>
        </div>
        <div className="flex">
          <div className="w-3/5">
            <Faq />
          </div>
          <div className="w-2/5">
            <Image
              src="/assets/images/BOOSTWEB_logo.png"
              alt="Boost Web - Faq"
              width={500}
              height={68}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

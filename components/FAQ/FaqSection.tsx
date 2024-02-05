import Image from "next/image";
import Faq from "./Faq";

function FaqSection() {
  return (
    <section className="pt-32" id="faq">
      <div className="container">
        <div className="mb-16 flex items-center justify-center flex-col relative font-Montserrat">
          <div className="blur_div_blue !w-[250px] !left-auto right-0 !top-[10rem]  !blur-[150px]opacity-50"></div>
          <div className="blur_div_orange !w-[250px] !left-auto right-0 !top-[30rem] !blur-[150px]  !bg-gradient-primary"></div>
          <div className="blur_div_orange !w-[250px] !left-auto right-[20rem] !top-[15rem] !blur-[150px]  !bg-grey"></div>
          <h2 className="text-4xl mb-2 text-sec font-medium">Faq</h2>
          <p className="text-lg before_sub after:!right-[-40%] before:!left-[-40%] relative text-primary">
            Still not sure
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-3/5">
            <Faq />
          </div>
          <div className="md:w-2/5">
            <Image
              src="/assets/images/faq.png"
              alt="Boost Web - Faq"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

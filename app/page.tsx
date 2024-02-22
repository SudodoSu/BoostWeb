import About from "@/components/About/About";
import FaqSection from "@/components/FAQ/FaqSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import References from "@/components/References/References";
import Testimonials from "@/components/Testemonials/Testimonials";

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <HowItWorks />
      <FaqSection />
      <References />
      <Testimonials />
    </>
  );
}

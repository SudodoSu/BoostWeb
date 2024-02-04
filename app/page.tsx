import About from "@/components/About/About";
import FaqSection from "@/components/FAQ/FaqSection";
import Footer from "@/components/Footer/Footer";
import HomeSection from "@/components/HomeSection/HomeSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Nav from "@/components/Navigation/Nav";
import References from "@/components/References/References";
import Testimonials from "@/components/Testemonials/Testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeSection />
      <About />
      <HowItWorks />
      <FaqSection />
      <References />
      <Testimonials />
      <Footer />
    </>
  );
}

import About from "@/components/About/About";
import FaqSection from "@/components/FAQ/FaqSection";
import HomeSection from "@/components/HomeSection/HomeSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Nav from "@/components/Navigation/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeSection />
      <About />
      <HowItWorks />
      <FaqSection />
    </>
  );
}

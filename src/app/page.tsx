// import Image from "next/image";
import Hero from "./components/landing-page/Hero";
import FlipWord from "./components/landing-page/FlipWord";
import GifAnimation from "./components/landing-page/GifAnimation";
import ProfessionalTiles from "./components/landing-page/ProfessionalBlocks";
import FAQSection from "./components/landing-page/FaqSection";
import HINsection from "./components/landing-page/HINsection";
import MentorProfile from "./components/landing-page/MentorPrpfile";

export default function Home() {
  return (
    <div>
      <Hero />
      <FlipWord />
      <GifAnimation />
      <ProfessionalTiles />
      <HINsection />
      <MentorProfile />
      <FAQSection />
    </div>
  );
}

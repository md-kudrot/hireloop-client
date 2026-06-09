import FeaturesSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import HeroFooter from "@/components/HeroFooter";
import JobsSection from "@/components/JobSection";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Hero></Hero>
      <HeroFooter></HeroFooter>
      <JobsSection></JobsSection>
      <FeaturesSection></FeaturesSection>
    </div>
  );
}

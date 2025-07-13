import { WhyUsSection } from "@/components/WhyUsSection";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { GoogleRating } from "@/components/GoogleRating";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyUsSection />
      <FeaturedPackages />
      <GoogleRating />
      <Testimonials />
    </div>
  );
}

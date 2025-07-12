import { WhyUsSection } from "@/components/WhyUsSection";
import { HeroSection } from "@/components/HeroSection";
import { Packages } from "@/components/Packages";
import { GoogleRating } from "@/components/GoogleRating";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyUsSection />
      <Packages />
      <GoogleRating />
      <Testimonials />
    </div>
  );
}

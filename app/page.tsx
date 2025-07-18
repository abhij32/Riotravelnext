import { WhyUsSection } from "@/components/WhyUsSection";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { GoogleRating } from "@/components/GoogleRating";
import { Testimonials } from "@/components/Testimonials";

export const metadata = {
  title: "Rio Travels India",
  description:
    "Discover curated travel experiences across India with Rio Travels India. Book your next adventure today!",
  openGraph: {
    title: "Rio Travels India | Best Travel Packages",
    description:
      "Discover curated travel experiences across India with Rio Travels India. Book your next adventure today!",
    // images: ["/logo.png"],
  },
};

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

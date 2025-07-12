import ImagesSliderHero from "./ImageSliderHero";

export function HeroSection() {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <ImagesSliderHero />
      </div>
      {/* Content Overlay
      <div className="absolute inset-0 bg-black/40 z-10" />{" "}
      {/* Dark overlay for better text visibility */}
    </div>
  );
}

"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Airport Pickup/Dropoff",
    description:
      "Reliable and punctual airport transfer services. We ensure a comfortable journey to and from any airport in Delhi NCR, with professional drivers and well-maintained vehicles available 24/7.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1490650404312-a2175773bbf5?q=80&w=2070&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-xl"
          alt="Airport transfer service"
        />
      </div>
    ),
  },
  {
    title: "Outstation Trips",
    description:
      "Explore destinations beyond Delhi with our outstation travel services. Whether it's a weekend getaway or a long-distance journey, we provide experienced drivers and comfortable vehicles for a safe and enjoyable trip.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-xl"
          alt="Outstation travel"
        />
      </div>
    ),
  },
  {
    title: "Delhi Sightseeing",
    description:
      "Discover the rich heritage and vibrant culture of Delhi with our guided sightseeing tours. Visit historical monuments, explore local markets, and experience the best of what the capital city has to offer.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=2070&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-xl"
          alt="Delhi sightseeing"
        />
      </div>
    ),
  },
  {
    title: "Tailor-made Packages",
    description:
      "Customize your travel experience with our flexible tour packages. We design personalized itineraries based on your preferences, schedule, and budget to ensure a memorable journey tailored just for you.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?q=80&w=2070&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-xl"
          alt="Customized travel packages"
        />
      </div>
    ),
  },
  {
    title: "Marriage Doli Service",
    description:
      "Make your wedding day special with our premium doli service. We provide luxurious vehicles decorated to perfection, ensuring a memorable and comfortable journey for the wedding party. Our experienced drivers understand the significance of timeliness during wedding ceremonies.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover rounded-xl"
          alt="Wedding transport service"
        />
      </div>
    ),
  },
];

export function WhyUsSection() {
  return (
    <div className="p-2 md:p-10 max-w-[1200px] mx-auto">
      <StickyScroll content={content} />
    </div>
  );
}

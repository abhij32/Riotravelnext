"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { useEffect, useState } from "react";
import { getTestimonials } from "@/lib/packages";

function getColorForName(name: string) {
  // Google-style color palette
  const colors = [
    "#4285f4",
    "#34a853",
    "#fbbc04",
    "#ea4335",
    "#9c27b0",
    "#00bcd4",
    "#ff9800",
  ];
  // Simple hash to pick a color
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

function getAvatarSVG(name: string) {
  const letter = name.charAt(0).toUpperCase();
  const color = getColorForName(name);
  const svg = `<svg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'><circle cx='200' cy='200' r='180' fill='${color}'/><text x='200' y='240' font-family='Arial, sans-serif' font-size='160' font-weight='bold' text-anchor='middle' fill='white'>${letter}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

interface Testimonial {
  name: string;
  quote: string;
  src: string;
}

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getTestimonials()
      .then((data) => {
        console.log("Fetched testimonials data:", data);
        if (Array.isArray(data) && data.length > 0) {
          const processedTestimonials = data
            .filter(
              (t: { name?: string; quote?: string }) => t && t.name && t.quote
            )
            .map((t: { name: string; quote: string }) => ({
              name: t.name,
              quote: t.quote,
              src: getAvatarSVG(t.name),
            }));
          console.log("Processed testimonials:", processedTestimonials);
          setTestimonials(processedTestimonials);
        } else {
          console.log("No valid testimonials found");
          setTestimonials([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials");
        setTestimonials([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading testimonials...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (testimonials.length === 0) {
    return <div className="text-center py-20">No testimonials available.</div>;
  }

  return <AnimatedTestimonials testimonials={testimonials} />;
}

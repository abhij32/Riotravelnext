"use client";

import { useEffect, useState } from "react";
import { getPackages, Package } from "@/lib/packages";
import { Packages } from "./Packages";

export function FeaturedPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPackages().then((data) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const featured = data.some((p) => (p as any).featured)
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.filter((p) => (p as any).featured)
        : data.slice(0, 3); // fallback: first 3 packages
      setPackages(featured);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="py-12 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Featured Packages</h2>
        <div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Packages
      </h2>
      <Packages packages={packages} />
      <div className="flex justify-center mt-8">
        <a
          href="/packages"
          className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View All Packages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

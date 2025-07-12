"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Package, getPackages } from "@/lib/packages";

export function Packages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const data = await getPackages();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Packages</h2>
        <p>Loading packages...</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <CardContainer key={pkg.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="100"
                className="w-full h-52 rounded-xl overflow-hidden"
              >
                <Image
                  src={pkg.images[0]} // Using the first image from the array
                  alt={pkg.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </CardItem>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
              >
                {pkg.title}
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-3xl font-bold text-black dark:text-white mt-2"
              >
                ₹{pkg.price.toLocaleString("en-IN")}
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {pkg.description}
              </CardItem>
              <CardItem translateZ="30" className="mt-4">
                <ul className="space-y-2">
                  {pkg.inclusions.slice(0, 4).map((inclusion, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-green-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {inclusion}
                    </li>
                  ))}
                </ul>
              </CardItem>
              <div className="w-full mt-6">
                <button className="rounded-lg h-10 w-full bg-black dark:bg-white dark:text-black text-white text-sm font-bold transition-colors hover:bg-black/80">
                  Book Now
                </button>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* View All Packages Button */}
      <div className="flex justify-center mt-4">
        <a
          href="/packages"
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { Packages } from "@/components/Packages";
import { getPackages, Package } from "@/lib/packages";

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPackages().then((data) => {
      setPackages(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Travel Packages
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover our complete collection of carefully curated travel
            experiences across India
          </p>
        </div>
      </div>

      {/* Packages Component */}
      <div className="bg-white dark:bg-gray-900 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
          </div>
        ) : (
          <Packages packages={packages} />
        )}
      </div>
    </div>
  );
}

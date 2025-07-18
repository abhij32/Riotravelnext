import { getPackages } from "@/lib/packages";
import { PackagesClient } from "@/app/packages/PackagesClient";

export const metadata = {
  title: "Packages | Rio Travels India",
  description:
    "Explore our curated travel packages across India. Book your next adventure today!",
  openGraph: {
    title: "Packages | Rio Travels India",
    description:
      "Explore our curated travel packages across India. Book your next adventure today!",
    // images: ["/logo.png"],
  },
};

export default async function PackagesPage() {
  const packages = await getPackages();
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
        <PackagesClient packages={packages} />
      </div>
    </div>
  );
}

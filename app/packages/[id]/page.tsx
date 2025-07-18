import { getPackages, getPackageById } from "@/lib/packages";
import { ImagesSlider } from "@/components/ui/images-slider";
import BookNowModal from "@/components/BookNowModal";

export async function generateStaticParams() {
  const packages = await getPackages();
  return packages.map((pkg) => ({ id: encodeURIComponent(pkg.id) }));
}

interface PackageDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const decodedId = decodeURIComponent(params.id);
  const pkg = await getPackageById(decodedId);
  if (!pkg) return { title: "Package Not Found" };
  return {
    title: pkg.title + " | Rio Travels India",
    description: pkg.description,
    openGraph: {
      title: pkg.title,
      description: pkg.description,
      // Add image if available
    },
  };
}

type ItineraryDay = {
  day: number;
  description: string;
  title?: string;
  activities?: string[];
  accommodation?: string;
  meals?: string[];
  distance?: string;
  travelTime?: string;
};

export default async function PackageDetailPage({
  params,
}: PackageDetailPageProps) {
  const decodedId = decodeURIComponent(params.id);
  const pkg = await getPackageById(decodedId);

  if (!pkg) {
    return <div className="text-center py-12">Package not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 md:px-8">
      {/* Unique Header with Accent Bar and Floating Description Card */}
      <div className="mb-8 flex flex-col md:flex-row items-start gap-8 relative">
        {/* Vertical Accent Bar */}
        <div className="hidden md:block w-2 h-32 rounded-full bg-gradient-to-b from-blue-500 via-blue-300 to-green-300 shadow-lg mr-6 mt-2" />
        <div className="flex-1">
          <div className="mb-2 text-sm uppercase tracking-widest text-blue-500 font-semibold">
            Package Overview
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight drop-shadow-sm">
            {pkg.title}
          </h1>
          {/* Simple Short Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold mb-8 max-w-2xl">
            {pkg.description}
          </p>
          <BookNowModal packageTitle={pkg.title} />
        </div>
      </div>

      {/* Duration Highlight Card */}
      {pkg.duration && (
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-8 py-4 rounded-2xl shadow-lg text-xl font-bold border-4 border-white dark:border-gray-800">
            <span className="mr-2">⏳</span> Duration: {pkg.duration}
          </div>
        </div>
      )}

      {/* Image Carousel */}
      {pkg.images && pkg.images.length > 0 && (
        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-2xl h-64 md:h-96 rounded-xl overflow-hidden shadow-lg relative">
            <ImagesSlider images={pkg.images}>
              <></>
            </ImagesSlider>
          </div>
        </div>
      )}

      {/* Price Table */}
      {pkg.price && typeof pkg.price === "object" && (
        <div className="mb-10 bg-blue-50 dark:bg-blue-950 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
            Prices
          </h2>
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="bg-blue-100 dark:bg-blue-900">
              <tr>
                <th className="py-2 px-4 text-left">Car Type</th>
                <th className="py-2 px-4 text-left">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(pkg.price).map(([car, price]) => (
                <tr key={car}>
                  <td className="py-2 px-4">{car}</td>
                  <td className="py-2 px-4">
                    ₹{Number(price).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Inclusions & Exclusions */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {pkg.inclusions && (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <span className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2 block">
              Inclusions
            </span>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200 text-sm">
              {pkg.inclusions.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>
          </div>
        )}
        {pkg.exclusions && (
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
            <span className="text-lg font-semibold text-red-700 dark:text-red-300 mb-2 block">
              Exclusions
            </span>
            <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200 text-sm">
              {pkg.exclusions.map((exc) => (
                <li key={exc}>{exc}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Itinerary */}
      {pkg.itinerary && (
        <div className="mb-10 bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
            Itinerary
          </h2>
          <div className="space-y-6">
            {(pkg.itinerary as ItineraryDay[]).map((d, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-1">
                  Day {d.day}
                  {d.title ? `: ${d.title}` : ""}
                </h3>
                <p className="mb-2 text-gray-700 dark:text-gray-200">
                  {d.description}
                </p>
                {d.activities && (
                  <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {d.activities.map((act) => (
                      <li key={act}>{act}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {d.accommodation && (
                    <span>
                      <strong>Accommodation:</strong> {d.accommodation}
                    </span>
                  )}
                  {d.meals && (
                    <span>
                      <strong>Meals:</strong> {d.meals.join(", ")}
                    </span>
                  )}
                  {d.distance && (
                    <span>
                      <strong>Distance:</strong> {d.distance}
                    </span>
                  )}
                  {d.travelTime && (
                    <span>
                      <strong>Travel Time:</strong> {d.travelTime}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-center mb-8">
        <BookNowModal packageTitle={pkg.title} />
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { getPackageById, Package } from "@/lib/packages";
import { usePackageContext } from "@/components/PackageContext";
import { ImagesSlider } from "@/components/ui/images-slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Update the itinerary type to allow for all fields
interface ItineraryDay {
  day: number;
  title?: string;
  description: string;
  activities?: string[];
  accommodation?: string;
  meals?: string[];
  distance?: string;
  travelTime?: string;
}

export default function PackageDetailPage() {
  const { id } = useParams();
  const { selectedPackage } = usePackageContext();
  const [pkg, setPkg] = useState<
    (Package & { itinerary?: ItineraryDay[] }) | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const decodedId = decodeURIComponent(String(id));
    console.log("decodedId:", decodedId);
    console.log("selectedPackage:", selectedPackage);
    if (selectedPackage && String(selectedPackage.id) === decodedId) {
      setPkg(selectedPackage);
      setLoading(false);
    } else if (id) {
      setLoading(true);
      getPackageById(decodedId).then((data) => {
        setPkg(data);
        setLoading(false);
      });
    }
  }, [id, selectedPackage]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

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
          <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
            <button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 w-full md:w-auto cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              Book Now
            </button>
          </div>
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
            {(pkg.itinerary as ItineraryDay[]).map((day, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-1">
                  Day {day.day}
                  {day.title ? `: ${day.title}` : ""}
                </h3>
                <p className="mb-2 text-gray-700 dark:text-gray-200">
                  {day.description}
                </p>
                {day.activities && (
                  <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {day.activities.map((act: string) => (
                      <li key={act}>{act}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {day.accommodation && (
                    <span>
                      <strong>Accommodation:</strong> {day.accommodation}
                    </span>
                  )}
                  {day.meals && (
                    <span>
                      <strong>Meals:</strong> {day.meals.join(", ")}
                    </span>
                  )}
                  {day.distance && (
                    <span>
                      <strong>Distance:</strong> {day.distance}
                    </span>
                  )}
                  {day.travelTime && (
                    <span>
                      <strong>Travel Time:</strong> {day.travelTime}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Book Now Button */}
      <div className="flex justify-center">
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Book Now
        </button>
      </div>

      {/* Booking Modal */}
      <Sheet open={modalOpen} onOpenChange={setModalOpen}>
        <SheetContent side="right" className="max-w-md w-full">
          <SheetHeader>
            <SheetTitle>Book This Package</SheetTitle>
          </SheetHeader>
          <form
            className="space-y-6 mt-6"
            onSubmit={async (e) => {
              e.preventDefault();
              setFormLoading(true);
              setFormSuccess(null);
              setFormError(null);
              const name = nameRef.current?.value || "";
              const mobile = mobileRef.current?.value || "";
              const message = `Booking enquiry for ${pkg.title}\nName: ${name}\nMobile: ${mobile}`;
              try {
                const res = await fetch(
                  "https://api.emailjs.com/api/v1.0/email/send",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      lib_version: "3.2.0",
                      user_id: "user_IIHiXIBQsN7yEOyzbMXwO",
                      service_id: "service_wclajtp",
                      template_id: "template_kakd1b9",
                      template_params: { message },
                    }),
                  }
                );
                if (res.ok) {
                  setFormSuccess(
                    "Your enquiry has been sent! We'll contact you soon."
                  );
                  setFormLoading(false);
                } else {
                  setFormError(
                    "Failed to send. Please try again or contact us directly."
                  );
                  setFormLoading(false);
                }
              } catch {
                setFormError(
                  "Failed to send. Please try again or contact us directly."
                );
                setFormLoading(false);
              }
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                ref={nameRef}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="Your Name"
                disabled={formLoading}
              />
            </div>
            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                pattern="[0-9]{10}"
                ref={mobileRef}
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
                placeholder="10-digit Mobile Number"
                disabled={formLoading}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors duration-200 cursor-pointer"
                disabled={formLoading || !!formSuccess}
              >
                {formLoading ? "Sending..." : "Submit"}
              </button>
            </div>
            {formSuccess && (
              <div className="text-green-600 text-center font-semibold mt-2">
                {formSuccess}
              </div>
            )}
            {formError && (
              <div className="text-red-600 text-center font-semibold mt-2">
                {formError}
              </div>
            )}
          </form>
          <div className="mt-8 border-t pt-6 flex flex-col items-center">
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Or contact us directly:
            </div>
            <div className="flex flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                {/* New phone icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5.75v2.5A16.5 16.5 0 0 0 15.75 21h2.5a2 2 0 0 0 2-2v-2.2a2 2 0 0 0-1.45-1.93l-3.1-.77a2 2 0 0 0-2.18.73l-.7.93a12.06 12.06 0 0 1-5.36-5.36l.93-.7a2 2 0 0 0 .73-2.18l-.77-3.1A2 2 0 0 0 5.95 4.25H3.75a2 2 0 0 0-2 2z"
                  />
                </svg>
                <a
                  href="tel:+919811244451"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  +91 98112 44451
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A12 12 0 0 0 3.48 20.52a12 12 0 0 0 17.04-17.04zm-8.52 16.02a9.98 9.98 0 0 1-5.1-1.4l-.36-.21-3.02.8.81-2.94-.23-.37A9.98 9.98 0 1 1 12 19.5zm5.2-7.2c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.56-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.62-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
                <a
                  href="https://wa.me/919811244451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-semibold"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

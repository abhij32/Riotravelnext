"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Package } from "@/lib/packages";
import { useRouter } from "next/navigation";
import { usePackageContext } from "@/components/PackageContext";

export function Packages({ packages }: { packages: Package[] }) {
  const router = useRouter();
  const { setSelectedPackage } = usePackageContext();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
      {packages.map((pkg) => (
        <CardContainer key={pkg.id} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="100"
              className="w-full h-52 rounded-xl overflow-hidden"
            >
              <Image
                src={pkg.images[0]}
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
              ₹{Math.min(...Object.values(pkg.price)).toLocaleString("en-IN")}
            </CardItem>
            {/* Remove the CardItem for short description entirely */}
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
            <div className="w-full mt-6">
              <button
                className="rounded-lg h-10 w-full bg-black dark:bg-white dark:text-black text-white text-sm font-bold transition-colors hover:bg-black/80 cursor-pointer"
                onClick={() => {
                  setSelectedPackage(pkg);
                  router.push(`/packages/${pkg.id}`);
                }}
              >
                Book Now
              </button>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

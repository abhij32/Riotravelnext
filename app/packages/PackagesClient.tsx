"use client";

import { Packages } from "@/components/Packages";
import { Package } from "@/lib/packages";

export function PackagesClient({ packages }: { packages: Package[] }) {
  if (!packages || packages.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }
  return <Packages packages={packages} />;
}

"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Package } from "@/lib/packages";

interface PackageContextType {
  selectedPackage: Package | null;
  setSelectedPackage: (pkg: Package | null) => void;
}

const PackageContext = createContext<PackageContextType | undefined>(undefined);

export function PackageProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  );
}

export function usePackageContext() {
  const ctx = useContext(PackageContext);
  if (!ctx)
    throw new Error("usePackageContext must be used within a PackageProvider");
  return ctx;
}

import { ref, get } from "firebase/database";
import { db } from "./firebase";

export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  images: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    description: string;
  }[];
}

export async function getPackages(): Promise<Package[]> {
  try {
    const packagesRef = ref(db, "packagesv2");
    const snapshot = await get(packagesRef);

    if (snapshot.exists()) {
      const packagesData = snapshot.val();
      console.log(packagesData);
      return Object.keys(packagesData).map((key) => ({
        id: key,
        ...packagesData[key],
      }));
    }

    return [];
  } catch (error) {
    console.error("Error fetching packages:", error);
    return [];
  }
}

export async function getPackageById(id: string): Promise<Package | null> {
  try {
    const packageRef = ref(db, `packagesv2/${id}`);
    const snapshot = await get(packageRef);

    if (snapshot.exists()) {
      return {
        id,
        ...snapshot.val(),
      };
    }

    return null;
  } catch (error) {
    console.error("Error fetching package:", error);
    return null;
  }
}

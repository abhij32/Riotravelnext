import { ContactUs } from "@/components/ContactUs";
export const metadata = {
  title: "Contact Us | Rio Travels India",
  description:
    "Get in touch with Rio Travels India for bookings, queries, and support.",
  openGraph: {
    title: "Contact Us | Rio Travels India",
    description:
      "Get in touch with Rio Travels India for bookings, queries, and support.",
  },
};
export default function ContactPage() {
  return (
    <main>
      {/* <div className="min-h-[200px] bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
      </div> */}
      <ContactUs />
    </main>
  );
}

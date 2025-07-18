"use client";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { sendEmail } from "@/lib/email";

interface BookNowModalProps {
  packageTitle: string;
}

export default function BookNowModal({ packageTitle }: BookNowModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", mobile: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const message = `Name: ${form.name}\nMobile: ${form.mobile}\nPackage: ${packageTitle}`;
      await sendEmail(message);
      setSuccess(true);
      setForm({ name: "", mobile: "" });
    } catch {
      setError("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Sheet open={modalOpen} onOpenChange={setModalOpen}>
      <SheetTrigger asChild>
        <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-12 py-6 rounded-xl shadow-lg mb-8 text-xl transition-all duration-200 cursor-pointer">
          Book Now
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-md w-full">
        <SheetHeader>
          <SheetTitle>Book This Package</SheetTitle>
        </SheetHeader>
        <div className="mt-4">
          {success ? (
            <div className="text-green-600 font-semibold text-center py-8">
              Thank you! We have received your booking request.
              <br />
              We will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleFormChange}
                required
              />
              <Input
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleFormChange}
                required
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={submitting}
              >
                {submitting ? "Booking..." : "Submit"}
              </Button>
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
            </form>
          )}
          <div className="mt-10 border-t pt-6">
            <div className="text-base text-gray-700 dark:text-gray-200 mb-3 font-semibold text-center">
              Or contact us directly:
            </div>
            <div className="flex flex-col gap-3 items-center">
              <a
                href="tel:+919811244451"
                className="flex items-center gap-2 text-blue-700 font-bold hover:underline text-lg"
              >
                <Phone className="w-5 h-5" /> +91 98112 44451
              </a>
              <a
                href="https://wa.me/919811244451"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 font-bold hover:underline text-lg"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp: +91 98112 44451
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
      {/* Bottom Book Now button for easy access
      <div className="flex justify-center mt-8 mb-4">
        <SheetTrigger asChild>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-12 py-6 rounded-xl shadow-lg text-xl transition-all duration-200 cursor-pointer">
            Book Now
          </Button>
        </SheetTrigger>
      </div> */}
    </Sheet>
  );
}

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="tel:+919811244451"
                className="hover:text-blue-400 transition-colors"
              >
                +91 98112 44451
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <a
                href="https://wa.me/919811244451"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:info@riotravelsindia.com"
                className="hover:text-red-400 transition-colors"
              >
                info@riotravelsindia.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <a
                href="https://www.google.com/maps/dir//RIO+TRAVELS+INDIA+869-+A+Nyay+Khand+2,+Indirapuram+Ghaziabad,+Uttar+Pradesh+201014/@28.6395855,77.3597834,16z"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                869-A, Nyay Khand 2, Indirapuram, Ghaziabad, UP 201014
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {/* <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li> */}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/packages">Packages</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm">
          © {new Date().getFullYear()} Rio Travels India. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

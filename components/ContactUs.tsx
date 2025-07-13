"use client";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Facebook,
  Instagram,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service_id: "service_wclajtp",
    template_id: "template_kakd1b9",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the payload
    const payload = {
      templat_params: {
        message: formData.toString(),
      },
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success (e.g., show a success message)
      console.log("Message sent successfully:", payload);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 98112 44451",
      href: "tel:+919811244451",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+91 98112 44451",
      href: "https://wa.me/919811244451",
      hoverColor: "hover:text-green-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "info@riotravelsindia.com",
      href: "mailto:info@riotravelsindia.com",
      hoverColor: "hover:text-red-600",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      value: "869-A, Nyay Khand 2, Indirapuram, Ghaziabad, UP 201014",
      href: "https://www.google.com/maps/dir//RIO+TRAVELS+INDIA+869-+A+Nyay+Khand+2,+Indirapuram+Ghaziabad,+Uttar+Pradesh+201014/@28.6395855,77.3597834,16z",
      multiline: true,
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      title: "Facebook",
      value: "Rio Travels India",
      href: "https://facebook.com/riotravelsindia",
      hoverColor: "hover:text-[#1877F2]",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      title: "Instagram",
      value: "@riotravelsindia",
      href: "https://instagram.com/riotravelsindia",
      hoverColor: "hover:text-[#E4405F]",
    },
  ];

  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? We&apos;re here to help. Contact
            us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">{info.icon}</div>
                  <div>
                    <h3 className="font-medium text-gray-900">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-gray-600 ${info.hoverColor} transition-colors`}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.multiline ? (
                          <p className="whitespace-pre-line">{info.value}</p>
                        ) : (
                          info.value
                        )}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-8"
            >
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-gray-50"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-gray-50"
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="bg-gray-50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-sm h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0011089455696!2d77.35978341744384!3d28.639585582417293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7255a6a61d%3A0x166c827bb2d2df3e!2sRIO%20TRAVELS%20INDIA!5e0!3m2!1sen!2sin!4v1709825037197!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

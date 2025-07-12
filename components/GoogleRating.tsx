"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ratings = [
  {
    platform: "Google",
    rating: 4.9,
    reviews: "250+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://g.page/r/CT7f0rJ7gmwWEAI/review",
    color: "text-blue-600",
    borderColor: "border-blue-600",
    hoverColor: "hover:bg-blue-50",
  },
  {
    platform: "JustDial",
    rating: 4.8,
    reviews: "180+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Justdial_Logo.svg",
    link: "https://www.justdial.com/Ghaziabad/Rio-Travels-India-Indirapuram/011PXX11-XX11-181127201545-P9U4_BZDET/writereview",
    color: "text-red-600",
    borderColor: "border-red-600",
    hoverColor: "hover:bg-red-50",
  },
  {
    platform: "Facebook",
    rating: 4.7,
    reviews: "120+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    link: "https://www.facebook.com/riotravels123/reviews",
    color: "text-[#1877F2]",
    borderColor: "border-[#1877F2]",
    hoverColor: "hover:bg-blue-50",
  },
];

// Add StarRating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {[1, 2, 3, 4, 5].map((index) => {
        const difference = rating - index + 1;

        if (difference >= 1) {
          // Full star
          return (
            <Star
              key={index}
              className="w-6 h-6 fill-yellow-400 text-yellow-400"
            />
          );
        } else if (difference > 0) {
          // Partial star
          const percentage = Math.round(difference * 100);
          return (
            <div key={index} className="relative w-6 h-6">
              <Star className="absolute w-6 h-6 text-yellow-400" />
              <div
                className="absolute w-6 h-6 overflow-hidden"
                style={{ width: `${percentage}%` }}
              >
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          );
        } else {
          // Empty star
          return <Star key={index} className="w-6 h-6 text-yellow-400" />;
        }
      })}
    </div>
  );
};

export function GoogleRating() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Travelers
          </h2>
          <p className="text-gray-600">
            See what our customers say about us across platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ratings.map((platform, index) => (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              {/* Platform Logo */}
              <div className="h-8 mb-6 flex items-center justify-center">
                <Image
                  src={platform.logo}
                  alt={platform.platform}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Replace the old star rating with the new component */}
              <div className="mb-4">
                <StarRating rating={platform.rating} />
              </div>

              {/* Rating Score */}
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-gray-900">
                  {platform.rating}
                </p>
                <p className="text-gray-600">
                  Based on {platform.reviews} reviews
                </p>
              </div>

              {/* Review Button */}
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex w-full items-center justify-center px-6 py-3 text-base font-semibold ${platform.color} border-2 ${platform.borderColor} rounded-lg ${platform.hoverColor} transition-colors duration-200`}
              >
                Write a Review
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

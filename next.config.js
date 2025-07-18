/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.studyfry.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raftingcampingrishikesh.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "onlineholidays.in",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

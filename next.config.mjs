/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "links.papareact.com",
        protocol: "https",
      },
      {
        hostname: "image.tmdb.org",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;

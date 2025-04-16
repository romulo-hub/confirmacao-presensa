import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // necessário para PWA funcionar em alguns casos
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
};

export default withPWA(nextConfig);

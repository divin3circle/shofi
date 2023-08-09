/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
  purge: ["./src/components/**/*.{js,jsx}", "./public/index.html"],
};

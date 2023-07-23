/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;

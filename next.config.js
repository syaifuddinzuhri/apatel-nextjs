/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  publicRuntimeConfig: {
    // Will be available on both server and client
    API_URL: process.env.API_URL,
  },
  images: { domains: ["rs-dev.promosindo.web.id"] },
};

module.exports = nextConfig;

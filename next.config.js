/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_STUDENTS: process.env.API_STUDENTS,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos','cdn.tuk.dev','tailwindui.com','i.ibb.co']
  },
}

module.exports = nextConfig

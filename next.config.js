/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    prod ? "https://devxe.github.io/blog" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
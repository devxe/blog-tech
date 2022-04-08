/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://devxe.github.io/blog" : "",
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;

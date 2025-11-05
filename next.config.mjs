/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo name is different from fayaj-nakib.github.io, add basePath
  // basePath: '/your-repo-name',
  // trailingSlash: true,
};

export default nextConfig;

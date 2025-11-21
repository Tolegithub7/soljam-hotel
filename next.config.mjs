/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudflareimages.com'
      },
      {
        protocol: 'https',
        hostname: '**.cloudflare.com'
      }
    ]
  }
};

export default nextConfig;

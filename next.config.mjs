/** @type {import('next').NextConfig} */
const nextConfig = {
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

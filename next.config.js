/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zajjddapctiromtjxths.supabase.co', // <-- NOUVEAU DOMAINE
        pathname: '/storage/v1/object/public/**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
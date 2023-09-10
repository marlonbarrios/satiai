// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  publicRuntimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NFT_STORAGE_KEY: process.env.NFTSTORAGE_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
        pathname: '/private/org-nme4g4rVJGaoPuJjfFThxSUy/user-1uhSolqJzWzEFRDVSv9wVauu/**',
      },
    ],
  },
};

module.exports = nextConfig;

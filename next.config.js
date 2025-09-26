/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TMDB_API_KEY: '8c247ea0b4b56ed2ff7d41c9a833aa77',
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 
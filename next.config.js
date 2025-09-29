/** @type {import('next').NextConfig} */
const nextConfig = {
  // env supprimé, la clé TMDB doit être définie dans les variables d'environnement Vercel
  images: {
    domains: ['image.tmdb.org'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig 
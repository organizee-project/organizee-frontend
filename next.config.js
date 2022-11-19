/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "conteudo.imguol.com.br",
      "organizee-public-files.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;

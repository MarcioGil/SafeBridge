/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = withPWA({
  images: {
    domains: [], // Adicione domínios confiáveis para imagens
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
});

nextConfig.reactStrictMode = true;

module.exports = nextConfig;

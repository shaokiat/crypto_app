/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: 'Cryptoverse',
    API_DEV: 'http://localhost:8000/api',
    PRODUCTION: false,
  },
};

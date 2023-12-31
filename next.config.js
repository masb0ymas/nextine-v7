const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_VERSION: process.env.APP_VERSION,
    URL_ENV: process.env.URL_ENV,
    SITE_URL: process.env.SITE_URL,
    BASE_URL: process.env.BASE_URL,
    AXIOS_TIMEOUT: process.env.AXIOS_TIMEOUT,
    LOCAL_STORAGE_SESSION: process.env.LOCAL_STORAGE_SESSION,
  },
  output: 'standalone',
});

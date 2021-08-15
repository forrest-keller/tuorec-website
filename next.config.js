const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["media.graphcms.com"],
  },
  pwa: {
    dest: "public",
  },
});

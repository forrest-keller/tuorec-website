module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["media.graphcms.com"],
  },
  pwa: {
    dest: "public",
  },
  async redirects() {
    return [
      {
        source: "/host",
        destination: "https://vercel.com/tuorec/website",
        basePath: false,
        permanent: true,
      },
      {
        source: "/edit",
        destination:
          "https://app.graphcms.com/65a9bb4871124061ba3738f64f126fbe/master/content",
        basePath: false,
        permanent: true,
      },
      {
        source: "/repo",
        destination: "https://github.com/tuorec/website",
        basePath: false,
        permanent: true,
      },
    ];
  },
};

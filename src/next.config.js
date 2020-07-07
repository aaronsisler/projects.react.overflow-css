const withSass = require("@zeit/next-sass");

const nextConfig = {
  distDir: "../.next"
};

module.exports = withSass({
  ...nextConfig,
  webpack(config) {
    return config;
  }
});

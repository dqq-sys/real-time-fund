// next.config.js（CommonJS）
const isProd = process.env.GITHUB_ACTIONS === "true";

module.exports = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/real-time-fund" : "",
  assetPrefix: isProd ? "/real-time-fund/" : "",
};

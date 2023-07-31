/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true, //빌드시 에러 무시 - 나중에 제거해주세요.
  },
};

// next.config.js
module.exports = {
    webpack: (config) => {
        config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        });

        return config;
    },
};
// module.exports = nextConfig

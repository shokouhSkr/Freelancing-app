/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/owner",
        destination: "/owner/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

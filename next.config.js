/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCLG45X1YqJeN7fmdd1RT12w',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

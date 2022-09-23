/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/GermanITSkills',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/german.it.skills',
        permanent: false,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/GermanITSkills',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/channel/UCLG45X1YqJeN7fmdd1RT12w',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

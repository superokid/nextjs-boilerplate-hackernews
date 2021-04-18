module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/top/1',
        permanent: true,
      },
      {
        source: '/top',
        destination: '/top/1',
        permanent: true,
      },
    ];
  },
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/canva',
        destination: 'https://lych.my.canva.site',
      },
    ]
  },
}
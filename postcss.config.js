module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-preset-env': {},
    'postcss-pxtorem': {
      rootValue: 75,
      propList: ['*'],
      selectorBlackList: ['html'],
      minPixelValue: 1.5,
      mediaQuery: false,
      exclude: 'common',
    },
    cssnano: {},
  },
}

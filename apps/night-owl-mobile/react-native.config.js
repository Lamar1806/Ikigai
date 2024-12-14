const path = require('path');

module.exports = {
  assets: [path.resolve('./src/assets/fonts')],
  resolver: {
    extraNodeModules: {
      '@ikigai/assets': path.resolve(__dirname, 'libs/assets/src'),
    },
  },
};

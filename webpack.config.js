const path = require('path'); // eslint-disable-line no-unused-vars

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  }
};
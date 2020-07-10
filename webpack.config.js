const path = require('path'); // eslint-disable-line no-unused-vars
const glob = require('glob');

module.exports = {
  entry: glob.sync('./src/*.js'),
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
};
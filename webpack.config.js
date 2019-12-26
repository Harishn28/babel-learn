const path = require('path');

console.log('cwd=', process.cwd());

const ptwoNm = 

module.exports = {
  mode:"development",
  entry: './index.js',
  output: {
    filename: 'main.js',
    // path: path.resolve(__dirname, 'dist'),
  },
};
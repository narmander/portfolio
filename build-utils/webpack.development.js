const BananaWebpackPlugin = require('./presets/webpack.banana.js');

module.exports = () => ({
  devtool: "inline-source-maps",
  module: {
      rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] }
      ]
  },
  devServer: {
    contentBase: './app/templates',
    publicPath: "/dist/",
    watchContentBase: true,
    port: 9001,
    proxy: {
      "!(/dist/**/**.*)": {
        target: "http://127.0.0.1:5000"
      }
    },
  },
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin'); // add more configuration options for compression
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = () => ({
  output: {
    filename: "bundle.js"
  },
  devtool: "source-maps",
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), new CompressionPlugin()]
});

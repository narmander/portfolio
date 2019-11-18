const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, use: "ts-loader" },
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.css$/, use: "css-loader" }
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, "client/components/"),
      Svgs: path.resolve(__dirname, "client/assets/svgs/"),
      Styles: path.resolve(__dirname, "client/assets/styles/")
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};

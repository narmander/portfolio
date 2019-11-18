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
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
      { test: /\.ts(x?)$/, exclude: /node_modules/, use: "ts-loader" }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
};

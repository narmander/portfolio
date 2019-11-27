module.exports = () => ({
  module: {
    rules: [{ test: /\.ts(x?)$/, use: "ts-loader" }]
  }
});

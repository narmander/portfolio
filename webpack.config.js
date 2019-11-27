const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetsConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) =>
  webpackMerge(
    {
      mode: mode,
      entry: "./client",
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
      },
      module: {
        rules: [
          { test: /\.ts(x?)$/, use: "ts-loader", exclude: /node_modules/ },
          { test: /\.jpe?g$/, use: ["url-loader"] },
          {
            test: /\.js$/,
            use: { loader: "babel-loader", query: { compact: false } }
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({ template: "./app/templates/index.html" }),
        new webpack.ProgressPlugin()
      ],
      resolve: {
        alias: {
          Components: path.resolve(__dirname, "client/components/"),
          Svgs: path.resolve(__dirname, "client/assets/svgs/"),
          Styles: path.resolve(__dirname, "client/assets/styles/")
        },
        extensions: [".ts", ".tsx", ".js", ".jsx"]
      }
    },
    modeConfig(mode)
  );

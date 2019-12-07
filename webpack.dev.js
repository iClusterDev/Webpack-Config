const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: { filename: "[name].boundle.js" },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader", "sass-loader"]
      }
    ]
  }
});

const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = ["index.html", "about.html"];

const HtmlWebpackPlugins = (pages = [], minify = {}) => {
  if (!Array.isArray(pages)) return [];
  return pages.map(page => {
    return new HtmlWebpackPlugin({
      filename: page,
      template: `./src/${page}`,
      minify: { ...minify }
    });
  });
};

module.exports = merge(common, {
  mode: "development",
  output: { filename: "[name].boundle.js" },
  plugins: [...HtmlWebpackPlugins(pages)],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader", "sass-loader"]
      }
    ]
  }
});

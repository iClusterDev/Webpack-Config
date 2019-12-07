const merge = require("webpack-merge");
const { common, HtmlWebpackPlugins } = require("./webpack.common");

const pages = ["index.html", "about.html"];

module.exports = merge(common, {
  mode: "development",
  output: { filename: "[name].boundle.js" },
  plugins: [...HtmlWebpackPlugins(pages)],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
});

const path = require("path");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { common, HtmlWebpackPlugins } = require("./webpack.common");

const pages = ["index.html", "about.html"];

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[contentHash].boundle.min.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "css/[name].[contentHash].boundle.min.css" }),
    ...HtmlWebpackPlugins(pages, {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      removeComments: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
});

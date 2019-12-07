const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require("webpack"); // this is for wp middleware

module.exports = merge(common, {
  mode: "production",
  context: path.resolve(__dirname, "dist"), // this is for wp middleware
  output: {
    // filename: "[name].[contentHash].boundle.min.js",
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].boundle.min.js",
    publicPath: "/" // this is for wp middleware
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // this is for wp middleware
    new webpack.NoEmitOnErrorsPlugin(), // this is for wp middleware
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].boundle.min.css" }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  module: {
    rules: [
      {
        // js babel transpiler
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
        // scss loader
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader", "sass-loader"]
      }
    ]
  }
});

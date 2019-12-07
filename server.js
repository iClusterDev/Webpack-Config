// dev dependencies
// express
// webpack-dev-middleware

const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.prod");
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(require("webpack-hot-middleware")(compiler));

app.listen(3000, function() {
  console.log("Example app listening on port 3000!\n");
});

// // requires
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// const webpack = require("webpack");

// const config = {
//   mode: "development",
//   entry: { main: "./main.js" },
//   output: { filename: "[name].boundle.js" },
//   plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "postcss-loader", "sass-loader"]
//       },
//       {
//         test: /\.html$/,
//         use: [{ loader: "html-loader", options: { attrs: ["img:src"] } }]
//       },
//       {
//         test: /\.(svg|png|jpeg|jpg|gif)$/,
//         use: [
//           {
//             loader: "file-loader",
//             options: {
//               name: "[name].[hash].[ext]",
//               outputPath: "img",
//               esModule: false
//             }
//           }
//         ]
//       }
//     ]
//   }
// };

// const compiler = webpack(config);

// const memory = new MemoryFs();
// compiler.outputFileSystem = memory;

// const watching = compiler.watch(
//   {
//     aggregateTimeout: 300,
//     poll: undefined
//   },
//   (err, stats) => {
//     if (err || stats.hasErrors()) {
//       console.log("error");
//     } else {
//       console.log("watching");
//     }
//   }
// );

// // watching.close(() => {
// //   console.log("Watching Ended.");
// // });

// // console.log("ok");

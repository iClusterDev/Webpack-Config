module.exports = {
  // entry: { main: "./main.js", vendor: "./vendor.js" },
  // entry: { main: "./main.js" },
  entry: [
    // Add the client which connects to our middleware
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
    // useful if you run your app from another point like django
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    // And then the actual application
    "./main.js"
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { attrs: ["img:src"] } }]
      },
      {
        // FIXME: add image compressor
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "img",
              esModule: false
            }
          }
        ]
      }
    ]
  }
};

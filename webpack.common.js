module.exports = {
  // entry: { main: "./main.js", vendor: "./vendor.js" },
  entry: { main: "./main.js" },
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

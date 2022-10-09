const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 目前位於開發模式 'development'
  mode: "development",
  entry: "./src/index.js",
  // plugins: [
  //   // 建立一個新的 index.html 在 output 中
  //   new HtmlWebpackPlugin({
  //     title: "development",
  //   }),
  // ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 每一次建立都會清空 dist 資料夾
    // clean: true,
  },
  // devtool : inline-source-map 協助在開發環境中 debug
  devtool: "inline-source-map",
  // devServer : 在使用 webpack dev server 時，要告知從哪裡找文件
  devServer: {
    static: "./dist",
  },
  // 設置為 localhost : 8080
  // optimization: {
  //   runtimeChunk: "single",
  // },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

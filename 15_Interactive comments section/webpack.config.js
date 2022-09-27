const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.bundle.js",
    clean: true,
  },
  resolve: {
    fallback: { url: require.resolve("url/") },
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
          publicPath: "~/public/assets/avatars",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({
    //   // 配置html打包模板
    //   template: "./src/index.html",
    // }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/"),
          to: path.resolve(__dirname, "public/assets/"),
        },
      ],
    }),
  ],
};

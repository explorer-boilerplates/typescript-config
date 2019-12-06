/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  config: path.join(__dirname)
};

const config: webpack.Configuration = {
  mode: "production",
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    filename: "[name].bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({ title: "Typescript Project" })],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"]
  }
};

export default config;

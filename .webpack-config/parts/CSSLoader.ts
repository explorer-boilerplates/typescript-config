import webpack = require("webpack");

type CSSLoaderParameters = {
  include?: Array<RegExp>;
  exclude?: Array<RegExp>;
  use?: Array<any>;
};
export default ({ include, exclude, use = [] }: CSSLoaderParameters = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } }
        ].concat(use)
      }
    ]
  }
});

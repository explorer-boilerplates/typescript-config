type SVGLoaderParameters = {
  include?: Array<RegExp>;
  exclude?: Array<RegExp>;
  options?: object;
};
export default ({ include, exclude, options }: SVGLoaderParameters = {}) => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader",
          options
        }
      }
    ]
  }
});

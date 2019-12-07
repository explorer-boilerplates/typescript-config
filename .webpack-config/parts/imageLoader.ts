type ImageLoaderParameters = {
  include?: Array<RegExp>;
  exclude?: Array<RegExp>;
  use?: Array<any>;
  options?: object;
};

export default ({
  include,
  exclude,
  options,
  use = []
}: ImageLoaderParameters = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        include,
        exclude,
        use: use.concat({
          loader: "url-loader",
          options
        })
      }
    ]
  }
});

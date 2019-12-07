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
        use: [
          {
            loader: "url-loader",
            options
          }
        ].concat(use)
      }
    ]
  }
});

type TypeScriptLoaderParameters = {
  include?: Array<RegExp>;
  exclude?: Array<RegExp>;
};

export default ({ include, exclude }: TypeScriptLoaderParameters = {}) => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include,
        exclude
      }
    ]
  }
});

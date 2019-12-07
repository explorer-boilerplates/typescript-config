import MiniCssExtractPlugin from "mini-css-extract-plugin";

type ExtractCSSParameters = {
  include?: Array<RegExp>;
  exclude?: Array<RegExp>;
  use?: Array<any>;
};

export default ({ include, exclude, use = [] }: ExtractCSSParameters) => {
  // Output extracted CSS to a file
  const extractPlugin = new MiniCssExtractPlugin({
    filename: "[name].css"
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [MiniCssExtractPlugin.loader].concat(use)
        }
      ]
    },
    plugins: [extractPlugin]
  };
};

import HtmlWebpackPlugin from "html-webpack-plugin";

type ExtractHtmlParameters = {
  title?: string;
  template: string;
};

export default ({
  title = "Typescript Project",
  template
}: ExtractHtmlParameters) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
      template
    })
  ]
});

import PurgecssWebpackPlugin from "purgecss-webpack-plugin";
import kebabCase from "lodash/kebabCase";

type PurgeCSSParameters = {
  paths: string[];
};

class TailwindExtractor {
  static extract(content) {
    const matches = content.match(/[A-Za-z0-9-_:/]+/g) || [];
    const kebab = matches.map(m => kebabCase(m));
    return matches.concat(kebab).filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }
}

export default ({ paths }: PurgeCSSParameters) => ({
  plugins: [
    new PurgecssWebpackPlugin({
      paths: paths,
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "tsx"]
        }
      ]
    })
  ]
});

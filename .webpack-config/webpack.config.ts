/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import glob from "glob";

// Parts
import extractHTML from "./parts/extractHTMLPlugin";
import devServer from "./parts/devServer";
import outputPartial from "./parts/outputPartial";
import typescriptLoader from "./parts/typescriptLoader";
import resolvePartial from "./parts/resolvePartial";
import SVGLoader from "./parts/SVGLoader";
import postCSSLoader from "./parts/postCSSLoader";
import CSSLoader from "./parts/CSSLoader";
import imageLoader from "./parts/imageLoader";
import errorOverlayPlugin from "./parts/errorOverlayPlugin";
import generateSourceMaps from "./parts/generateSourceMaps";
import extractCSS from "./parts/extractCSS";
import purgeCSSPlugin from "./parts/purgeCSSPlugin";

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  config: path.join(__dirname)
};

const commonConfig = merge([
  extractHTML({
    template: `${PATHS.src}/template.html`
  }),
  typescriptLoader({ exclude: [/node_modules/] }),
  resolvePartial(),
  SVGLoader({
    options: {
      limit: 10 * 1024
    }
  })
]);

const productionConfig = merge([
  outputPartial({ path: PATHS.dist }),
  extractCSS({
    use: ["css-loader", postCSSLoader()]
  }),
  purgeCSSPlugin({ paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }) })
]);

const developmentConfig = merge([
  devServer(),
  CSSLoader({
    use: [postCSSLoader()]
  }),
  imageLoader(),
  errorOverlayPlugin(),
  generateSourceMaps({ type: "cheap-module-source-map" })
]);

type EnvObject = {
  mode: "production" | "development";
};

export default ({ mode }: EnvObject): webpack.Configuration => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

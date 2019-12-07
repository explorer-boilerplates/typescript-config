/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import webpack from "webpack";
import merge from "webpack-merge";
import glob from "glob";

// Parts
import extractHTMLPlugin from "./parts/extractHTMLPlugin";
import devServer from "./parts/devServer";
import outputPartial from "./parts/outputPartial";
import typescriptLoader from "./parts/typescriptLoader";
import resolvePartial from "./parts/resolvePartial";
import SVGLoader from "./parts/SVGLoader";
import postCSSLoader from "./parts/postCSSLoader";
import CSSLoader from "./parts/CSSLoader";
import imageLoader from "./parts/imageLoader";
import errorOverlayPlugin from "./parts/errorOverlayPlugin";
import devtoolPartial from "./parts/devtoolPartial";
import productionCSSLoader from "./parts/productionCSSLoader";
import purgeCSSPlugin from "./parts/purgeCSSPlugin";
import optimizationPartial from "./parts/optimizationPartial";
import cleanBuildPlugin from "./parts/cleanBuildPlugin";
import gitRevisionPlugin from "./parts/gitRevisionPlugin";

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist"),
  config: path.join(__dirname)
};

const commonConfig = merge([
  extractHTMLPlugin({
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
  productionCSSLoader({
    use: ["css-loader", postCSSLoader()]
  }),
  purgeCSSPlugin({ paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }) }),
  imageLoader({
    options: {
      limit: 10 * 1024,
      name: "[name].[ext]"
    },
    use: [
      "file-loader",
      {
        loader: "image-webpack-loader",
        options: {
          disable: true,
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          optipng: {
            enabled: true
          },
          pngquant: {
            quality: "65-90",
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          webp: {
            quality: 75
          }
        }
      }
    ]
  }),
  devtoolPartial({ type: "source-map" }),
  optimizationPartial(),
  cleanBuildPlugin(),
  gitRevisionPlugin()
]);

const developmentConfig = merge([
  devServer(),
  CSSLoader({
    use: [postCSSLoader()]
  }),
  imageLoader(),
  errorOverlayPlugin(),
  devtoolPartial({ type: "cheap-module-source-map" })
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

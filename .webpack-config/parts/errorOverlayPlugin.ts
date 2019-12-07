import ErrorOverlayPlugin from "error-overlay-webpack-plugin";

export default () => ({
  plugins: [new ErrorOverlayPlugin()]
});

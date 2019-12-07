import GitRevisionPlugin from "git-revision-webpack-plugin";
import { BannerPlugin } from "webpack";
export default () => ({
  plugins: [
    new BannerPlugin({
      banner: new GitRevisionPlugin().version()
    })
  ]
});

import presetEnv from "postcss-preset-env";
import tailwind from "tailwindcss";

type PostCSSLoaderParameters = {
  tailwindConfig?: string;
};

export default ({ tailwindConfig }: PostCSSLoaderParameters = {}) => ({
  loader: "postcss-loader",
  options: {
    plugins: () => [tailwind(tailwindConfig), presetEnv()]
  }
});

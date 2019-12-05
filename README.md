# Basic setup for JavaScript projects without any frameworks

**Dependency management**

For dependency management [Yarn Package Mangaer](https://yarnpkg.com/en/) was used.

This setup consist of:

1. `.editconfig` file for consistent coding styles for various editors and IDEs. ([EditorConfig](https://editorconfig.org/))
2. We use **[Prettier](https://prettier.io/)** for consistent formatting rules.
3. `.eslintrc.json` file. We use **[ESLint](https://eslint.org/)** for finding problems or potential bugs with our code. It also provides better **code quality** and consistent style.
   - For this setup **[Airbnb Style Guide](https://www.npmjs.com/package/eslint-config-airbnb)** is used as a base.
   - **All formatting rules are disabled inside ESLint** so that it's only used for errors, and **used Prettier to format all the code.**
   - `.eslintignore` file to exclude any unwanted files and directories from
4. **[Husky](https://github.com/typicode/husky)** is added to prevent bad commits.
5. **[lint-staged](https://github.com/okonet/lint-staged)** is added to enforce linting your code before committing.
6. **[Commitizen](https://github.com/commitizen/cz-cli)** to enfore more semantic commits and generating **conventional changelog.**

## Webpack

We use webpack to bundle our assets.

**Webpack configuration:**

-

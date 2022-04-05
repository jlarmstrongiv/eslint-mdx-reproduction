const extendsConfig = [
  "plugin:jest-formatting/recommended",
  "plugin:mdx/recommended",
];

const parserOptions = {
  project: "./tsconfig.json",
};

const plugins = ["jest-formatting", "unicorn"];

const rules = {
  "unicorn/prefer-node-protocol": ["error", { checkRequire: true }],
};

/** @type {import("@types/eslint").Linter.Config<import("@types/eslint").Linter.RulesRecord> } */
const eslintConfigNextJs = {
  extends: [...extendsConfig, "next/core-web-vitals"],
  parserOptions,
  plugins,
  rules: {
    ...rules,
  },
  settings: {
    next: {
      rootDir: process.cwd(),
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};
module.exports = eslintConfigNextJs;

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // <--- this ensures Prettier rules take priority
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    semi: true,
    bracketSpacing: false,
    printWidth: 80,
  },
};

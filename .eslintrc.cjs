module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        jsxSingleQuote: false,
        semi: true,
        trailingComma: "es5",
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
};

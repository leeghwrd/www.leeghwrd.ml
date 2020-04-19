module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "plugin:jest/recommended"
  ],
  plugins: [
    "prettier",
    "react",
    "jsx-a11y",
    "jest",
  ],
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true,
      "jsx": true
    }
  },
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  settings: {
    react: {
      "version": "latest"
    },
  },
  rules: {
  }
};
module.exports = {
  plugins: ['import', '@typescript-eslint', 'jest'],

  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'eslint:recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true,
  },
  rules: {
    'no-debugger': 'off',
    'no-console': 0,
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'no-new': 1,
    'max-lines-per-function': ['error', 85],
  },
  globals: {
    NodeJS: true,
  },
};

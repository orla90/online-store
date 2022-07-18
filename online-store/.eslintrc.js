module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'airbnb-typescript/base',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [
      '@typescript-eslint',
      'import'
    ],
    rules: {
      "semi": ["error", "always"],
      "@typescript-eslint/no-explicit-any": 2,
      "@typescript-eslint/no-non-null-assertion": "off"
    },
  };
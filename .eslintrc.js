module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: { 'prettier/prettier': ['error'] },
}

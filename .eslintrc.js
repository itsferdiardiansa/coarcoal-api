module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true,
    es2021: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,

     // strict https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    // strict which we may not be able to adopt
    '@typescript-eslint/explicit-module-boundary-types': 0,
    // allow common js imports as some deps are still with common-js 
    '@typescript-eslint/no-var-requires': 0,
    'no-useless-escape': 0,
    // this is for regex, it will throw for regex characters
    'no-useless-catch': 0,
    // this i have to add as we mostly use rollbar to catch error 
    '@typescript-eslint/no-explicit-any': 0,
    // this is needed as we assign things from process.env which may be null | undefined | string 
    // and we have explicitly this.configService.get().azure.fileUpload.containerName!
    '@typescript-eslint/no-non-null-assertion': 0,
    'no-async-promise-executor': 0,
    'no-multiple-empty-lines': ["error", { "max": 2, "maxEOF": 1 }]
  },
};

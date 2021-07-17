// TOOD: refactor
module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'plugin:react-hooks/recommended'], //  ,"react-hooks"
  // extends: [`${__dirname}/../.eslintrc.js`, require.resolve('@umijs/fabric/dist/eslint')],
  root: true,
  parserOptions: {
    project: './**/tsconfig.json',
  },
  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    GRAPHQL_URL: true,
    page: true,
    REACT_APP_ENV: true,
  },
  plugins: ['react-hooks'],
  rules: {
    // your rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

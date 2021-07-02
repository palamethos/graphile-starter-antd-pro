module.exports = {
  root: true,
  extends: [require.resolve('@umijs/fabric/dist/eslint')], //  ,"react-hooks", "plugin:react-hooks/recommended"
  // extends: `${__dirname}/../.eslintrc.js`,
  // in antd-design-pro
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    GRAPHQL_URL: true,
    page: true,
    REACT_APP_ENV: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

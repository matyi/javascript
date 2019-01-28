module.exports = {
  extends: [
    'eslint-config-dina-base',
    'eslint-config-dina-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-underscore-dangle': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-alert': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
  },
};

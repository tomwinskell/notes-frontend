module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  env: {
    // Your environments (which contains several predefined global variables)
    browser: true,
    node: true,
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
};
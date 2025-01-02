const baseConfig = require('../../.eslintrc.json');

module.exports = {
  ...baseConfig,
  overrides: [
    ...(baseConfig.overrides || []), // Ensure overrides are preserved
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
      rules: {
        // Add additional rules specific to this project
      },
    },
  ],
};

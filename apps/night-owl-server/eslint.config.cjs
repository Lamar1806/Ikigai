const baseConfig = require('../../.eslintrc.json');

module.exports = {
  ...baseConfig, // Spread the properties of the base config
  overrides: [
    ...(baseConfig.overrides || []), // Merge existing overrides
    // Add any project-specific overrides here
  ]
};

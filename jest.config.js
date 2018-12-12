let mappedModule;
switch (process.env.TEST_ENV) {
  case 'cjs':
    mappedModule = '<rootDir>/cjs/value-equal.js';
    break;
  case 'umd':
    mappedModule = '<rootDir>/umd/value-equal.js';
    break;
  case 'source':
  default:
    mappedModule = '<rootDir>/modules/index.js';
}

module.exports = {
  moduleNameMapper: {
    '^value-equal$': mappedModule
  },
  testMatch: ['**/__tests__/**/*-test.js'],
  testURL: 'http://localhost/'
};

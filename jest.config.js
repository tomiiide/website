module.exports = {
    testPathIgnorePatterns: [
      '<rootDir>/.next/',
      '<rootDir>/node_modules/'
    ],
    collectCoverage: true,
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    transform: {
      '\\.js$': '<rootDir>/node_modules/babel-jest',
    },
  };
  
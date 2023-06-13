module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverage: true,
  collectCoverageFrom: ['./src/app/**'],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: [
      "node_modules",
      ".module.ts",
      ".mock.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  }
};

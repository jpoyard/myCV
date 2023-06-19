module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  collectCoverageFrom: ['./src/app/**'],
  coverageReporters: [
    "lcov",
    "html",
    "cobertura"
  ],
  coverageDirectory: "<rootDir>/reports/",
  coveragePathIgnorePatterns: [
      "node_modules",
      ".module.ts",
      ".mock.ts",
      "index.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  modulePathIgnorePatterns: [],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },
};

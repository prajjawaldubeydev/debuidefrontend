module.exports = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/cssMock.js",
  },
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
};

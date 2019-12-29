module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  testPathIgnorePatterns: ["node_modules", ".cache", "public", "cypress"],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: ["<rootDir>/test/loadershim.ts"],
  snapshotSerializers: ["jest-emotion"],
}

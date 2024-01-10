module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest',
    "\\.(jpg|jpeg|png|gif)$": "jest-transform-stub"
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '\\.gif$': '<rootDir>/public/Loader.gif',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  globals: {
    'vue-jest': {
      babelConfig: true,
    },
  },
};

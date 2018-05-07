module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '!**/node_modules/**'
  ],
  coverageDirectory: 'test/coverage',
  moduleNameMapper: {
    '^vue$': "vue/dist/vue.common.js",
    '^@/(.*)$': '<rootDir>/src/$1',
    'src/([^\\.]*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  }
}

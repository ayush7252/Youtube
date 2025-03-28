module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/assetMock.js',
    'react-native-vector-icons/MaterialIcons': '<rootDir>/__mocks__/react-native-vector-icons.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-native-vector-icons|@react-native)/'
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
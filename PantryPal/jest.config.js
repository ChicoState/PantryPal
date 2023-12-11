// jest.config.js
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': require.resolve('babel-jest'),
  },
  "transformIgnorePatterns": [
      "node_modules/(?!(react-native|@react-native|@react-navigation/elements)/)"
    ]
  
};

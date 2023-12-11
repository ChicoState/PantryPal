// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 2021, // or the latest ECMAScript version your project supports
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["complexity"],
  rules: {
    "complexity": ["error", 10], // Set the complexity threshold as needed
  },
};

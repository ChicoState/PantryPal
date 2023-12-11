export const root = true;
export const extendsConfig = '@react-native';
export const parser = '@babel/eslint-parser';
export const parserOptions = {
  babelOptions: {
    configFile: "babel.config.js",
  },
  requireConfigFile: false,
};
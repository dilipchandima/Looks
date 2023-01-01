module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.ts', '.android.ts', '.ts', '.json'],
        alias: {
          res: './src/res',
          components: './src/components',
          screens: './src/screens',
          navigation: './src/navigation',
          store: './src/store',
        },
      },
    ],
  ],
};

const moduleResolver = [
  'module-resolver',
  {
    root: ['.'],
    extensions: [
      '.ios.ts',
      '.android.ts',
      '.ts',
      '.ios.tsx',
      '.android.tsx',
      '.tsx',
      '.jsx',
      '.js',
      '.json',
    ],
    alias: {
      '@app/components': './src/components',
      '@app/hocs': './src/utils/Hocs',
      '@app/hooks': './src/utils/hooks',
      '@app/utils': './src/utils',
      '@app/screens': './src/screens',
      '@app/core': './src/core',
      '@app/thirdparty': './src/thirdparty',
      '@app/types': './src/types',
      '@app/assets': '.src/assets',
      '@app/api': './src/api',
    },
  },
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [moduleResolver, 'react-native-reanimated/plugin'],
};

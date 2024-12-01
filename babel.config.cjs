module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // Esto asegura que React no necesite ser importado explícitamente
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-modules-commonjs']
};

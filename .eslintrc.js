module.exports = {
  extends: [
    'eslint:recommended',        // Reglas recomendadas de ESLint
    'standard',                  // Reglas estándar de JavaScript
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,           // Permite usar características modernas de JavaScript
    sourceType: 'module',        // Habilita los módulos ES6
  },
  env: {
    browser: true,               // Asume un entorno de navegador
    node: true,                  // Asume un entorno de Node.js
    jest: true,                  // Habilita las reglas específicas para Jest
  },
  rules: {
    'no-console': 'warn',        // Avisa cuando se usen `console.log`
    'no-debugger': 'warn',       // Avisa cuando se usen `debugger`
    'semi': ['error', 'always'], // Requiere punto y coma
    'quotes': ['error', 'single'], // Requiere comillas simples
  },
};

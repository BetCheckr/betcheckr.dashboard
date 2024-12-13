import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginJest from 'eslint-plugin-jest';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  { ignores: ['dist', 'node_modules', '.eslintrc.js', 'babel.config.js', 'coverage', 'jest.setup.js'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
      alias: {
        map: [
          ['@assets', path.resolve(__dirname, 'src/assets')],
          ['@components', path.resolve(__dirname, 'src/components')],
          ['@hooks', path.resolve(__dirname, 'src/hooks')],
          ['@pages', path.resolve(__dirname, 'src/pages')],
          ['@store', path.resolve(__dirname, 'src/store')],
          ['@styles', path.resolve(__dirname, 'src/styles')],
          ['@utils', path.resolve(__dirname, 'src/utils')],
          ['@mocks', path.resolve(__dirname, 'src/mocks')],
        ],
        extensions: ['.js', '.jsx'],
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      jest: pluginJest
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  }
]

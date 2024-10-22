module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  rules: {
    indent: ['error', 2],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': 'error',
    'no-console': 'off',
    'import/order': ['error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/app/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/pages/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/widgets/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/features/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/entities/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/shared/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '{..}+/**/*',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: './**/*.scss',
            group: 'index',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc' },
        pathGroupsExcludedImportTypes: ['builtin'],
        distinctGroup: false,
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': ['off'],
      },
    },
  ],
};

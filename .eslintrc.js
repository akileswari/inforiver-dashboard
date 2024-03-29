module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
      },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
    ],
    plugins: [
      '@typescript-eslint',
      'react'
    ],
    rules: {
      // Add your custom rules here
    }
  };
  
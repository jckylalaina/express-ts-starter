import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
      'no-unused-vars': 'off',
      'no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    ignores: [
      'node_modules',
      '.commitlintrc',
      '.cache',
      'package-lock.json',
      'public',
      'yarn.lock',
      'pnpm-lock.yaml',
      '.husky/*',
      'jest*',
    ],
  },
];

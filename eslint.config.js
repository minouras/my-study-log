// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import preact from 'eslint-plugin-preact';
import hooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default [
  { ignores: ['dist', 'build', 'node_modules'] },

  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'], // 型ベースのLintを有効化
      },
    },
    plugins: {
      preact,
      'react-hooks': hooks,
      import: importPlugin,
    },
    rules: {
      // Preact推奨（JSX等）
      ...preact.configs.recommended.rules,

      // Hooksルール（Preactでも有効）
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // import並び/空行
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],

      // 未使用の自動検知（unused-imports併用を想定）
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
    },
  },

  // Prettierと衝突しそうな整形ルールはESLint側で持たない方針
];

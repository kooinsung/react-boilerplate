module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '!.prettierrc'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: ['eslint:recommended'], // Uses the recommended rules from @eslint-plugin-react
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: { react: { version: 'detect' } },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'prettier/@typescript-eslint', // Prettier plugin
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended', // React hooks rules
        'plugin:jsx-a11y/recommended', // Accessibility rules
        'plugin:import/recommended',
        'plugin:json/recommended',
        'plugin:node/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended', // Prettier recommended rules
      ],
      rules: {
        // // We will use TypeScript's types for component props instead
        // 'react/prop-types': 'off',
        //
        // // No need to import React when using Next.js
        // 'react/react-in-jsx-scope': 'off',
        //
        // // This rule is not compatible with Next.js's <Link /> components
        // 'jsx-a11y/anchor-is-valid': 'off',
        //
        // // Why would you want unused vars?
        // '@typescript-eslint/no-unused-vars': ['error'],
        //
        // // I suggest this setting for requiring return types on functions only where useful
        // '@typescript-eslint/explicit-function-return-type': [
        //   'warn',
        //   {
        //     allowExpressions: true,
        //     allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        //   },
        // ],

        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],

        // 'no-undef': 'off',
        //
        // 'react/display-name': 1,
        // 'react/jsx-key': 2,
        // 'react/jsx-no-comment-textnodes': 2,
        // 'react/jsx-no-duplicate-props': 2,
        // 'react/jsx-no-target-blank': 2,
        // 'react/jsx-no-undef': 2,
        // 'react/jsx-uses-react': 2,
        // 'react/jsx-uses-vars': 2,
        // 'react/no-children-prop': 2,
        // 'react/no-danger-with-children': 2,
        // 'react/no-deprecated': 2,
        // 'react/no-direct-mutation-state': 2,
        // 'react/no-find-dom-node': 2,
        // 'react/no-is-mounted': 2,
        // 'react/no-render-return-value': 2,
        // 'react/no-string-refs': 2,
        // 'react/no-unescaped-entities': 2,
        // 'react/no-unknown-property': 2,
        // 'react/no-unsafe': 0,
        // 'react/prop-types': 2,
        // 'react/react-in-jsx-scope': 1,
        // 'react/require-render-return': 2,
        // 'react/jsx-child-element-spacing': 'off',
        // 'react/jsx-closing-bracket-location': 'off',
        // 'react/jsx-closing-tag-location': 'off',
        // 'react/jsx-curly-newline': 'off',
        // 'react/jsx-curly-spacing': 'off',
        // 'react/jsx-equals-spacing': 'off',
        // 'react/jsx-first-prop-new-line': 'off',
        // 'react/jsx-indent': 'off',
        // 'react/jsx-indent-props': 'off',
        // 'react/jsx-max-props-per-line': 'off',
        // 'react/jsx-one-expression-per-line': 'off',
        // 'react/jsx-props-no-multi-spaces': 'off',
        // 'react/jsx-space-before-closing': 'off',
        // 'react/jsx-tag-spacing': 'off',
        // 'react/jsx-wrap-multilines': 'off',
        //
        // 'react-hooks/rules-of-hooks': 'error',
        // 'react-hooks/exhaustive-deps': 'error',
        //
        // '@typescript-eslint/adjacent-overload-signatures': 'error',
        // '@typescript-eslint/ban-ts-ignore': 'error',
        // '@typescript-eslint/ban-types': 'error',
        // camelcase: 'off',
        // '@typescript-eslint/camelcase': ['error', { properties: 'always' }],
        // '@typescript-eslint/class-name-casing': 'error',
        // '@typescript-eslint/consistent-type-assertions': 'error',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/explicit-member-accessibility': [
        //   'error',
        //   { accessibility: 'no-public' },
        // ],
        // '@typescript-eslint/interface-name-prefix': 'error',
        // '@typescript-eslint/member-delimiter-style': 'off',
        // 'no-array-constructor': 'off',
        // '@typescript-eslint/no-array-constructor': 'error',
        // 'no-empty-function': 'off',
        // '@typescript-eslint/no-empty-function': 'off',
        // '@typescript-eslint/no-empty-interface': 'error',
        // '@typescript-eslint/no-explicit-any': 'off',
        // '@typescript-eslint/no-inferrable-types': 'off',
        // '@typescript-eslint/no-misused-new': 'error',
        // '@typescript-eslint/no-namespace': 'error',
        // '@typescript-eslint/no-non-null-assertion': 'warn',
        // '@typescript-eslint/no-this-alias': 'error',
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'warn',
        //
        // 'no-use-before-define': 'error',
        // '@typescript-eslint/no-use-before-define': [
        //   'error',
        //   { functions: false, classes: true, variables: true },
        // ],
        // '@typescript-eslint/no-var-requires': 'off',
        // '@typescript-eslint/prefer-namespace-keyword': 'error',
        // '@typescript-eslint/triple-slash-reference': 'error',
        // '@typescript-eslint/type-annotation-spacing': 'error',
        // 'no-var': 'off',
        // 'prefer-const': 'error',
        // 'prefer-rest-params': 'error',
        // 'prefer-spread': 'error',
        // '@typescript-eslint/func-call-spacing': 'off',
        // '@typescript-eslint/indent': 'off',
        // '@typescript-eslint/no-extra-parens': 'off',
        // '@typescript-eslint/semi': 'off',
        // 'no-unused-expressions': 'off',
        // '@typescript-eslint/no-unused-expressions': [
        //   'error',
        //   {
        //     allowShortCircuit: true,
        //     allowTernary: true,
        //     allowTaggedTemplates: true,
        //   },
        // ],
      },
    },
  ],
}

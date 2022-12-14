module.exports = {
  env: {
    es6: true,
    node: true,
  },
  root: true,
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaFeatures: {
    //   jsx: true,
    // },
    // project: 'tsconfig.json',
    // ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0, // arrow import & require modules
    '@typescript-eslint/no-unused-vars': 0, // arrow import empty modules
    'no-undef': 'off',
    'no-shadow': 'off', // resolve errror for XXX is already declared in XXXX
    '@typescript-eslint/no-shadow': 'off', // resolve errror for XXX is already declared in XXXX
    '@typescript-eslint/no-explicit-any': ['off'],
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    indent: ['error', 2, { SwitchCase: 1 }],
    // 'linebreak-style': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'dot-notation': 'off',
    'spaced-comment': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': ['error', 'never'],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': ['error', 'history'],
    'class-methods-use-this': 'off',
    radix: 'off',
    'global-require': 'off',
    'default-case': 'off',
    'no-param-reassign': 'error',
    'consistent-return': 'off',
    'no-script-url': 'error',
    'no-else-return': 'error',
    'no-restricted-syntax': 'error',
    'no-extend-native': 'error',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],
    'max-len': ['error', {
      code: 200,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
    'no-console': ['off'],
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'no-trailing-spaces': 'off',
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/no-dynamic-require': 'off',
    'no-multiple-empty-lines': 'off',
    'no-useless-escape': 'off',
    camelcase: 'off',
  },
};

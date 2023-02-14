const prettierOptions = require('./.prettierrc.js')

const RULES = {
  OFF: 0,
  WARNING: 1,
  ERROR: 2
}

const REACT_RULES = {
  'react-hooks/exhaustive-deps': RULES.WARNING, // Checks effect dependencies
  'react-hooks/rules-of-hooks': RULES.ERROR, // Checks rules of Hooks
  'react/default-props-match-prop-types': RULES.WARNING,
  'react/jsx-handler-names': RULES.WARNING,
  'react/jsx-no-duplicate-props': [RULES.WARNING, {ignoreCase: true}],
  'react/jsx-no-undef': RULES.WARNING,
  'react/jsx-pascal-case': [
    RULES.WARNING,
    {
      allowNamespace: true,
      allowAllCaps: true,
      ignore: []
    }
  ],
  'react/jsx-uses-react': RULES.OFF,
  'react/jsx-uses-vars': RULES.WARNING,
  'react/no-deprecated': RULES.WARNING,
  'react/no-direct-mutation-state': RULES.ERROR,
  'react/no-is-mounted': RULES.WARNING,
  'react/no-multi-comp': [RULES.WARNING, {ignoreStateless: true}],
  'react/no-unused-prop-types': RULES.WARNING,
  'react/react-in-jsx-scope': RULES.OFF,
  'react/require-render-return': RULES.WARNING,
  'react/jsx-filename-extension': [
    RULES.ERROR,
    {extensions: ['.jsx', '.tsx', '.test.ts']}
  ]
}

const JS_RULES = {
  'accessor-pairs': RULES.OFF,
  'no-console': RULES.WARNING,
  'no-debugger': RULES.ERROR,
  'no-nested-ternary': RULES.WARNING,
  'no-prototype-builtins': RULES.OFF,
  'no-return-await': RULES.WARNING,
  'no-unused-expressions': RULES.OFF,
  'no-unused-vars': [
    RULES.WARNING,
    {
      vars: 'all',
      args: 'none',
      ignoreRestSiblings: true
    }
  ],
  'no-var': RULES.WARNING,
  strict: RULES.OFF
}

const sortGroups = [
  // Side effect imports.
  ['^\\u0000'],
  // External isolated packages
  ['(^node:|^react|^next|^\\w)'],
  // External org packages @.
  ['(^@testing-library)'],
  // Internal packages.
  ['^@'],
  // Absolute imports and other imports such as Vue-style `@/foo`.
  // Anything not matched in another group.
  ['^'],
  // Relative imports. Anything that starts with a dot.
  ['^\\.'],
  // Style imports.
  ['^.+\\.s?css$']
]

module.exports = {
  env: {
    es2021: true,
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    jest: true // Enables for jest tests
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: 'module' // Allows using import/export statements
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
    },
    'import/resolver': {
      [require.resolve('eslint-import-resolver-node')]: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      [require.resolve('eslint-import-resolver-typescript')]: {
        alwaysTryTypes: true
      }
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  plugins: [
    'import',
    'react',
    'react-hooks',
    'no-only-tests',
    'prettier',
    'simple-import-sort',
    'jsx-a11y',
    'tailwindcss'
  ],
  rules: {
    ...REACT_RULES,
    ...JS_RULES,
    '@babel/no-unused-expressions': RULES.OFF,
    'prettier/prettier': [RULES.WARNING, prettierOptions],
    'simple-import-sort/imports': [RULES.WARNING, {groups: sortGroups}]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        warnOnUnsupportedTypeScriptVersion: true
      }
    }
  ]
}

module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // o la versión de ECMAScript que estés utilizando
    sourceType: 'module',
  },
  plugins: ['import'
  ],
  rules: {
    'import/no-unused-modules': ['error',
      { unusedExports: true
      }
    ],
  },
  "extends": "next/core-web-vitals"
};

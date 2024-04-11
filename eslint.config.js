import globals from 'globals';
import pluginJs from '@eslint/js';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: ['*.js '],
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      semi: 'error',
    },
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
];

// export default [
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,

// ];

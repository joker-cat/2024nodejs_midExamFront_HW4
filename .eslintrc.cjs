/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'standard'
  ],
  rules: {
    'vue/no-v-model-argument': 0
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

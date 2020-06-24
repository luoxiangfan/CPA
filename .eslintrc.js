module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "semi": "off",
    "quotes": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/name-property-casing": "off",
    "vue/attributes-order": "off",
    "vue/html-quotes": "off",
    "vue/html-indent": "off",
    "arrow-parens": "off",
    "object-shorthand": "off",
    "no-unused-vars": "off",
    "prefer-const": "off",
    "curly": "off",
    "no-unused-expressions": "off",
    "vue/no-use-v-if-with-v-for": "off",
    "vue/max-attributes-per-line": "off"
  }
}

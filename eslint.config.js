import vue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["dist", "node_modules", "src/assets/scss"],
  },
  ...vue.configs["flat/recommended"],
  ...vueTsEslintConfig(),
  prettier,
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  {
    // Pug templates are opaque to the Vue ESLint parser, so script-level
    // bindings only used in <template lang="pug"> get false-positive
    // unused-var errors. Disable that rule for .vue files until/unless we
    // wire up a pug-aware parser.
    files: ["**/*.vue"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "vue/component-definition-name-casing": "off",
    },
  },
];

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
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

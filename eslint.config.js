import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      semi: ["error", "always"],
      "no-console": "error",
      cy: "off",
    },
    env: {
      mocha: true,
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
]);

var cat = 1

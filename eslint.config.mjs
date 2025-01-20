import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/display-name": "off",
      "@typescript-eslint/no-explicit-any": "off", // any 타입 사용 허용
      "react/react-in-jsx-scope": "off", // React 17+에서는 불필요한 규칙
    },
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지
      },
    },
  },
];

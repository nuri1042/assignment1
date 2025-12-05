module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended", // ✅ Prettier와 충돌 제거 + 자동 포맷
    ],
    rules: {
      "prettier/prettier": "error", // prettier 규칙을 ESLint 에러로 표시
      "react/react-in-jsx-scope": "off", // React 17+에서는 필요 없음
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  
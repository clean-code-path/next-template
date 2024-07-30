import js from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["prettier.config.js"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        React: "readonly",
        JSX: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": js,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "react": react,
      "prettier": prettier
    },
    rules: {
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never"
        }
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "prefer-const": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"]
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"]
        },
        {
          selector: "typeLike",
          format: ["PascalCase"]
        }
      ],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "prettier/prettier": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": js,
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-var-requires": "off",
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "prettier": prettier,
    },
    rules: {
      "prettier/prettier": ["error", {
        endOfLine: "auto",
      }],
    },
  },
];

const rules = require('./.eslintrc.rules.js');

/** @type { import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config } */
module.exports = {
  "$schema": "https://json.schemastore.org/eslintrc",
  "root": true,
  "env": {
    "browser": true,
    "es6": true
  },
  "ignorePatterns": [
    "node_modules/**/*",
    "dist/**/*",
    ".idea/**/*",
    ".vscode/**/*"
  ],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:react-hooks/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "sourceType": "module",
        "project": "./tsconfig.json",
        "createDefaultProgram": true,
        "tsconfigRootDir": __dirname
      },
      "rules": rules.ts
    },
    {
      "files": ["*.js"],
      "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "latest"
      }
    }
  ]
}

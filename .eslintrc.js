module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "plugins": [
    "import",
    "flowtype",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "no-unused-vars": "off",
    "no-extra-boolean-cast": "off",
    "no-debugger": "off"
  }
}
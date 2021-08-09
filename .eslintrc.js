module.exports = {
  root: true,
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended", "prettier", "@nuxtjs"],
  "rules": {
    "quotes": [2, "single"],
    "no-unused-vars": 0,
    "no-console": 0
  }
}

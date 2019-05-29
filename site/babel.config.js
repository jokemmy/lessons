
module.exports = {
  presets: [
    [ "@babel/preset-env", {
      "corejs": 2,
      "useBuiltIns": "usage",
      "targets": {
        "browsers": "> 0.25%, not op_mini all, not dead, IE 10-11",
        "node": 7
      }
    }],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop'
  ],
  plugins: [
    "@babel/plugin-proposal-json-strings",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-optional-chaining",
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-do-expressions",
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta"
  ]
};

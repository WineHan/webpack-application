const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/" // file path
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(jpeg|png)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader", // need to install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties
          options: {
            presets: ["@babel/env"], // transform es6 or above to es5
            plugins: ["transform-class-properties"] // default class can not set properties so use this
          }
        }
      }
    ]
  }
};

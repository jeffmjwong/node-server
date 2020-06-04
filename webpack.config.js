const path = require("path");

module.exports = {
  entry: "./src",
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

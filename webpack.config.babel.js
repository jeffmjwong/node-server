import { resolve } from "path";

const config = {
  entry: "./src",
  target: "node",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};

export default config;

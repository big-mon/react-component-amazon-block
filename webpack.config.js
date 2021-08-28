const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/src/index.html"),
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "examples/src/index.js"),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  devServer: {
    port: 3001,
  },
};

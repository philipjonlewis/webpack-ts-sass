const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/index.ejs",
      name: "philip",
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/header.ejs"),
      location: "header_template",
      template_filename: ["index.html"],
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/footer.ejs"),
      location: "footer_template",
      template_filename: ["index.html"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});

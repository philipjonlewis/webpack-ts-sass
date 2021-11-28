const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/views/index.ejs",
      name: "this is the home",
      siteName: "Philip's Website",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/views/pages/about.ejs",
      name: "this is the about",
      siteName: "Philip's Website | About",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/views/pages/contact.ejs",
      name: "this is the contact",
      siteName: "Philip's Website | Contact",
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/header.ejs"),
      location: "header",
      template_filename: "*",
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, "./src/views/partials/footer.ejs"),
      location: "footer",
      template_filename: "*",
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

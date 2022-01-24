const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");
const CompressionPlugin = require("compression-webpack-plugin");


const { indexPage, aboutPage, contactPage } = require("./siteReferences");
module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin(indexPage),
    new HtmlWebpackPlugin(aboutPage),
    new HtmlWebpackPlugin(contactPage),
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
    new CompressionPlugin({
      algorithm: "gzip",
    })
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

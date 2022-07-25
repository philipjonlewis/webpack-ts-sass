const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
    about: "./src/ts/about.ts",
    contact: "./src/ts/contact.ts",
    vendor: "./src/vendors/vendor.ts",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"],
      // },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash][ext][query]",
  },
};

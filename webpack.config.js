const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nunjucksOptions = JSON.stringify({
  searchPaths: './src'
});

module.exports = {
  mode: "development",
  entry: ['./src/index.ts', './src/index.scss'],
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed',
          }
        }
      ],
    }, {
      test: /\.ts$/,
      use: 'ts-loader',
    }, {
      test: /\.njk\.html$/,
      use: ['html-loader', `nunjucks-html-loader?${nunjucksOptions}`]
    }]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
      chunkFilename: "style.css",
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `src/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'buttons/index.html',
      template: `src/components/buttons/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'cards/index.html',
      template: `src/components/cards/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'section-50/index.html',
      template: `src/components/section-50/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'signup-banner/index.html',
      template: `src/components/signup-banner/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'testimonial/index.html',
      template: `src/components/testimonials/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'typography/index.html',
      template: `src/typography/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'layout/cardrow/index.html',
      template: `src/layout/cardrow/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'layout/featured/index.html',
      template: `src/layout/featured/index.njk.html`,
    }),
    new HtmlWebpackPlugin({
      filename: 'dropdown/index.html',
      template: `src/components/dropdown/index.njk.html`,
    }),
  ]
};
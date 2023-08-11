const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/js/App.js',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    host: 'localhost', // Specify the host
    allowedHosts: 'all', // Or specify the exact hosts you want to allow
    headers: {
      'Access-Control-Allow-Origin': '*', // Adjust as needed for security
    },
    static: {
      directory: path.join(__dirname, 'dist'), // Adjust this path
    },
    hot: true,
    proxy: {
      '/': 'http://plugin-tester.local/', // Corrected URL
    },
  },
  plugins: [
    // Other plugins ...

    // Add this plugin to extract CSS
    new MiniCssExtractPlugin({
      filename: 'main.css', // The name of the extracted CSS file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

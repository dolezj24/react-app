const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
      rules: [
          {
              test: /\.(js)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
};

module.exports = config;
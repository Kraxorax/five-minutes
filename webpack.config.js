import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const outputDirectory = 'dist';

export const entry = ['babel-polyfill', './src/client/index.tsx'];
export const output = {
  path: join(__dirname, outputDirectory),
  filename: './js/[name].bundle.js'
};
export const devtool = 'source-map';
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'awesome-typescript-loader'
        },
      ],
      exclude: /node_modules/
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader'
    },
    {
      test: /\.less$/,
      use: [
        { loader: 'style-loader' },
        {
          loader: _loader,
          options: {
            publicPath: './Less',
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        { loader: 'css-loader' },
        {
          loader: 'less-loader',
          options: {
            strictMath: true,
            noIeCompat: true,
          }
        },
      ]
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    },
  ]
};
export const resolve = {
  extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.less']
};
export const devServer = {
  port: 3000,
  open: true,
  hot: true,
  proxy: {
    '/api/**': {
      target: 'http://localhost:8050',
      secure: false,
      changeOrigin: true
    }
  }
};
export const plugins = [
  new CleanWebpackPlugin([outputDirectory]),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.ico',
    title: 'express-typescript-react',
  }),
  new MiniCssExtractPlugin({
    filename: './css/[name].css',
    chunkFilename: './css/[id].css',
  }),
  new CopyPlugin([
    { from: './src/client/Assets', to: 'assets' },
  ])
];

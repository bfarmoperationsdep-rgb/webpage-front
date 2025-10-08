const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Cache busting з timestamp - оновлюється при кожній збірці
const timestamp = () => new Date().getTime() + Math.random().toString(36).substr(2, 9);

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `bundle.[contenthash:8].js?v=${timestamp()}`,
    chunkFilename: `[name].[contenthash:8].chunk.js?v=${timestamp()}`,
    publicPath: '/',
    clean: true,
  },
  devServer: {
    port: 3001,
    hot: false,
    liveReload: true,
    historyApiFallback: true,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
      'ETag': 'false'
    },
    devMiddleware: {
      writeToDisk: false,
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
      serveIndex: false,
      watch: true,
    },
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', 
          'css-loader', 
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
                verbose: false
              },
              warnRuleAsWarning: false
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      cache: false,
      minify: false,
      meta: {
        'cache-control': { 
          'http-equiv': 'Cache-Control', 
          content: 'no-cache, no-store, must-revalidate' 
        },
        'pragma': { 
          'http-equiv': 'Pragma', 
          content: 'no-cache' 
        },
        'expires': { 
          'http-equiv': 'Expires', 
          content: '0' 
        }
      }
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

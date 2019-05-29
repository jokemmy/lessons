
const fs = require( 'fs' )
const path = require( 'path' )
const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )
const WebpackBar = require( 'webpackbar' )
const FriendlyErrorsPlugin = require( 'friendly-errors-webpack-plugin' )
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' )
const HTMLPlugin = require( '@mdx-deck/webpack-html-plugin' )
const babel = require('./babel.config')



const rootPath = fs.realpathSync( process.cwd());

function resolve( relativePath ) {
  return path.resolve( rootPath, relativePath )
}

const webPackConfig = {
  stats: 'errors-only',
  mode: 'development',
  devtool: "source-map",
  // externals: [ 'react', 'react-dom' ],
  entry: resolve( 'site/entry.js' ),
  output: {
    publicPath: '',
    path: resolve( 'docs' ),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: require.resolve( 'babel-loader' ),
      options: babel
    }, {
      test: /\.js$/,
      include: resolve( 'node_modules/@mdx-deck' ),
      loader: require.resolve( 'babel-loader' ),
      options: babel
    }, {
      test: /\.mdx?$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve( 'babel-loader' ),
        options: babel
      }, {
        loader: require.resolve( '@mdx-deck/loader' ),
        options: {
          remarkPlugins: [
            require( 'remark-emoji' ),
            require( 'remark-unwrap-images' )
          ]
        }
      }]
    }, {
      test: /\.css$/,
      use: [
        MiniCSSExtractPlugin.loader,
        require.resolve( 'css-loader' )
      ]
    }]
  },
  resolve: {
    modules: [
      rootPath,
      resolve( 'node_modules' )
    ],
    extensions: [ '.js', '.json', '.jsx', '.css' ],
    alias: {
      'webpack-hot-middleware/client': path.resolve(
        require.resolve( 'webpack-hot-middleware/client' )
      ),
      "@Beginner": resolve( '1.Beginner' ),
      "@Elementary": resolve( '2.Elementary' ),
      "@Intermediate": resolve( '3.Intermediate' ),
      "@Advanced": resolve( '4.Advanced' ),
      "@MakeUp": resolve( '5.MakeUp' ),
      "@components": resolve( 'site/components' )
    }
  },
  devServer: {
    contentBase: resolve( 'site/public' ), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    port: 9000
  },
  plugins: [
    new WebpackBar({
      name: '[mdx-deck]',
    }),
    new FriendlyErrorsPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
    }),
    new HTMLPlugin({ context: {} })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = webPackConfig;

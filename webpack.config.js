const webpack = require('webpack');
const path = require('path');

const config = {
  bundle: 'bundle.js',
  src: 'app',
  dist: 'dist',
  script: 'app.js',
  port: 8080,
  host: 'http://localhost'
};

module.exports = {
    entry: [
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?' + config.host + ':' + config.port,
    path.resolve(__dirname, config.src + '/' + config.script)
  ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output: {
      path: path.join(__dirname, config.dist),
      filename: config.bundle
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file"
        },
        {
          test: /\.(woff|woff2)$/,
          loader: "url?prefix=font/&limit=5000"
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=application/octet-stream"
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url?limit=10000&mimetype=image/svg+xml"
        },
        {
          test: /\.gif/,
          loader: "url-loader?limit=10000&mimetype=image/gif"
        },
        {
          test: /\.jpg/,
          loader: "url-loader?limit=10000&mimetype=image/jpg"
        },
        {
          test: /\.png/,
          loader: "url-loader?limit=10000&mimetype=image/png"
        }
      ]
    },
    devServer: {
      contentBase: "./dist",
      noInfo: true, //  --no-info option
      hot: true,
      inline: true
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};

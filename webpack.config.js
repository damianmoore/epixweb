var webpack = require("webpack");
var path = require("path");


var env = process.env.NODE_ENV || 'dev'
var prod = env === 'prod'


var entry = './static/js/main.js'

var plugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.CommonsChunkPlugin("commons.chunk.js"),
]

var loaders = ['babel?presets[]=react,presets[]=es2015']

if (prod) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: true,
    mangle: true,
    sourceMap: true,
  }))
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }))

  entry = {
    app: entry,
  }
}
else {
  plugins.push(new webpack.HotModuleReplacementPlugin())
  loaders.unshift('react-hot')

  entry = {
    app: [
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/only-dev-server',
      entry
    ]
  }
}


module.exports = {
  cache: true,
  debug: false,
  entry: entry,
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'static/built'),
    publicPath: '/static/built/',
    filename: '[name].chunk.js',
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.resolve('./static/css'),
      path.resolve('./static/js')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: loaders,
        include: path.join(__dirname, 'static'),
      },
      {
        test: /\.s?css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
        ]
      },
      { test: /\.(png|gif|jpg|svg|ttf|woff|eot)/, loader: 'file-loader' }
    ]
  }
};

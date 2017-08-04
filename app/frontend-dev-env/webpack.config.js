var webpack = require('webpack')

module.exports = {
  context: __dirname,

  entry: {
    vendors: [ "webpack-material-design-icons" ],
     app: './main.jsx'
  },

  output: {
      path: '../Website-App/Static/static/apps/',
      filename: "[name].js",
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
        loader: "file-loader"
      }
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'assets/css', 'assets/js'],
    extensions: ['', '.js', '.jsx', '.css']
  },
}

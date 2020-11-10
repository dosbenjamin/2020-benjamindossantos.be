const path = require('path')

const TerserPlugin = require('terser-webpack-plugin')
const InjectPlugin = require('webpack-inject-plugin').default

module.exports = {
  mode: 'production',
  entry: './src/assets/js/main.js',
  stats: { all: false, warnings: true, errors: true },
  output: {
    path: path.resolve('public'),
    filename: 'assets/js/[name].[contenthash:8].mjs'
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.m?js(\?.*)?$/i,
        cache: true,
        parallel: true,
        terserOptions: { output: { comments: false } }
      })
    ]
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              modules: false,
              useBuiltIns: false,
              targets: {
                browsers: [
                  'Chrome >= 60',
                  'Safari >= 10.1',
                  'iOS >= 10.3',
                  'Firefox >= 54',
                  'Edge >= 15'
                ]
              }
            }]
          ]
        }
      }
    }]
  },
  plugins: [
    new InjectPlugin(() => {
      return `if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('/sw.js')
        })
      }`
    })
  ]
}
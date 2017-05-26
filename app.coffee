axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
css_pipeline = require 'css-pipeline'
babel = require 'babel-core'
browserify = require 'roots-browserify'
babelify = require('babelify').configure({ presets: ['es2015'] })


module.exports =
  ignores: ['readme.md', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    browserify(
      files: 'assets/js/main.js'
      out: 'js/main.js'
      transforms: babelify
    )
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  Handlebars:
    pretty: true



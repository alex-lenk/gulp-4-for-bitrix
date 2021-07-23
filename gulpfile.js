'use strict';

const {src, dest, series, lastRun, watch} = require('gulp');
const twig = require('gulp-twig');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync');
const svgMin = require('gulp-svgmin');
const svgStore = require('gulp-svgstore');
const basePath = require('path');
const newer = require('gulp-newer');
const debug = require('gulp-debug');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg');
//const terser = require('gulp-terser'); new EC6
//const sourcemaps = require('gulp-sourcemaps');

const pathFiles = {
  html: {
    src: ['./src/html/**/*.twig', '!./src/html/include/*.twig'],
    build: './root/',
    watch: './src/html/**/*.twig'
  },
  css: {
    src: ['./src/styles/**/*.scss', '!./src/styles/_*.scss', '!./src/styles/site/**', '!./src/styles/vendor/**'],
    build: './root/local/templates/static/css/',
    watch: './src/styles/**/*.scss'
  },
  js: {
    src: ['./src/js/**/*.js', '!./src/js/vendor/', '!./src/js/vendor.js'],
    srcVendor: './src/js/vendor.js',
    build: './root/local/templates/static/js/',
    watch: './src/js/**/*.js'
  },
  img: {
    src: './src/img/**/*.{jpg,jpeg,png,svg}',
    build: './root/local/templates/static/img/',
    watch: './src/img/**/*.{jpg,jpeg,png,svg}'
  },
  fonts: {
    src: './src/fonts/*.*',
    build: './root/local/templates/static/fonts/',
    watch: './src/fonts/*.**'
  },
  favicon: {
    src: './src/favicon/*.*',
    build: './root/local/templates/static/favicon/',
    watch: './src/favicon/*.**'
  }
};

function HTML() {
  return src(pathFiles.html.src, {since: lastRun(HTML)})
    .pipe(twig())
    .pipe(dest(pathFiles.html.build))
    .pipe(browserSync.stream())
}

function SCSS() {
  return src(pathFiles.css.src)
    //.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({
      level: {
        1: {
          specialComments: 0
        }
      }
    }))
    //.pipe(sourcemaps.write('maps'))
    .pipe(dest(pathFiles.css.build))
    .pipe(browserSync.stream())
}

function js() {
  return src(pathFiles.js.src, {since: lastRun(HTML)})
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(dest(pathFiles.js.build))
    .pipe(browserSync.stream())
}

function jsVendor() {
  return src(pathFiles.js.srcVendor)
    .pipe(rigger())
    .pipe(uglify())
    .pipe(dest(pathFiles.js.build))
    .pipe(browserSync.stream())
}

function images() {
  return src(pathFiles.img.src)
    .pipe(newer(pathFiles.img.build))
    .pipe(imagemin([
      imageminPngquant({
        speed: 5,
        quality: [0.6, 0.8]
      }),
      imageminZopfli({
        more: true
      }),
      imageminMozjpeg({
        progressive: true,
        quality: 85
      }),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {removeUnusedNS: false},
          {removeUselessStrokeAndFill: false},
          {cleanupIDs: false},
          {removeComments: true},
          {removeEmptyAttrs: true},
          {removeEmptyText: true},
          {collapseGroups: true}
        ]
      })
    ]))
    .pipe(dest(pathFiles.img.build))
    .pipe(debug({
      "title": "Images:"
    }))
    .on("end", browserSync.reload);
}

function fonts() {
  return src(pathFiles.fonts.src)
    .pipe(dest(pathFiles.fonts.build))
    .pipe(debug({
      "title": "Fonts:"
    }))
    .pipe(browserSync.stream())
}

function favicon() {
  return src(pathFiles.favicon.src)
    .pipe(dest(pathFiles.favicon.build))
    .pipe(debug({
      "title": "Favicon:"
    }))
    .pipe(browserSync.stream())
}

function myServer() {
  browserSync.init({
    server: {
      baseDir: pathFiles.html.build
    },
    port: 4007,
    notify: false
  })
  watch(pathFiles.html.watch, {usePolling: true}, HTML);
  watch(pathFiles.css.watch, SCSS);
  watch(pathFiles.js.watch, js);
  watch(pathFiles.js.watch, jsVendor);
  watch(pathFiles.img.watch, images);
}

function svgSprite() {
  return src('./src/img/sprite/*.svg')
    .pipe(svgMin(function getOptions(file) {
      let prefix = basePath.basename(
        file.relative,
        basePath.extname(file.relative)
      );
      return {
        plugins: [
          'removeDoctype',
          'removeComments',
          'sortAttrs',
          {
            name: 'cleanupIDs',
            parmas: {
              prefix: prefix + '-',
              minify: true
            }
          }
        ]
      }
    }))
    .pipe(svgStore())
    .pipe(dest(pathFiles.img.build));
}

exports.HTML      = HTML;
exports.SCSS      = SCSS;
exports.js        = js;
exports.jsVendor  = jsVendor;
exports.images    = images;
exports.fonts     = fonts;
exports.favicon   = favicon;
exports.myServer  = myServer;
exports.svgSprite = svgSprite;

exports.default = series(HTML, SCSS, js, jsVendor, images, fonts, favicon, svgSprite, myServer);

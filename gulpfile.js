'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
  return browserify({entries: './public/js/main.js', debug: true})
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('sample.js'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('default', ['build']);

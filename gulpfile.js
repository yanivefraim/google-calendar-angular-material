'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify'); 
var paths = require('./gulp.config.json');
gulp.task('default', function() {
	
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
    gulp.src(['./src/client/app/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(concat('script.js'))

    //.pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./src/client/dist/'));
});
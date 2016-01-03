'use strict';
var gulp = require('gulp');

var clean = require('gulp-clean');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var wiredep = require('wiredep').stream;


// Clean
gulp.task('clean', function () {
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

// Sass
gulp.task('sass', function () {
    gulp.src('./assets/sass/style.scss')
        .pipe(sass({ includePaths: ['./assets/css'], errLogToConsole: true }).on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

// Styles
gulp.task('styles', function () {
    return gulp.src('./assets/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/css'));
});

// Fonts
gulp.task('fonts', function () {
    return gulp.src('./assets/fonts/**/*.*')
        .pipe(gulp.dest('dist/assets/fonts'));
});

// Load bower_components to index.html 
gulp.task('bower', function () {
    gulp.src('index.html')
        .pipe(wiredep({
            bowerJson: require('./bower.json'),
            ignorePath: '../..'
        }))
        .pipe(gulp.dest('dist'));

    gulp.src('./bower_components/**/*.js')
        .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('bower-dev', function () {
    gulp.src('index.html')
        .pipe(wiredep({
            bowerJson: require('./bower.json'),
            ignorePath: '../..'
        }))
        .pipe(gulp.dest('./'));
});

// App
gulp.task('app', function () {
    return gulp.src('./app/**/*.*')
        .pipe(gulp.dest('dist/app'));
});

// db.json
gulp.task('db', function () {
    return gulp.src('./db/*.json')
        .pipe(gulp.dest('dist/db'));
});

gulp.task('prod', ['sass', 'styles', 'fonts', 'bower', 'db', 'app']);

gulp.task('dev', ['sass']);
'use strict';

const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sassLint = require('gulp-sass-lint'),
	watch = require('gulp-watch'),
	gulpCopy = require('gulp-copy'),
	newer = require('gulp-newer'),
	changed = require('gulp-changed'),
	concat = require('gulp-concat'),
	clean = require('gulp-clean'),
	autoprefixer = require('gulp-autoprefixer'),
	bourbon = require("bourbon"),
	neat = require("bourbon-neat");

// Compile sass files
function compileSass() {
	return gulp.src('./source/scss/**/*.scss')
		.pipe(
			sass(
				{
  					includePaths: [
    					neat.includePaths,
    					bourbon.includePaths
					],
					outputStyle: 'expanded'
				}
			)
		)
		.pipe(gulp.dest('./release/css')
		.on('error', sass.logError)
	);
}

// lint sass files prior to compilation
function lintSass() {
	return gulp.src(
		[
			'./source/scss/**/*.scss',
			'!./source/scss/_mixins.scss',
			'!./source/scss/carousel/**/*',
			'!./source/scss/_sprites.scss',
			'!./source/scss/_sliders.scss',
			'!./source/scss/_normalize.scss',
			'!./source/scss/_colorbox.scss',
			'!./source/scss/_tooltips.scss'
		]
	)
	.pipe(
		sassLint(
			{
				configFile: '.sass-lint.yml'
			}
		)
	)
	.pipe(sassLint.format())
	.pipe(sassLint.failOnError())
}

// run autoprefixer on compiled css files
function ap() {
	return gulp.src('./release/css/**/*.css')
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}
		)
	)
	.pipe(gulp.dest('./release/css/'))
}

//watch task for edited files
function watching() {
	gulp.watch('./source/scss/**/*.scss', gulp.series(compileCSS));
	gulp.watch('./source/js/**/*.js', gulp.series(copyJS));
	gulp.watch('./source/**/*.html', gulp.series(copyHTML));
}

//concatinate js files
function concatjs() {
	return gulp.src(['./source/js/js1.js','./source/js/js2.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('./release/js'));
}

//concatinate css files
function concatcss() {
	return gulp.src(['./release/css/main.css','./release/css/page.css'])
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./release/css'));
}

//copy html files from source directory into release directory
function copyHTML() {
	return gulp.src(['./source/**/*.html','!./node_modules/**'])
	.pipe(gulp.dest('./release'));
}

//copy js files from source directory into release directory
function copyJS() {
	return gulp.src(['./source/**/*.js','!./node_modules/**'])
	.pipe(gulp.dest('./release'));
}

//delete release directory as part of larger build task in order to ensure a clean codebase
function delRelease() {
	return gulp.src(['./release'], {read: false})
	.pipe(clean());
}

//delete css css directory as part of compileCSS task
function delCSS() {
	return gulp.src(['./release/css'], {read: false})
	.pipe(clean());
}

// const dependendTasks = gulp.series(delRelease, copyHTML, lintSass, compileSass, ap);
const wa = gulp.series(watching);
const compileCSS = gulp.series(lintSass, compileSass, ap);
const optimizeAssets = gulp.parallel(concatjs,concatcss);
const build = gulp.series(delRelease, copyHTML, copyJS, compileCSS, optimizeAssets);

//this is how to assign multiple tasks to a single task
//gulp.task('default', ['build:css','copyHTML']);
gulp.task('watch', wa);
gulp.task('compileCSS', compileCSS);
gulp.task('optimizeAssets', optimizeAssets);
gulp.task('default', build);

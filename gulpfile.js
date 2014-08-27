var _ = require('underscore');
var autoprefix = require('gulp-autoprefixer');
var deploy = require('gulp-gh-pages');
var es = require('event-stream');
var gulp = require('gulp');
var karma = require('gulp-karma');
var livereload = require('gulp-livereload');
var protractor = require('gulp-protractor').protractor;
var replace = require('gulp-replace');
var rjs = require('gulp-requirejs');
var sass = require('gulp-ruby-sass');
var spawn = require('child_process').spawn;
var uglify = require('gulp-uglify');
var webdriver = require('gulp-protractor').webdriver_standalone;
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");

var handleError = function (err) {
    console.log(err.name, ' in ', err.plugin, ': ', err.message);
    this.emit('end');
};

// Bump version
gulp.task('bump-version', function () {
    spawn('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout.on('data', function (data) {

        // Get current branch name
        var branch = data.toString();

        // Verify we're on a release branch
        if (/^release\/.*/.test(branch)) {
            var newVersion = branch.split('/')[1].trim();

            // Update client index.html
            gulp.src('./source/index.html')
                .pipe(replace(/(bust=v)(\d*\.?)*/g, '$1' + newVersion))
                .pipe(gulp.dest('./source'));

            var updateJson = function (file) {
                gulp.src(file)
                    .pipe(replace(/("version" *: *")([^"]*)(",)/g, '$1' + newVersion + '$3'))
                    .pipe(gulp.dest('./'));
            };

            updateJson('./bower.json');
            updateJson('./package.json');

            console.log('Successfully bumped to ' + newVersion);
        } else {
            console.error('This task should be executed on a release branch!');
        }
    });
});

// Copy
gulp.task('copy', ['sass'], function () {
    return es.concat(
        // update index.html to work when built
        gulp.src(['source/index.html'])
            .pipe(gulp.dest('build')),
        // copy config-require
        gulp.src(['source/js/config-require.js'])
            .pipe(uglify().on('error', handleError))
            .pipe(gulp.dest('build/js')),
        // copy template files
        gulp.src(['source/js/**/*.html'])
            .pipe(gulp.dest('build/js')),
        gulp.src(['vendor/angular-ui-bootstrap/src/**/*.html'])
            .pipe(gulp.dest('build/js')),
        // copy vendor files
        gulp.src(['source/vendor/**/*'])
            .pipe(gulp.dest('build/vendor')),
        // copy assets
        gulp.src(['source/assets/**/*'])
            .pipe(gulp.dest('build/assets')),
        // minify requirejs
        gulp.src(['build/vendor/requirejs/require.js'])
            .pipe(uglify().on('error', handleError))
            .pipe(gulp.dest('build/vendor/requirejs'))
    );
});

// Publish to GitHub Pages
gulp.task('gh-pages', ['js', 'copy'], function () {
    return gulp.src("./build/**/*")
        .pipe(deploy());
});

// JavaScript
gulp.task('js', ['html2js'], function () {
    var configRequire = require('./source/js/config-require.js');
    var configBuild = {
        baseUrl: 'source',
        insertRequire: ['js/main'],
        name: 'js/main',
//        removeCombined: true,
//        optimize: "none",
        wrap: true
    };
    var paths = {
        'app-partials'          : 'html2js/temp/partials',
        'ui-bootstrap-partials' : 'html2js/temp/ui.bootstrap.partials'
    };

    var config = _(configRequire).extend(configBuild);
    config.paths = _(config.paths).extend(paths);
    return gulp.src(['source/js/main.js'])
        .pipe(rjs(config).on('error', handleError))
        .pipe(uglify().on('error', handleError))
        .pipe(gulp.dest('build/js/'));
});

//Partials
gulp.task('html2js', function () {
    return es.concat(
        gulp.src(['source/js/**/*.html'])
            .pipe(minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(ngHtml2Js({
                moduleName: "app.partials",
                prefix: "js/"
            }))
            .pipe(concat("partials.js"))
            .pipe(gulp.dest("source/html2js/temp")),
        gulp.src(['source/template/**/*.html'])
            .pipe(minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            }))
            .pipe(ngHtml2Js({
                moduleName: "ui.bootstrap.partials",
                prefix: "template/"
            }))
            .pipe(concat("ui.bootstrap.partials.js"))
            .pipe(gulp.dest("source/html2js/temp"))
    );
});
// Karma
gulp.task('karma', function () {
    return gulp.src(['no need to supply files because everything is in config file'])
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }).on('error', handleError));
});

gulp.task('karma-ci', function () {
    return gulp.src(['no need to supply files because everything is in config file'])
        .pipe(karma({
            configFile: 'karma-compiled.conf.js',
            action: 'run'
        }).on('error', handleError));
});

// Sass
gulp.task('sass', function () {
    return gulp.src(['source/sass/*.scss', '!source/sass/_*.scss'])
        .pipe(sass({
            bundleExec: true,
            require: [
                './source/sass/sass_extensions.rb',
                'sass-globbing'
            ],
            style: 'compressed'
        }).on('error', handleError))
        .pipe(autoprefix().on('error', handleError))
        .pipe(gulp.dest('source/assets/css'));
});

// Protractor
gulp.task('protractor', function () {
    return gulp.src('source/js/**/*.e2e.js')
        .pipe(protractor({ configFile: 'p.conf.js' }));
});

gulp.task('protractor-ci', function () {
    return gulp.src('source/js/**/*.e2e.js')
        .pipe(protractor({ configFile: 'p-compiled.conf.js' }));
});

gulp.task('webdriver', webdriver);

// Watch
gulp.task('watch', ['sass', 'karma'], function () {
    gulp.watch('source/sass/**/*.scss', function () {
        gulp.run('sass');
    });

    // enable Livereload
    livereload.listen();
    gulp.watch([
        'source/assets/*.css',
        'source/index.html',
        'source/js/**/*',
        '!source/js/**/*.spec.js'
    ]).on('change', livereload.changed);
});
// Watch
gulp.task('watch-sass', ['sass'], function () {
    gulp.watch('source/sass/**/*.scss', function () {
        gulp.run('sass');
    });
});

gulp.task('default', ['js', 'copy'], function () {
    gulp.run('karma-ci');
    gulp.run('protractor-ci');
});

gulp.task('build', ['html2js', 'js', 'copy'], function () {
});

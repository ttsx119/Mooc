const gulp 	      = require('gulp');
const plugins     = require('gulp-load-plugins')();
const pngquant 	  = require('imagemin-pngquant');
const browserSync = require('browser-sync');

const jsDir = [
	'./js/*.js',
	'./js/render/*.js',
	'./js/data/*.js',
	'./js/admin/*.js'
];

gulp.task('css', () => {
	gulp.src('./scss/*.scss')
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
		.pipe(plugins.sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('js', () => {
	gulp.src(jsDir)
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.uglify())
		.pipe(plugins.sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('img', () => {
    gulp.src('./img/*.{png,jpg,svg,gif}')
            .pipe(
                    plugins.cache(
                            plugins.imagemin({
                                optimizationLevel: 5,
                                progressive: true,
                                interlaced: true,
                                multipass: true,
                                svgoPlugins: [{removeViewBox: false}],
                                use: [pngquant()]
                            })
                    )
            )
            .pipe(gulp.dest('./dist/img'));
});

gulp.task('font', () => {
    gulp.src('./font/*')
            .pipe(gulp.dest('./dist/font'));
});

gulp.task('css-watch', ['css'], browserSync.reload);

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('img-watch', ['img'], browserSync.reload);

gulp.task('server', ['css', 'js', 'img', 'font'], () => {
	browserSync.init({
		server: './'
	});

	gulp.watch(jsDir, ['js-watch']);
	gulp.watch('./scss/*.scss', ['css-watch']);
	gulp.watch('./img/*.{png,jpg,svg,gif}', ['img-watch']);

	gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('default', ['server']);
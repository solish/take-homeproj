var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nestcss = require('postcss-nested'),
autoprefixer = require('autoprefixer');

gulp.task('default', function() {
    console.log('changes are made in your index.html')
});
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([nestcss,cssvars,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('default');
    });
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});
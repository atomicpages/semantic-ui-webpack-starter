const gulp = require('gulp');
const del = require('del');
const path = require('path');
const chug = require('gulp-chug');

const SEMANTIC_GULP = path.resolve(__dirname, 'semantic', 'gulpfile.js');
const THEME_NAME = 'theme';

gulp.task('build', () => {
    return gulp.src(SEMANTIC_GULP).pipe(chug({ tasks: ['build'] }));
});

gulp.task('build-javascript', () => {
    return gulp.src(SEMANTIC_GULP).pipe(chug({ tasks: ['build-javascript'] }));
});

gulp.task('build-css', () => {
    return gulp.src(SEMANTIC_GULP).pipe(chug({ tasks: ['build-css'] }));
});

gulp.task('build-assets', () => {
    return gulp.src(SEMANTIC_GULP).pipe(chug({ tasks: ['build-assets'] }));
});

gulp.task('clean', () => {
    return gulp.src(SEMANTIC_GULP).pipe(chug({ tasks: ['clean'] }));
});

gulp.task('watch', () => {
    return gulp.src(SEMANTIC_GULP).pipe(chug({ tasks: ['watch'] }));
});

gulp.task('copy-to', () => {
    return gulp.src(THEME_NAME + '/**/*.*', { base: '.' }).pipe(gulp.dest('semantic/src/themes/'));
});

gulp.task('copy-from', ['copy-theme-config'], () => {
    return gulp
        .src('semantic/src/themes/' + THEME_NAME + '/**/*.*')
        .pipe(gulp.dest('./' + THEME_NAME));
});

gulp.task('copy-theme-config', () => {
    del('./theme.config');
    return gulp.src('semantic/src/theme.config').pipe(gulp.dest('.'));
});

const gulp        = require('gulp');
const browserSync = require('browser-sync');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('styles', function(){
    return gulp.
}
)
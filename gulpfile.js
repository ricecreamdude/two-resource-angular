const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('html:dev', () => {
  gulp.src(__dirname + '/app/**/*.html')
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack:dev', () => {
  gulp.src(__dirname + '/app/js/client.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch' , () => {
  gulp.watch(__dirname + '/app/js/*.js' , ['webpack:dev']);
  gulp.watch(__dirname + '/app/*.html' , ['html:dev']);
  gulp.watch(__dirname + '/app/templates/*.html' , ['html:dev']);
})

gulp.task('build:dev', ['webpack:dev', 'html:dev']);
gulp.task('default', ['build:dev','watch']);

//Copied form GitHub - Javascript Week 6

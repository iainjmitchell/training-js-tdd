var gulp = require('gulp'),
	git = require('gulp-git'),
	qunit = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./tests/**/*.html')
        .pipe(qunit());
});

gulp.task('push', ['test'], function(){
	var commitMessage = gulp.env.m || 'no commit message';
	console.log('Tests passed! Pushing code...');
	return gulp
		.src('./.')
		.pipe(git.add())
		.pipe(git.commit(commitMessage))
		.pipe(git.push());
});

gulp.task('default', function(){
	gulp.run('push');
});
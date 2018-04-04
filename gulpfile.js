var gulp=require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var cssNano=require('gulp-cssnano');
var htmlMin=require('gulp-htmlmin');
/*gulp.task('script', function(){
    // 指定指定的文件:参数是匹配的规则
    // 参数也可以是数组，数组中的元素就是匹配的规则
    gulp.src(['./app.js','./sign.js'])
    // concat 的参数是合并之后的文件名字
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});*/
gulp.task('style', function(){
    gulp.src(['./css/*.css'])
        .pipe(concat('index.min.css'))
        // 压缩操作
        .pipe(cssNano())
        .pipe(gulp.dest('./dist'))
});
/*
gulp.task('html', function(){
    gulp.src(['./index.html'])
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('./dist'))
});
*/

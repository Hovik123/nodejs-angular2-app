let gulp = require("gulp");
let uglify = require('gulp-uglify');
let concat =require("gulp-concat");
//variables
let dest = "public/assets";
let pats = {
    js: [
        "bower_components/jquery/dist/jquery.js",
        "bower_components/bootstrap/dist/js/bootstrap.js"
    ],
    css: [
        "bower_components/bootstrap/dist/css/bootstrap.css"
    ],
    fonts: [
        "bower_components/bootstrap/dist/fonts/*.*"
    ]
};
/**
 * copy task
 * copy and concat all css and js files.
 */
gulp.task("copy", ()=> {
    gulp.src(pats.js)
        .pipe(uglify())
        .pipe(concat("app.js"))
        .pipe(gulp.dest(dest + "/js"));

    gulp.src(pats.css)
        .pipe(concat("app.css"))
        .pipe(gulp.dest(dest + "/css"));

    gulp.src(pats.fonts)
        .pipe(gulp.dest(dest + "/fonts"));

});

gulp.task("default", ["copy"]);
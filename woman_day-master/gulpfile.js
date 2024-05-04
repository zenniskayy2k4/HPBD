/** Declare module */

const { src, dest, parallel, watch, series } = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync").create();

/** Files Path */
const FilesPath = {
  sassFiles: "assets/scss/**",
  htmlFiles: "*.html"
};

const { sassFiles, htmlFiles} = FilesPath;

/** Sass Task */
function sassTask() {
  return src(sassFiles)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.css"))
    .pipe(dest("assets/css"))
    .pipe(browserSync.stream());
}

/** HTML Task */
function htmlTask() {
  return src(htmlFiles)
    .pipe(browserSync.stream());
}

/** Watch Task */

function serve() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 3000
  });

  watch(sassFiles, sassTask);
  watch(htmlFiles, htmlTask)
}

exports.sass = sassTask;
exports.html = htmlTask;
exports.default = series(parallel(htmlTask, sassTask));
exports.serve = series(serve, parallel(htmlTask, sassTask));

const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// task convert scss to css
function scss () {
    src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('./src/css'))
}

// task run server
function run () {
    browserSync.init({
        server: './src'
    })// create server with folder src
    
    watch('./src/scss/*.scss').on('change', scss)// It converts scss into css when modifying scss file
    watch('./src/**/*.html').on('change', browserSync.reload)// it will reload when index.html is modify
    
}

exports.default = parallel(scss, run)
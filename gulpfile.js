const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');


// Opciones de configuración

let components = [
    'tooltip'
];

// Opciones para sass
let sassOptions = {
    outputStyle: 'compressed'
};

let autoprefixerOptions = {
    versions: '4 last browsers'
};

// Componentes de la interfaz de usuario
gulp.task('sass-components', () =>{
    for (let component of components)
        gulp.src(`./dev/scss/components/${component}/default.scss`)
            .pipe(sass(sassOptions))
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(gulp.dest(`./dist/css/${component}`));
});

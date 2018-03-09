const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');


// Opciones de configuración

// Array que contiene los componentes de la interfaz de usuario
// Este array se utiliza para recorrer la estructura de carpetas,
// cada componente. Así compilamos todos los componentes que
// necesitemos en cada momento.
let components = [
    'tooltip'
];

// Opciones para sass
let sassOptions = {
    outputStyle: 'compressed'
};

// Opciones para el autoprefijado
let autoprefixerOptions = {
    versions: '4 last browsers'
};

// Opciones para pug
let pugOptions = {
    pretty: true
};


// Componentes de la interfaz de usuario

// SASS
gulp.task('sass-ui', () =>{
    for (let component of components)
        gulp.src(`./dev/ui/scss/components/${component}/default.scss`)
            .pipe(sass(sassOptions))
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(gulp.dest(`./dist/uicss/${component}`));
});

// PUG
gulp.task('pug-ui', () =>{
    gulp.src('./dev/ui/pug/*.pug')
        .pipe(pug(pugOptions))
        .pipe(gulp.dest('./dist/ui'));
});

const mix = require('laravel-mix');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('public');

mix.sass('resources/sass/frontend/app.scss', 'css/frontend.css')
    .sass('resources/sass/backend/app.scss', 'css/backend.css')
    .js('resources/js/frontend/app.js', 'js/frontend.js')
    .js([
        'resources/js/backend/before.js',
        'resources/js/backend/app.js',
        'resources/js/backend/after.js'
    ], 'js/backend.js')
    .extract([
        'jquery',
        'bootstrap',
        'popper.js/dist/umd/popper',
        'axios',
        'sweetalert2',
        'lodash',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons'
    ]);
    // .extract([
    //     '@fortawesome/fontawesome-svg-core',
    //     '@fortawesome/free-brands-svg-icons',
    //     '@fortawesome/free-regular-svg-icons',
    //     '@fortawesome/free-solid-svg-icons'
    // ],'js/commons.js');


if (mix.inProduction() || process.env.npm_lifecycle_event !== 'hot') {
    mix.version();
}

mix.browserSync('localhost:8008');

const webpackConfig = smp.wrap({

});

mix.webpackConfig(webpackConfig);

// mix.disableNotifications();

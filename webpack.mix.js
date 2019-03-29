const mix = require('laravel-mix');
require('dotenv').config();

mix
  .setPublicPath('public')
  .webpackConfig(() => ({
    resolve: {
      modules: ['src/js', 'node_modules'],
    },
  }))
  .js('src/js/app.js', 'public/js')
  .sass('src/sass/app.scss', 'public/css')
  .copyDirectory('src/icon', 'public/icon')
  .copyDirectory('src/images', 'public/images')
  .copyDirectory('src/video', 'public/video')
  .copyDirectory('src/fonts', 'public/fonts')
  .sourceMaps()
  .browserSync(process.env.APP_URL);


/*
 |--------------------------------------------------------------------------
 | Production Mode
 |--------------------------------------------------------------------------
 */

if (mix.inProduction()) {
  mix
    .sourceMaps(false)
    .version()
    .options({
      terser: {
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
    });
}

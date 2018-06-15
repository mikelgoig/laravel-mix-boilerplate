const mix = require('laravel-mix');
require('dotenv').config();

mix
  .setPublicPath('public')
  .webpackConfig(() => ({
    resolve: {
      modules: ['src/js', 'node_modules'],
      alias: {
        scenes: path.resolve(__dirname, 'src/js/scenes/'),
        services: path.resolve(__dirname, 'src/js/services/'),
      },
    },
  }))
  .js('src/js/app.js', 'public/js')
  .sass('src/sass/app.scss', 'public/css')
  .copyDirectory('src/icon', 'public/icon')
  .copyDirectory('src/images', 'public/images')
  .copyDirectory('src/video', 'public/video')
  .copyDirectory('src/fonts', 'public/fonts')
  .sourceMaps()
  .browserSync({
    proxy: {
      target: process.env.APP_URL,
      reqHeaders() {
        return {
          host: 'localhost:3000',
        };
      },
    },
  });

/*
 |--------------------------------------------------------------------------
 | Production Mode
 |--------------------------------------------------------------------------
 */

if (mix.inProduction()) {
  mix
    .options({
      uglify: {
        uglifyOptions: {
          compress: {
            drop_console: true,
          },
        },
      },
    })
    .version();
}

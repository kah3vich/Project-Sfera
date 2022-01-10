import svgmin from 'gulp-svgmin'
import svgSprite from 'gulp-svg-sprite'
import cheerio from 'gulp-cheerio'
import replace from 'gulp-replace'

export const svg = () => {
    return app.gulp.src(app.path.src.svg)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SVG',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		.pipe(replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite.svg",
				}
			}
		}))
        .pipe(app.gulp.dest(app.path.build.svg))
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.svg))
        .pipe(app.plugins.browsersync.stream());
}

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var log = require('../../util/log');
var path = require('path');


module.exports = function runMinifyJS( options, dev ) {

  var stream = gulp.src( options.files );
  var message;

  dev = typeof dev !== 'undefined' ? dev : false;
  message = dev ? 'Renamed' : 'Minified';

  if ( ! options.concat ) {

    // Just rename
    stream = stream.pipe( plugins.rename( options.slug+options.minExtension ) );

  } else {

    // Combine
    if ( dev ) stream = stream.pipe( plugins.sourcemaps.init({ loadMaps: true }) );

    stream = stream
      .pipe( plugins.concat('combined.js') )
      .pipe( plugins.rename(  options.slug+options.minExtension ) );

    if ( dev ) stream = stream.pipe( plugins.sourcemaps.write() );

    message = 'Combined and '+message.toLowerCase();
  }

  if ( ! dev ) {

    // Minify in production
    stream = stream
      .pipe( plugins.bytediff.start() )
      .pipe( plugins.uglify() )
      .pipe( plugins.bytediff.stop() );
  }

  stream = stream
    .pipe( gulp.dest( options.dest ) )
    .on('end', function(){
      if ( ! dev || options.slug+options.minExtension !== options.slug+'.js' )
        log( 'JS', message+' to '+path.join(options.dest, options.slug+options.minExtension));
    });

  if (options.browserSync) {
    stream = stream.pipe( options.browserSyncInstance.stream() );
  }

  return stream;
};
